<template>
    <div class="simple-list-wrapper">
        <div class="ul-title">
                <div class="t-text">全部日程</div>
                <van-icon name="arrow" color="#828488"></van-icon>
            </div>
        <ul class="ul-box" v-if="scheduleList.length">
            <li :class="['li-item', item.fontClass]" v-for="(item,index) in scheduleList" :key="index + 'li-item'">
                <div class="li-left">
                    <div class="circle-logo" :style="{background: item.checked ? '#F5F5F5' : '#DEECFF'}">
                        <i class="c-logo"></i>
                    </div>
                    <div>
                        <div class="li-title">{{ item.title }}</div>
                        <div class="li-time">{{ item.time }}</div>
                    </div>
                </div>
                <div class="li-right">
                    <van-checkbox v-model="item.checked" shape @change="checkChange(item)"></van-checkbox>
                </div>
            </li>
        </ul>
        <div class="no-data-box" v-else>
            <img :src="imgUrl" alt="" width="35%">
            <p>{{ tip }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'simple-list',
    props: {
        
    },
    data(){
      return{
        scheduleList: [
            { title: '户外跑步3公里', time: '7:30PM', checked: false },
            { title: '帕梅拉12min有氧训练', time: '8:30PM', checked: false },
            { title: '早上吃药', time: '9:30PM', checked: false },
        ],
        imgUrl: require("@/assets/images/img/no-data.png"),
        tip: '今天没有日程，享受生活吧！'
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
.ul-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .t-text{
        font-weight: 600;
    }
}
.ul-box{
    display: flex;
    flex-direction: column;
    gap: 10px;

}
.no-data-box {
    background: #fff;
    text-align: center;
    border-radius: 10px;
    padding-bottom: 15px;
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
        flex-direction: row;
        gap: 6px;
        .circle-logo{
            width: 35px;
            height: 35px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            .c-logo{
                background: url('@/assets/images/img/s-list-logo.png') no-repeat center center / contain;
                width: 21px;
                height: 22px;
            }
        }
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
        color: $primary-color;
        .li-title,.li-time{
            color: $primary-color;
        }
    }
}
</style>