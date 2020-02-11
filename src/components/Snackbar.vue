<template>
    <div>
        <v-btn text icon color="#fc5185" @click="snackbar = !snackbar"
               style="margin-top: 2px; margin-left: -16px">
            <v-icon>mdi-calendar-question</v-icon>
        </v-btn>
        <v-snackbar v-model="snackbar">
            {{message}}
            <v-btn color="blue" text @click="snackbar = false">
                关闭
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        props: ['message'],
        data: () => ({
            snackbar: false
        })
    }
</script>