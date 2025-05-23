<template>
    <div class="mine-wrapper">
        <div class="mine-header">
            <div class="m-header-right">
                <div class="h-r-name">{{ userForm.userName }}</div>
                <div class="h-r-sign">{{ userForm.signature }}</div>
            </div>
            <van-icon class="avatar-icon h-vanIcon"></van-icon>
            <div class="arrow-box" @click="back">
                <svg-icon name="arrow" font-size="18px" class="i-arrow"></svg-icon>
            </div>
        </div>
        <div class="mine-content">
            <ul class="mine-ul-box">
                <li class="li-item" v-for="(item,index) in mineSetUpList" :key="index + 'li'">
                    <div class="li-left">
                        <van-icon :class="item.menuIcon"></van-icon>
                        <span>{{ item.menuName }}</span>
                    </div>
                    <van-icon name="arrow" size="16px"></van-icon>
                </li>
            </ul>
            <div class="mine-check-user" @click="toLogin">
                <van-icon class="check-user"></van-icon>
                退出登录
            </div>
        </div>
    </div>
   </template>
   
<script>
export default {
    name:'mine',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            userForm: {
                userName: '韩二墨',
                signature: '发财'
            },
            mineSetUpList: [
                { menuIcon: 'user', menuName: '个人信息' },
                { menuIcon: 'key', menuName: '更改密码' },
            ]
        }
    },
    methods: {
        back(){
            this.$emit('update:show',false)
        },
        toLogin(){
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
.mine-wrapper{
    background: url('@/assets/images/img/user-banner.png') no-repeat 0px 0px / 120%;
    .mine-header {
        padding: 20px 15px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        position: relative;
        height: 80px;
        .m-header-right{
            line-height: 22px;
            color: #fff;
            .h-r-name{
                font-size: 16px;
                font-weight: 600;
            }
            .h-r-sign {
                font-size: 12px;
            }
        }
        .h-vanIcon{
            width: 55px;
            height: 55px;
        }
        .arrow-box{
            position: absolute;
            top: 8px;
            left: 10px;
            background: #e2e2e23d;
            color: #E3E3E3;
            border-radius: 50px;
            padding: 2px;
        }
        .i-arrow{
            transform: rotate(180deg);
        }
    }
    .mine-content {
        padding: 10px;
        background: #fff;
        border-radius: 10px 10px 0 0;
        width: 100%;
        box-sizing: border-box;
        .mine-ul-box{
            display: flex;
            flex-direction: column;
            gap: 10px;
            .li-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 6px 0;
                .li-left{
                    display: flex;
                    align-items: center;
                    gap: 3px;
                    .van-icon{
                        display: inline-block;
                        width: 13px;
                        height: 13px;
                    }
                    .user{
                        background: url('@/assets/images/img/user.png') no-repeat center center / contain;
                    }
                    .key{
                        background: url('@/assets/images/img/key.png') no-repeat center center / contain;
                    }
                }
            }
        }
        .mine-check-user {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            margin: 30px 0;
            padding: 10px;
            text-align: center;
            border-radius: 6px;
            background: #e8e8e8;
            color: #3d3d3d;
            font-size: 14px;
            .van-icon{
                display: inline-block;
                width: 15px;
                height: 15px;
            }
            .check-user{
                background: url('@/assets/images/img/check-user.png') no-repeat center center / contain;
            }
        }
    }
}
</style>
   