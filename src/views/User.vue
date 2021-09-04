<template>
    <div>
        <h1>User 컴포넌트</h1>
        <p>이름: 뷰제이에스</p>
        <p>{{ getDateFormat(createDate) }}</p>
        <p>{{ busDate }}</p>        
        <UserDetail
            :name = "name"
            :address = "address"
            :phone = "phone"
            :hasDog = "hasDog"
        >            
        </UserDetail>
        <UserEditor
            :name = "name"
            :address = "address"
            :phone = "phone"
            :hasDog = "hasDog"
            @userModify="userModify">
        </UserEditor>
    </div>
</template>

<script>
import UserDetail from '@/components/UserDetail'
import UserEditor from '@/components/UserEditor'
import { dateFormat } from '@/mixins/dateFormat.js'

import { eventBus } from '../main.js'

export default{
    name: 'User',
    components: {
        UserDetail, UserEditor
    },
    mixins: [
        dateFormat
    ],
    data () {
        return {
            name: '김경현',
            address: '부천시 원미구 90번길 21',
            phone: '010-3242-6183',
            hasDog: false,
            createDate: '',
            busDate: ''
        }
    },
    created() {
        this.createDate = new Date()
        eventBus.$on('updateDate', (date)=>this.testMethods(date))
    },
    methods: {
        userModify(User){
            this.name = User.name
            this.address = User.address
            this.phone = User.phone
            this.hasDog = User.hasDog
        },
        testMethods(date){
            this.busDate = date
        }
    }
}
</script>