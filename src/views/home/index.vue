<template>
 <div class="home-wrap">
    <van-sticky @change="stickyChange">
        <div :class="['nav-top',isSticky ? 'sticky-top': '']">
            <search placeholder="请输入关键词" @_search="onSearch"></search>
            <van-icon class="avatar-icon" style="height: 42px;" @click="openMineSetUp"></van-icon>
        </div>
    </van-sticky>
    <div class="calendar-box">
        <calendar
        :events="[
            { date: '2025-4-27', count: 1 },
            { date: '2025-4-30', count: 2 }
        ]"
        />
    </div>
    <div class="home-content">
        <!-- 追踪任意模块 -->
        <trackerSlot />
    </div>

    <!-- 打开我的弹窗 -->
    <van-popup v-model="minePopupVisible" :style="{height: '100%',width: '100%'}" position="right" >
      <mine :show.sync="minePopupVisible"></mine>
    </van-popup>
 </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return{
            isSticky: false,
            minePopupVisible: false
        }
    },
    methods:{
        onSearch(){

        },
        stickyChange(isFixed){
            console.log('isFixed',isFixed);
            this.isSticky = isFixed
        },
        openMineSetUp(){
            this.minePopupVisible = true
        }
    },
    components: {
        calendar: () => import('@/views/home/group/calendar/index.vue'),
        trackerSlot: () => import('@/views/home/group/tracker-slot/index.vue'),
        mine: () => import('@/views/mine/index.vue')
    }
}
</script>

<style lang="scss" scoped>
.home-wrap{
    // background: #fff;
    height: calc(100% - 50px);/*no*/
    width: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    .nav-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        background: #fff;
        padding: 15px;
    }
    .nav-top.sticky-top {
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.16);
    }
    .calendar-box{
        padding: 8px 8px 0;
        .calendar-wrap {
            background: #fff;
            padding: 15px;
            border-radius: 6px;
        }
    }
    .home-content{
        padding: 8px;
        margin-top: 16px;
    }
}
</style>
