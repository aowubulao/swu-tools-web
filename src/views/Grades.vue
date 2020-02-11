<template>
    <div>
        <v-container>
            <v-content>
                <v-col xl="5" md="5" sm="7" xs="11" style="float: left">
                    <div
                            style="font-size: 24px; font-weight: 500; letter-spacing: 1px; margin-top: 14px; margin-bottom: 14px">
                        输入信息
                    </div>
                    <v-form ref="form" v-model="valid" lazy-validation style="width: 300px">
                        <v-text-field :counter="15" v-model="username" :rules="usernameRules" label="学号" required/>

                        <v-text-field type="password" v-model="password" :rules="passwordRules" label="密码" required/>

                        <v-select v-model="xnm" :items="years" label="学年" required/>
                        <v-select v-model="xqm" :items="xqs" label="学期" required/>
                    </v-form>
                    <v-btn color="#188FFF" :loading="isLoading"
                           :disabled="isLoading"
                           style="color: white; margin-right: 20px" type="primary" @click="submitForm">
                        查询
                    </v-btn>
                    <v-btn class="mr-4" @click="reset">重置</v-btn>
                    <v-btn style="margin-right: 30px" type="primary" @click="cleanGrades">
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

                </v-col>
                <v-col xl="5" md="5" sm="8" xs="11" style="float: left">
                    <GradeCard :grades="grades"/>
                </v-col>
            </v-content>
        </v-container>

        <!--  -->
        <v-snackbar v-model="isError" timeout="2000">
            {{ errorMessage }}
            <v-btn color="blue" text @click="isError = false">
                关闭
            </v-btn>
        </v-snackbar>
        <v-snackbar v-model="snackbar">
            成绩将以缓存方式暂存于本地，便于下次查看，可手动清除。
            <v-btn color="blue" text @click="snackbar = false">
                关闭
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    import GradeCard from "../components/GradeCard";

    export default {
        components: {
            GradeCard,
        },
        data: () => ({
            username: '',
            password: '',
            xnm: '2019',
            xqm: '1',
            grades: '',
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
            this.loadGrades();
        },
        methods: {
            submitForm () {
                if (this.$refs.form.validate()) {
                    this.getGrades();
                }
            },
            reset () {
                this.username = '';
                this.password = '';
                this.xnm = '2019';
                this.xqm = '1';
            },
            getGrades: async function () {
                this.isLoading = true;
                const axios = require('axios');
                let ret = await axios.get("https://api.neoniou.com/swu/info/grades?username=" + this.username +
                    "&password=" + this.password +
                    "&xnm=" + this.xnm +
                    "&xqm=" + this.xqm
                ).then(ret => {
                    this.isLoading = false;
                    if (ret.status === 200) {
                        this.grades = ret.data;
                        this.saveGrades();
                    }
                }).catch(error => {
                    this.isLoading = false;
                    this.isError = true;
                    this.errorMessage = error.response.data.message;
                    console.log(error.response.data);
                });
            },
            saveGrades () {
                localStorage.setItem('grades', JSON.stringify(this.grades));
            },
            loadGrades () {
                if (localStorage.getItem('grades') !== null && localStorage.getItem('grades') !== '') {
                    this.grades = JSON.parse(localStorage.getItem('grades'));
                }
            },
            cleanGrades () {
                this.grades = '';
                localStorage.setItem('grades', '');
            }
        },
    }
</script>

<style>

</style>
