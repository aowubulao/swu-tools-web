<template>
    <div>
        <v-container>
            <v-content>
                <v-col xl="6" md="6" sm="12" xs="12" style="float: left">
                    <v-form ref="form" v-model="valid" lazy-validation style="width: 300px">
                        <v-text-field :counter="15" v-model="username" :rules="usernameRules" label="学号" required/>

                        <v-text-field type="password" v-model="password" :rules="passwordRules" label="密码" required/>

                        <v-select v-model="xnm" :items="years" label="学年" required/>
                        <v-select v-model="xqm" :items="xqs" label="学期" required/>
                    </v-form>
                    <v-btn color="#188FFF" style="color: white; margin-right: 30px" type="primary" @click="submitForm">
                        查询
                    </v-btn>
                    <v-btn class="mr-4" @click="reset">重置</v-btn>
                    <br>
                    <transition name="fade">
                        <div style="color: #fc5185; font-weight: 600" v-show="isLoading">查询中...耗时大约5-15s</div>
                    </transition>

                </v-col>
                <v-col xl="6" md="6" sm="12" xs="12" style="float: left">
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
    </div>
</template>

<script>
    import Navigation from "../components/Navigation";
    import GradeCard from "../components/GradeCard";

    export default {
        components: {
            GradeCard,
            Navigation,
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
                let params = new URLSearchParams();
                params.append('username', this.username);
                params.append('password', this.password);
                params.append('xnm', this.xnm);
                params.append('xqm', this.xqm);
                let ret = await axios.get("https://api.neoniou.com/swu/info/grades?username=" + this.username +
                    "&password=" + this.password +
                    "&xnm=" + this.xnm +
                    "&xqm=" + this.xqm
                ).then(ret => {
                    this.isLoading = false;
                    if (ret.status === 200) {
                        this.grades = ret.data;
                    }
                }).catch(error => {
                    this.isLoading = false;
                    this.isError = true;
                    this.errorMessage = error.response.data.message;
                    console.log(error.response.data);
                });
            },
            sbTest() {
                this.isError = true;
                this.errorMessage = "123";
            }
        },
    }
</script>

<style>

</style>
