<template>
  <div class="index">

    <router-view></router-view>
    
    <div class="tabbar-footer">
      <van-tabbar v-model="active" route fixed active-color="#2279C9" inactive-color="#333">
        <van-tabbar-item v-for="(item,index) in tabbarItemList" :key="index + 'item'" replace :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <div v-if="item.type">
              <div class="create-btn" @click="openCreate">
                <van-icon name="plus" size="22px"></van-icon>
              </div>
            </div>
            <svg-icon :name="item.icon" class-name="svg1" v-else></svg-icon>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- 打开创建弹窗 -->
    <van-popup v-model="createPopupVisible" :style="{height: '35%'}" position="bottom" round >
      <createItems v-if="createPopupVisible"></createItems>
    </van-popup>
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
            type: 'create',
            icon: 'plus',
            text: '',
            path: ''
          },
          {
            icon: 'message',
            text: '消息',
            path: '/messages'
          },
          {
            icon: 'smile',
            text: '动态',
            path: '/dynamics'
          },
        ],
        createPopupVisible: false
      }
    },
    methods:{
      openCreate(){
        this.createPopupVisible = true
      }
    },
    components: {
      createItems: () => import('@/views/create-items/index.vue')
    }
}
</script>

<style lang="scss" scoped>
.index{
  height: 100%;
  box-sizing: border-box;
  .create-btn{
    background: #2279C9;
    color: #fff;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /deep/ {
    .van-overlay{
      background: #9d9d9d2b;
    }
  }
}
</style>