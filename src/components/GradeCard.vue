<template>
    <div>
        <div style="font-size: 24px; font-weight: 500;letter-spacing: 1px; margin-top: 10px">成绩信息</div>
        <hr style="margin-top: 10px; margin-bottom: 14px">
        <div v-for="grade in grades" :key="grade">
            <v-card class="mx-auto" outlined elevation="2" style="margin-top: 10px">
                <v-container>
                    <div style="margin-top: 2px">课程名称: {{grade.kcmc}}</div>
                    <div style="margin-top: 2px">成绩: {{grade.cj}}</div>
                    <div style="margin-top: 2px">绩点: {{grade.jd}}</div>
                    <div style="margin-top: 2px">学分: {{grade.xf}}</div>
                </v-container>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['grades'],
        data: () => ({

        }),
    }
</script>