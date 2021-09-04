<template>
<div>
    <h1>User Detail</h1>
    <p>{{ name}}</p>
    <p>{{ address}}</p>
    <p>{{ phone}}</p>
    <p>{{ hasDog}}</p>
    <p>{{ hasDogKr }}</p>
    <p>{{ getDateFormat(delieveryDate) }}</p>
</div>
</template>

<script>
import { eventBus } from '../main.js'
import { dateFormat } from '@/mixins/dateFormat.js'

export default {
    name: 'UserDetail',
    mixins: [
        dateFormat
    ],
    props: {
        name : {
            type:String,
            default: ''
        },
        address : {
            type:String,
            default: ''
        },
        phone : {
            type:String,
            default: ''
        },
        hasDog : {
            type:Boolean,
            default: false
        }
    },
    data() {
        return {
            delieveryDate: ''
        }
    },
    computed: {
        hasDogKr() {
            return this.hasDog === true ? '있음':'없음'
        }
    },
    created(){
        eventBus.$on('updateDate', (date) => {
            this.delieveryDate = date
        })
    }
}
</script>