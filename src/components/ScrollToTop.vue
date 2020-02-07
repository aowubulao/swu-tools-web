<template>
    <div>
        <v-fab-transition>
            <v-btn absolute dark fab right bottom width="45px" height="45px"
                   v-show="!hidden"
                   color="#fc5185" style="margin-bottom: 155px; position: fixed; z-index: 9999" @click="scrollToTop">
                <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
        </v-fab-transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                hidden: true,
            }
        },
        methods: {
            onScroll () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop > 200) {
                    this.hidden = false;
                }
                if (scrollTop <= 200) {
                    this.hidden = true;
                }
            },
            scrollToTop () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            },
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll, true);
        }
    }
</script>