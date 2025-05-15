<template>
    <div class="add-schedule">
        <van-nav-bar title="日程创建"  :safe-area-inset-top="true">
            <template #left>
            <van-icon name="arrow-left" @click="close" color="#333" size="22px"/>
            </template>
            <template #right>
            <van-icon name="success" @click="onSumbit" color="#333" size="22px"/>
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    name:'add-schedule',
    data(){
      return{
         
      }
    },
    methods: {
        close(){
            this.$router.go(-1)
        },
        onSumbit(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>