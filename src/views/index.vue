<template>
  <div class="index">

    <router-view></router-view>
    
    <div class="tabbar-footer">
      <van-tabbar v-model="active" routes fixed active-color="#2279C9" inactive-color="#333">
        <van-tabbar-item v-for="(item,index) in tabbarItemList" :key="index + 'item'" replace :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <svg-icon :name="item.icon" class-name="svg1"></svg-icon>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
    name: 'index-Main',
    data(){
      return{
        active: 0,
        tabbarItemList: [
          {
            icon: 'home',
            text: '首页',
            path: '/index'
          },
          {
            icon: 'box',
            text: '频道',
            path: '/channel'
          },
          {
            icon: 'smile',
            text: '动态',
            path: '/dynamics'
          },
          {
            icon: 'user',
            text: '我的',
            path: '/mine'
          },
        ]
      }
    },
    methods:{
      
    }
}
</script>

<style lang="scss" scoped>
.index{
  height: 100%;
  box-sizing: border-box;
}
</style>