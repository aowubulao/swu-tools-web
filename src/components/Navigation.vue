<template>
    <div id="inspire">
        <v-navigation-drawer v-model="drawer" app width="280">
            <v-hover v-slot:default="{ hover }">
                <v-responsive class="nav-back" :height="hover ? 330 : 280">

                    <v-avatar style="margin-left: 60px; margin-top: 40px" width="150" height="150">
                        <img src="../../src/assets/img/favicon.jpg" alt="favicon">
                    </v-avatar>
                    <transition name="fade">
                        <div v-show="hover" class="nav-back-words">西南大学助手</div>
                    </transition>
                </v-responsive>
            </v-hover>

            <v-list dense>
                <v-list-item link @click="goHome">
                    <v-list-item-action>
                        <v-icon>mdi-folder-home-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>首页</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="goGrades">
                    <v-list-item-action>
                        <v-icon>mdi-format-list-checks</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>成绩查询</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="goCourses">
                    <v-list-item-action>
                        <v-icon>mdi-clipboard-list</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>课表查询</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="#1976D2" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer/>
        </v-app-bar>

    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
            title: '',
        }),
        watch:{
            $route(to, from){
                this.changeTitle();
            }
        },
        created() {
            this.changeTitle();
        },
        methods: {
            goHome () {
                if (this.$route.path !== ('/')) {
                    this.$router.push('/');
                }
            },
            goGrades () {
                if (this.$route.path !== ('/grades')) {
                    this.$router.push('/grades');
                }
            },
            goCourses () {
                if (this.$route.path !== ('/courses')) {
                    this.$router.push('/courses');
                }
            },
            changeTitle () {
                if (this.$route.path === ('/')) {
                    this.title = '首页';
                }
                if (this.$route.path === ('/grades')) {
                    this.title = '成绩查询';
                }
                if (this.$route.path === ('/courses')) {
                    this.title = '课表查询';
                }
            }
        }
    }
</script>

<style>

    .slide-fade-enter-active {
        transition: all .225s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .slide-fade-leave-active {
        transition: all .125s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(1.5vh);
        opacity: 0;
    }

    .nav-back {
        background-color: #1565C0;
        width: 100%;
        transition:height 500ms;
        -moz-transition:height 500ms;
        -webkit-transition:height 500ms;
        -o-transition:height 500ms;
    }
    .nav-back-words {
        font-size: 26px;
        text-align: center;
        margin-top: 60px;
        color: white;
        letter-spacing: 1px;
    }
</style>
