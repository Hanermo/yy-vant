<template>
    <div class="calendar-picker-wrapper">
        <van-popup 
        v-model="calendarPopupShow" 
        :style="{height: '50%'}"
        position="bottom" 
        round 
        @close="closeHandle">
            <div>hhhhhh</div>
        </van-popup>
    </div>
</template>

<script>
export default {
    name:'',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data(){
      return{
        calendarPopupShow: false
      }
    },
    watch:{
        show(val){
            this.calendarPopupShow = val
        }
    },
    methods: {
        openHandle(){
        },
        closeHandle(){
            this.$emit('update:show',false)
        },
    }
}
</script>

<style lang="scss" scoped>
.calendar-picker-wrapper{
    ::v-deep .van-overlay{
        background-color: #9d9d9d2b;
    }
}
</style>