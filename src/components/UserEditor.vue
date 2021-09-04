<template>
    <div>
        <v-text-field
            v-model="user.name">
        </v-text-field>
        <v-text-field
            v-model="user.address">
        </v-text-field>
        <v-text-field
            v-model="user.phone">
        </v-text-field>
        <v-radio-group
            v-model="user.hasDog">
            <v-radio
                label="없음"
                :value="false">
            </v-radio>
            <v-radio
                label="있음"
                :value="true">
            </v-radio>
        </v-radio-group>
        <v-btn class="ma-2" outlined color="indigo"
            @click="modify">수정</v-btn>
    </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
    name:'UserEditor',
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
    data () {
        return {
            user : {}
        }
    },
    created () {
        this.user.name = this.name
        this.user.address = this.address
        this.user.phone = this.phone
        this.user.hasDog = this.hasDog
    },
    methods: {
        modify(){
            this.$emit('userModify', this.user)
            // eventBus.$emit('updateDate', new Date())
            eventBus.updateDate(new Date())
        }
    }
}
</script>