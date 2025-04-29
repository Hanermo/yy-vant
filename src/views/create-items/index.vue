<template>
    <div class="create-items-wrapper">
        <div class="create-items-header">
            <span class="header-icon"></span>
        </div>
        <div class="create-items-body">
            <ul class="body-type-ul">
                <li v-for="(item,index) in createTypeList" :key="item.id" class="li-item">
                    <van-icon :name="item.icon"></van-icon>
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
            { id: 1, label: '日程', icon: 'star-o' },
            { id: 2, label: '饮食', icon: 'star-o' },
            { id: 3, label: '备忘录', icon: 'star-o' },
        ]
      }
    },
    methods:{
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
                flex-direction: column;
                align-items: center;
                gap: 5px;
            }
        }
    }
}
</style>