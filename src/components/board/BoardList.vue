<template>
    <div>
        <h1 v-if="boardList">게시판리스트({{boardSize}})</h1>
        <table>
            <tr>
                <td>번호</td>
                <td>제목</td>
                <td>내용</td>
                <td>날짜</td>
            </tr>
            <tr v-for="(item, index) in boardList" :key="index">
                <td><a @click="getBoardInfo(item.seq)" style="cursor:pointer">{{ item.seq }}</a></td>
                <td>{{ item.title }}</td>
                <td>{{ item.cn }}</td>
                <td>{{ item.date }}</td>
            </tr>
        </table>
    </div>
</template>
<script>

import { createNamespacedHelpers } from 'vuex'
import {moduleName} from '@/store/boardStore'

const {mapState, mapActions, mapGetters} = createNamespacedHelpers(moduleName)

export default {
    computed:{
        ...mapState(['boardList']),
        ...mapGetters(['boardSize'])
    },
    mounted(){
        this.getBoardList()
    },
    methods: {
        ...mapActions(['actBoardList', 'actBoardInfo']),        
        getBoardList(){
            let params = {
                seq:1
            }
            this.actBoardList(params)
        },
        getBoardInfo(seq){
            this.$router.push({name:'MemberInfo', params:{seq}})
        }
    }
}
</script>