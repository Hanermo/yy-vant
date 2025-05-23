<template>
    <div class="login-box">
        <div class="modal-box">
            <div class="login-form-wrap">
                <p class="login-title">Login</p>
                <input type="text" v-model="formParams.userName" placeholder="用户名" class="form-input"></input>
                <input type="password" v-model="formParams.password" placeholder="密码" class="form-input" @keyup.enter="login"></input>
                <van-button @click="login">登录</van-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
      return{
        formParams: {
            userName: '',
            password: ''
        }
      }
    },
    methods:{
        login(){
            if(!this.formParams.userName || !this.formParams.password)
            return this.$toast('用户名和密码不得为空！')
            this.$router.push('/index')
        }
    }
}
</script>

<style lang="scss" scoped>
.login-box{
    background: url(~@/assets/images/img/login-bg.png) no-repeat;
    background-color: #fff;
    height: 100%;
    .modal-box {
        height: 100%;
        // backdrop-filter: blur(33px);
        position: relative;
        .login-form-wrap {
            position: absolute;
            left: 50%;
            top: 68%;
            transform: translate(-50%, -50%);
            width: 80%;
            display: flex;
            flex-direction: column;
            p {
                color: $theme-color;
                font-size: 30px;
                text-align: left;
                margin-bottom: 10px;
                font-family: fantasy;
            }
            input.form-input {
                margin: 5px 0;
                border-radius: 28px;
                background: transparent;
                padding: 8px 15px;
                color: $font-default-color;
                box-sizing: border-box;
                border: 1px solid rgba(49, 49, 49, 0.749);
                &::placeholder{
                    color: #A1A4B2
                }
            }
            .van-button{
                margin-top: 20px;
                border-radius: 38px;
                background: #0164f6b3;
                color: #fff;
            }
        }
    }
}
</style>