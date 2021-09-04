export const dateFormat = {
    methods: {
        getDateFormat(date){
            if(!date){
                return ''
            }

            let hour = date.getHours()
            let min = date.getMinutes()
            let seconds = date.getSeconds()
            let fullDate = date.getFullYear() +'/'+ (date.getMonth()+1)+'/'+date.getDate()

            return fullDate + ' ' + hour + ':' + min + ':' + seconds
        }
    },
}