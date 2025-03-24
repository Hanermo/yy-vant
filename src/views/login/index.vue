<template>
    <div class="login-box">
        <div class="modal-box">
            <div class="login-form-wrap">
                <p>Welcome</p>
                <input v-model="formParams.userName" placeholder="用户名"></input>
                <input v-model="formParams.userName" placeholder="密码"></input>
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
            top: 25%;
            transform: translate(-50%, -50%);
            p {
                color: #fff;
                font-size: 30px;
                text-align: center;
            }
        }
    }
}
</style>