<template>
    <div class="channel-wrapper">
        <van-nav-bar title="全部频道"  :safe-area-inset-top="true"/>
        <div class="chl-content">
            <div v-for="(item,index) in channelList" :key="index + 'chl-item'">
                <div class="chl-box-title">{{ item.subTitle }}</div>
                <div class="chl-box-grid">
                    <ul>
                        <li class="chl-item" v-for="items in item.chlModule" :key="items.value">
                            <van-icon :class="items.icon"></van-icon>
                            <span>{{ items.label }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'channel',
    data(){
        return{
        }
    },
    computed:{
        channelList(){
            const result = [
                {
                    subTitle: '最近访问',
                    chlModule: []
                },
                {
                    subTitle: '频道',
                    chlModule: [
                        {
                            label: '日程',
                            value: 'schedule',
                            icon: 'schedule-icon'
                        },
                        {
                            label: '饮食',
                            value: 'diet',
                            icon: 'diet-icon'
                        },
                        {
                            label: '备忘录',
                            value: 'note',
                            icon: 'note-icon'
                        },
                        
                    ]
                }
            ]
            return result
        }
    }
}
</script>

<style lang="scss" scoped>
.channel-wrapper{
    background: #fff;
    height: calc(100% - 50px);/*no*/
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .chl-content {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        overflow: auto;
        padding: 20px; /*no */
        .chl-box-title {
            padding: 16px 0;
        }
        .chl-box-grid{
            ul{
                display: flex;
                gap: 18px;
                flex-wrap: wrap;
            }
            .chl-item {
                width: fit-content;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                flex: 0 0 20%;
            }
        }
        /deep/{
            .van-icon{
                display: block;
                width: 32px;
                height: 32px;
            }
        }
    }
    .schedule-icon{
        background: url('@/assets/images/img/schedule-icon.png') no-repeat center center / contain;
    }
    .diet-icon{
        background: url('@/assets/images/img/diet-icon.png') no-repeat center center / contain;
    }
    .note-icon{
        background: url('@/assets/images/img/note-icon.png') no-repeat center center / contain;
    }
}
</style>
   