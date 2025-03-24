<template>
    <div class="login-box">
        <div class="modal-box">
            <div class="login-form-wrap">
                <p>Welcome</p>
                <input type="text" v-model="formParams.userName" placeholder="用户名" class="form-input"></input>
                <input type="password" v-model="formParams.password" placeholder="密码" class="form-input"></input>
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
    height: 100%;
    .modal-box {
        height: 100%;
        backdrop-filter: blur(33px);
        position: relative;
        .login-form-wrap {
            position: absolute;
            left: 50%;
            top: 35%;
            transform: translate(-50%, -50%);
            width: 80%;
            display: flex;
            flex-direction: column;
            p {
                color: #fff;
                font-size: 30px;
                text-align: center;
            }
            input.form-input {
                margin: 10px 0;
                border-radius: 50px;
                background: transparent;
                border: 1px solid #ffffff;
                padding: 8px 15px;
                color: #fff;
                &::placeholder{
                    color: #cacaca
                }
            }
            .van-button{
                border-radius: 4px;
            }
        }
    }
}
</style>