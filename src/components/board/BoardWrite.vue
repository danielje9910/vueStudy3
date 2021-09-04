<template>
    <div>
        <h1>게시판쓰기({{ boardSize }})</h1>
        <v-text-field
            placeholder="제목"
            v-model="board.title">
        </v-text-field>
        <v-textarea
          solo
          label="내용"
          v-model="board.cn"
        ></v-textarea>

        <v-btn @click="boardReg">등록</v-btn>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import {moduleName} from '@/store/boardStore'

const {mapState, mapActions, mapGetters} = createNamespacedHelpers(moduleName)

export default {
    data(){
        return{
            board: {}
        }
    },
    computed:{
        ...mapGetters(['boardSize'])
    },
    methods: {
        ...mapActions(['actAddBoard']),
        boardReg(){
            let params ={
                ...this.board
            }
            this.actAddBoard(params)
        }
    }
}
</script>