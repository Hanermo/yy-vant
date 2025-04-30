<template>
    <div class="calendar-picker-wrapper">
        <div class="cp-header">
            <span class="header-icon"></span>
        </div>
        <van-calendar
        class="calendar-picker"
        :poppable="false"
        :show-confirm="false"
        color="#2279C9"
        :style="{ height: '500px' }"
        />
    </div>
</template>

<script>
export default {
    name:'',
    data(){
      return{
      }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.calendar-picker-wrapper{
    ::v-deep .van-overlay{
        background-color: #9d9d9d2b;
    }
    .cp-header {
        height: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        .header-icon {
            display: block;
            width: 32px;
            height: 5px;
            background: #ccc;
            border-radius: 10px;
        }
    }
    .calendar-picker{
        margin-top: 10px;
        /deep/ {
            .van-calendar__header{
                box-shadow: none;
            }
            .van-calendar__header-title{
                display: none;
            }
            .van-calendar__selected-day{
                border-radius: 50%;
                width: 35px !important;
                height: 35px !important;   
            }
        }
    }
}
</style>