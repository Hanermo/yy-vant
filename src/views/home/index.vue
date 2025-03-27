<template>
 <div class="home-wrap">
    <van-sticky @change="stickyChange">
        <div :class="['nav-top',isSticky ? 'sticky-top': '']">
            <search placeholder="请输入关键词" @_search="onSearch"></search>
            <van-icon class="avatar-icon" style="height: 42px;"></van-icon>
        </div>
    </van-sticky>
    <div class="calendar-box">
        <calendar
        :events="[
            // { date: '2025-3-22', status: 'done' },
            // { date: '2025-3-26', status: 'pending' }
        ]"
        />
    </div>
    <div class="home-content">
        <!-- 追踪任意模块 -->
        <trackerSlot />
    </div>
 </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return{
            isSticky: false
        }
    },
    methods:{
        onSearch(){

        },
        stickyChange(isFixed){
            console.log('isFixed',isFixed);
            this.isSticky = isFixed
        }
    },
    components: {
        calendar: () => import('@/views/home/group/calendar/index.vue'),
        trackerSlot: () => import('@/views/home/group/tracker-slot/index.vue')
    }
}
</script>

<style lang="scss" scoped>
.home-wrap{
    background: #fff;
    height: calc(100% - 50px);/*no*/
    box-sizing: border-box;
    overflow: auto;
    padding: 15px;
    .nav-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        background: #fff;
    }
    .nav-top.sticky-top {
        padding: 15px;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.16);
    }
    .calendar-box{
        padding: 15px 0;
    }
}
</style>
