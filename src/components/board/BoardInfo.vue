<template>
    <div>
        <h1>게시판정보</h1>
        <p>제목 : {{ boardInfo.title }}</p>
        <p>내용 : {{ boardInfo.cn }}</p>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data(){
        return{
            board: {}
        }
    },
    computed:{
        ...mapState(['boardInfo'])
    },
    mounted(){
        console.log('mounted > route', this.$route)
        this.getBoardInfo()
    },
    methods: {
        ...mapActions(['actBoardInfo']),
        getBoardInfo(){
            let params ={
                seq: this.$route.params.seq
            }
            this.actBoardInfo(params)
            console.log('getBoardInfo > boardInfo', this.boardInfo)
        }
    }
}
</script>