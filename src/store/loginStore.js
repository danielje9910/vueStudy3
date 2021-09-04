const moduleName = "loginStore"

const module = {
    namespaced: true,
    state: {  
        allUser:[
            {id:1, email:'danieljeike@naver.com', password:'1234', age:'47', mobile:'010-3242-6183'},
            {id:2, email:'danielje9910@gmail.com', password:'5678', age:'44', mobile:'010-3275-4758'}
        ],
        isLoginSuccess: false,
        message: ''
    },
    mutations: {  
        loginSucceess(state, payload){
            state.isLoginSuccess = true
            state.message = '로그인에 성공 하였습니다.'
        },
        loginFilure(state, payload){
            state.isLoginSuccess = false
            state.message = '로그인에 실패 하였습니다.'
        }
    },
    actions: {
        loginCheck({state, commit}, payload){
            console.log('>>>', payload)
            let obj = state.allUser.find((item)=>item.email === payload.email)
            if(!obj){
                commit('loginFilure')
            } else {
                if(payload.password !== obj.password){
                    commit('loginFilure')
                }else{
                    commit('loginSucceess')
                }
            }            
        }
    },
}

export {    
    module,
    moduleName
}