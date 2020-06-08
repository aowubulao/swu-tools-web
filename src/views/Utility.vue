<template>
    <div>
        <v-container>
            <v-content style="margin-left: 10px; margin-top: 40px">
                <div
                        style="font-size: 24px; font-weight: 500; letter-spacing: 1px; margin-top: 14px; margin-bottom: 14px">
                    寝室信息
                </div>
                <hr style="margin-top: 10px; margin-bottom: 14px; width: 320px">
                <v-form ref="form" v-model="valid" lazy-validation style="width: 300px; margin-top: 40px">
                    <v-select
                            dense
                            v-model="build"
                            :items="builds"
                            item-text="name"
                            item-value="id"
                            label="寝室楼"
                            persistent-hint
                            return-object
                            single-line/>

                    <v-text-field :counter="4"
                            type="number" v-model="roomCode" :rules="roomCodeRules" label="寝室号" required/>

                </v-form>
                <v-btn color="#188FFF" :loading="isLoading"
                       :disabled="isLoading"
                       style="color: white; margin-right: 20px; margin-top: 20px" type="primary" @click="submitForm">
                    查询
                </v-btn>
                <v-btn text icon
                       color="#fc5185"
                       @click="snackbar = !snackbar"
                       style="margin-top: 20px; margin-left: 100px">
                    <v-icon>mdi-calendar-question</v-icon>
                </v-btn>
                <div v-show="balance !== ''" style="margin-top: 30px">
                    <span style="font-size: 20px; font-weight: 600">余额：{{balance}}</span>
                </div>
            </v-content>
        </v-container>

        <v-snackbar v-model="snackbar">
            如果查询不到数据，就是学校网站又崩了... =w=
            <v-btn color="blue" text @click="snackbar = false">
                关闭
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>

    export default {
        data: () => ({
            roomCode: '',
            isLoading: false,
            build: {name: '竹园1区A栋', id: '100024'},
            balance: '',
            snackbar: false,
            builds: [
                { name: '竹园1区A栋', id: '100024' },
                { name: '竹园1区B栋', id: '100025' },
                { name: '竹园1区C栋', id: '100026' },
                { name: '竹园1区D栋', id: '100027' },
                { name: '竹园1区E栋', id: '100028' },
                { name: '竹园1区F栋', id: '100029' },
                { name: '橘园7舍', id: '100043' },
                { name: '橘园9舍', id: '100038' },
                { name: '橘园8舍', id: '100039' },
                { name: '橘园10舍', id: '100040' },
                { name: '橘园11舍', id: '100041' },
                { name: '橘园12舍', id: '100042' },
                { name: '橘园13舍', id: '100022' },
                { name: '杏园A栋', id: '100001' },
                { name: '杏园C栋', id: '100003' },
                { name: '杏园B栋', id: '100002' },
                { name: '杏园D栋', id: '100004' },
                { name: '杏园E栋', id: '100005' },
                { name: '杏园F栋', id: '100006' },
                { name: '梅园1舍', id: '100021' },
                { name: '梅园2舍', id: '100054' },
                { name: '梅园3舍', id: '100055' },
                { name: '梅园4舍', id: '100056' },
                { name: '竹园2区1舍', id: '100023' },
                { name: '竹园2区2舍', id: '100030' },
                { name: '竹园2区3舍', id: '100031' },
                { name: '竹园2区4舍', id: '100032' },
                { name: '竹园2区5舍', id: '100033' },
                { name: '竹园2区6舍', id: '100034' },
                { name: '楠园1舍', id: '100044' },
                { name: '楠园2舍', id: '100045' },
                { name: '楠园3舍', id: '100046' },
                { name: '楠园4舍', id: '100047' },
                { name: '楠园5舍', id: '100048' },
                { name: '楠园6舍', id: '100049' },
                { name: '楠园7舍', id: '100050' },
                { name: '楠园8舍', id: '100062' },
                { name: '楠园9舍', id: '100052' },
                { name: '楠园13舍', id: '100053' },
                { name: '桃园1舍', id: '100057' },
                { name: '桃园2舍', id: '100058' },
                { name: '桃园3舍', id: '100059' },
                { name: '桃园4舍', id: '100060' },
                { name: '桃园5舍', id: '100061' },
                { name: '桃园6舍', id: '100063' }
            ],
            roomCodeRules: [
                v => !!v || '请填写寝室号！'
            ],
        }),
        watch: {

        },
        mounted() {

        },
        methods: {
            submitForm () {
                if (this.$refs.form.validate()) {
                    this.getUtility();
                }
            },
            getUtility: async function () {
                this.isLoading = true;
                const axios = require('axios');
                let ret = await axios.get("/swu/info/utility?buildId=" + this.build.id +
                    "&roomCode=" + this.roomCode
                ).then(ret => {
                    this.isLoading = false;
                    if (ret.status === 200) {
                        this.balance = ret.data;
                    }
                }).catch(error => {
                    console.log(error.response.data);
                });
            },
        }
    }
</script>