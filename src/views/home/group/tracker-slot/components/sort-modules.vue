<template>
    <div class="sort-modules-wrapper">
      <van-nav-bar title="编辑卡片"  :safe-area-inset-top="true"/>
      <van-icon name="arrow" @click="close"></van-icon>
    </div>
</template>

<script>
export default {
    name:'sort-modules',
    data(){
      return{
         
      }
    },
    methods:{
      close(){
        this.$emit('close',false)
      }
    }
}
</script>

<style lang="scss" scoped>
</style>