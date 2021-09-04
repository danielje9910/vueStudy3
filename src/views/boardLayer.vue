<template>
    <div>
        <h1>BoardLayer</h1>
        <v-btn @click="$router.push({name: 'boardList'})">게시판목록</v-btn>
        <v-btn @click="$router.push({name: 'boardWrite'})">게시판등록</v-btn>

        <router-view/>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    mounted(){
        console.log('this.$router', this.$route)
        // this.getUsers()
    },
    methods: {
        // ...mapActions(['getUsers'])
    }
}
</script>