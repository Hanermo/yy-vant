<template>
    <div class="schedule-list-wrapper">
        <ul class="ul-box" v-if="sort == 1">
            <li :class="['li-item', item.fontClass]" v-for="(item,index) in scheduleList" :key="index + 'li-item'">
                <div class="li-left">
                    <div class="li-title">{{ item.title }}</div>
                    <div class="li-time">{{ item.time }}</div>
                </div>
                <div class="li-right">
                    <van-checkbox v-model="item.checked" shape @change="checkChange(item)"></van-checkbox>
                </div>
            </li>
        </ul>
        <div :class="['li-item',scheduleList[0].fontClass]" v-else>
            <div class="li-left">
                <div class="li-title">{{ scheduleList[0].title }}</div>
                <div class="li-time">{{ scheduleList[0].time }}</div>
            </div>
            <div class="li-right">
                <van-checkbox v-model="scheduleList[0].checked" shape @change="checkChange(scheduleList[0])"></van-checkbox>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'schedule-list',
    props: {
        sort: {
            type: Number,
            default: 1
        }
    },
    data(){
      return{
        scheduleList: [
            { title: '户外跑步3公里', time: '7:30PM', checked: false },
            { title: '帕梅拉12min有氧训练', time: '8:30PM', checked: false },
        ]
      }
    },
    methods: {
        checkChange(item){
            console.log('chack',this.scheduleList);
            const fontClass = item.checked ? 'selected' : ''
            this.$set(item,'fontClass',fontClass)
        }
    }
}
</script>

<style lang="scss" scoped>
.ul-box{
    display: flex;
    flex-direction: column;
    gap: 10px;
    
}
.li-item{
    padding: 16px 12px;
    background: #fff;
    border-radius: 0.1875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .li-left {
        display: flex;
        flex-direction: column;
        gap: 4px;
        .li-title {
            font-size: 14px;
            font-weight: 500;
            color: #1B1C1F;
        }
        .li-time {
            font-size: 13px;
            color: #656A72;
        }
    }
    .li-right{
        /deep/ {
            .van-checkbox__icon .van-icon{
                border-radius: 4px;
            }
        }
    }
}
.selected{
    background: rgba(15, 140, 255, 0.08);
    transition: all .2s ease;
    .li-left{
        text-decoration: line-through;
        color: #2279C9;
        .li-title,.li-time{
            color: #2279C9;
        }
    }
}
</style>