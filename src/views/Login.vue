<template>
    <v-container fill-height style="max-width:450px">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert class="mb-3" type="error"
                    :value="isError">
                    이메일또는 비밀번호를 확인해 주세요.
                </v-alert>
                <v-alert class="mb-3" type="success"
                    :value="isLoginSuccess">
                    로그인 성공
                </v-alert>
                <v-card>
                    <v-toolbar flat height="30">
                        <v-toolbar-title>로그인</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                    <v-text-field v-model="email" label="이메일을 입력하세요"></v-text-field>
                    <v-text-field v-model="password" type="password" label="패스워드를 입력하세요"></v-text-field>
                    <v-btn @click="login">로그인</v-btn>
                    <v-btn @click="test">테스트</v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import axios from 'axios'
import { createNamespacedHelpers } from 'vuex'
import {moduleName} from '@/store/loginStore'

const {mapState, mapActions} = createNamespacedHelpers(moduleName)

export default {
    data(){
        return{
            email: '',
            password:'',
            isError: false,
            isSuccess: false
        }
    },
    computed:{
        ...mapState(['allUser', 'isLoginSuccess', 'message']),
    },
    methods:{
        ...mapActions(['loginCheck']),
        login(){
            // console.log('>>>', ...mapActions(['loginCheck']))
            const user = {
                email:this.email,
                password:this.password
            }

            this.loginCheck(user)
        },
        test(){
            axios.get('http://localhost:8080/api/test')
            .then((response) => {
                console.log('ok', response)
            })
            .catch((err) =>{
                console.log('error',err)
            })
            .then(()=>{
                console.log('then')
            })
        }
    }
}
</script>