<template>
    <div>
        <div style="font-size: 24px; font-weight: 500;letter-spacing: 1px; margin-top: 10px">成绩信息</div>
        <hr style="margin-top: 10px; margin-bottom: 14px">
        <div v-for="grade in grades" :key="grade">
            <v-hover v-slot="{ hover }">
                <v-card class="mx-auto grades-card" :elevation="hover ? 12 : 2">
                    <v-container>
                        <div style="margin-top: 2px">
                            <span style="margin-right: 3px">课程名称:</span>
                            <span style="color: #188FFF">{{grade.kcmc}}</span>
                        </div>
                        <div style="margin-top: 2px">
                            <span style="margin-right: 3px">成绩:</span>
                            <span style="color: #188FFF">{{grade.cj}}</span>
                        </div>
                        <div style="margin-top: 2px">
                            <span style="margin-right: 3px">绩点:</span>
                            <span style="color: #188FFF">{{grade.jd}}</span>
                        </div>
                        <div style="margin-top: 2px">
                            <span style="margin-right: 3px">学分:</span>
                            <span style="color: #188FFF">{{grade.xf}}</span>
                        </div>
                    </v-container>
                </v-card>
            </v-hover>
        </div>
        <br><br><br>
    </div>
</template>

<script>
    export default {
        props: ['grades'],
        data: () => ({

        }),
    }
</script>

<style>
    .grades-card {
        margin-top: 10px;
        opacity: 0.9;
    }
</style>