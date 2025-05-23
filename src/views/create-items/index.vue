<template>
    <div class="create-items-wrapper">
        <div class="create-items-header">
            <span class="header-icon"></span>
        </div>
        <div class="create-items-body">
            <ul class="body-type-ul">
                <li v-for="(item,index) in createTypeList" :key="item.id" class="li-item" @click="createItemHandle(item)">
                    <div class="li-svg" :style="{ background: item.bgColor }">
                        <svg-icon :name="item.icon" font-size="20px" color="#fff"></svg-icon>
                    </div>
                    <div>{{ item.label }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'create-items',
    props: {
    },
    data(){
      return{
        createTypeList: [
            { id: 1, label: '日程', icon: 'schedule', bgColor: '#A46EFF' },
            { id: 2, label: '饮食', icon: 'diet', bgColor: '#44A9FF' },
            { id: 3, label: '备忘录', icon: 'notes', bgColor: '#4070FF' },
            { id: 4, label: '倒计时', icon: 'countdown', bgColor: '#FF9429' },
        ]
      }
    },
    methods:{
        createItemHandle(item){
            if(item.label == '日程'){
                this.$router.push('/schedule/schedule-add')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.create-items-wrapper{
    .create-items-header {
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
    .create-items-body{
        padding: 15px 10px;
        .body-type-ul {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            .li-item {
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 5px;
                border-radius: 10px;
                padding: 8px 15px;
                .li-svg{
                    background: #ccc;
                    border-radius: 15px;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
}
</style>