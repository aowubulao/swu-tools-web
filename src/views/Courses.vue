<template>
    <div>
        <v-container>
            <v-content>
                <v-expansion-panels class="exp-class">
                    <v-expansion-panel>
                        <v-expansion-panel-header>输入信息</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-form ref="form" v-model="valid" lazy-validation style="width: 300px">
                                <v-text-field :counter="15" v-model="username" :rules="usernameRules" label="学号" required/>

                                <v-text-field type="password" v-model="password" :rules="passwordRules" label="密码" required/>

                                <v-select v-model="xnm" :items="years" label="学年" required/>
                                <v-select v-model="xqm" :items="xqs" label="学期" required/>
                            </v-form>
                            <v-btn color="#188FFF" :loading="isLoading"
                                   :disabled="isLoading"
                                   style="color: white; margin-right: 16px" type="primary" @click="submitForm">
                                查询
                            </v-btn>
                            <v-btn class="mr-4" @click="reset">重置</v-btn>
                            <v-btn style="margin-right: 20px" type="primary" @click="cleanCourses">
                                清除数据
                            </v-btn>
                            <v-btn text icon color="#fc5185" @click="snackbar = !snackbar"
                                   style="margin-top: 2px; margin-left: -16px">
                                <v-icon>mdi-calendar-question</v-icon>
                            </v-btn>
                            <br>
                            <transition name="fade">
                                <div style="color: #fc5185; font-weight: 600" v-show="isLoading">查询中...耗时大约5-15s</div>
                            </transition>
                            <br>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                <div style="margin-top: 40px">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left" style="width: 5%">星期</th>
                                <th class="text-left" style="width: 20%">节数</th>
                                <th class="text-left" style="width: 25%">课程名称</th>
                                <th class="text-left" style="width: 25%">地点</th>
                                <th class="text-left" style="width: 25%">周数</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in courses" :key="item">
                                    <td>{{ item.xqj }}</td>
                                    <td>{{ item.jcs }}</td>
                                    <td>{{ item.kcmc }}@{{ item.xm }}</td>
                                    <td>{{ item.cdmc }}</td>
                                    <td>{{ item.zcd }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </div>
            </v-content>
        </v-container>

        <v-snackbar v-model="snackbar">
            课表将以缓存方式暂存于本地，便于下次查看，可手动清除。
            <v-btn color="blue" text @click="snackbar = false">
                关闭
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        data: () => ({
            username: '',
            password: '',
            xnm: '2019',
            xqm: '2',
            courses: '',
            isLoading: false,
            isError: false,
            errorMessage: '',
            snackbar: false,
            years: ['2016', '2017', '2018', '2019'],
            xqs: ['1', '2', '3'],
            usernameRules: [
                v => !!v || '请填写学号！',
                v => (v && v.length >= 15 && v.length < 16) || '请输入正确的学号',
            ],
            passwordRules: [
                v => !!v || '请填写密码！'
            ]
        }),
        created() {
            this.loadCourses();
        },
        methods: {
            submitForm () {
                if (this.$refs.form.validate()) {
                    this.getCourses();
                }
            },
            reset () {
                this.username = '';
                this.password = '';
            },
            getCourses: async function () {
                this.isLoading = true;
                const axios = require('axios');
                let ret = await axios.get("https://api.neoniou.com/swu/info/courses?username=" + this.username +
                    "&password=" + this.password +
                    "&xnm=" + this.xnm +
                    "&xqm=" + this.xqm
                ).then(ret => {
                    this.isLoading = false;
                    if (ret.status === 200) {
                        this.courses = ret.data;
                        this.saveCourses();
                    }
                }).catch(error => {
                    this.isLoading = false;
                    this.isError = true;
                    this.errorMessage = error.response.data.message;
                    console.log(error.response.data);
                });
            },
            saveCourses () {
                localStorage.setItem('courses', JSON.stringify(this.courses));
            },
            loadCourses() {
                if (localStorage.getItem('courses') !== null && localStorage.getItem('courses') !== '') {
                    this.courses = JSON.parse(localStorage.getItem('courses'));
                }
            },
            cleanCourses() {
                this.courses = '';
                localStorage.setItem('courses', '');
            }
        },

    }

</script>

<style>
    .exp-class {
        width: 60%;
    }
    @media screen and (max-width: 1000px) {
        .exp-class {
            width: 70%;
        }
    }
    @media screen and (max-width: 600px) {
        .exp-class {
            width: 99%;
        }
    }
</style>