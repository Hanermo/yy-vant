<template>
    <div class="mine-wrapper">
        <div class="mine-header">
            <van-icon class="avatar-icon"></van-icon>
            <div class="m-header-right">
                <div class="h-r-name">{{ userForm.userName }}</div>
                <div class="h-r-sign">{{ userForm.signature }}</div>
            </div>
        </div>
    </div>
   </template>
   
   <script>
   export default {
       name:'mine',
       data(){
           return{
            userForm: {
                userName: '韩二墨',
                signature: '发财'
            }
           }
       }
   }
   </script>
   
   <style lang="scss" scoped>
   .mine-wrapper{
    .mine-header {
        padding: 15px;
        display: flex;
        align-items: center;
        .m-header-right{
            .h-r-sign {
                font-size: 12px;
                color: $value-font;
            }
        }
    }
   }
   </style>
   