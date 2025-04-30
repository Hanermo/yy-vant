<template>
    <div class="sort-modules-wrapper">
      <van-nav-bar title="编辑卡片"  :safe-area-inset-top="true">
        <template #left>
          <van-icon name="arrow-left" @click="close" color="#333" size="22px"/>
        </template>
        <template #right>
          <van-icon name="success" @click="onSumbit" color="#333" size="22px"/>
        </template>
      </van-nav-bar>
      <div class="sort-modules-content">
        <div class="modules-box">
          <div class="modules-title">显示在首页</div>
          <div class="modules-box-content">
            <div class="modules-item" v-for="(item,index) in showModulesList" :key="index + 'modules'">
              <span class="card-text">{{ item.text }}</span>
              <i :class="[item.icon,'icon']"></i>
              <van-icon :name="item.operate" color="#767676" @click="minusCard(item,index)"></van-icon>
            </div>
          </div>
        </div>
        <div class="modules-box">
          <div class="modules-title">可添加的卡片</div>
          <div class="modules-box-content">
            <div class="modules-item" v-for="(item,index) in addModulesList" :key="index + 'modules'">
              <span class="card-text">{{ item.text }}</span>
              <i :class="[item.icon,'icon']"></i>
              <van-icon :name="item.operate" color="#767676" @click="addCard(item,index)"></van-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'sort-modules',
    data(){
      return{
        showModulesList: [  //显示在首页
          {
            text: '日程列表',
            icon: 'schedule-icon',
            operate: 'minus'
          },
          {
            text: '饮食日记',
            icon: 'diet-icon',
            operate: 'minus'
          },
          {
            text: '运动',
            icon: 'diet-icon',
            operate: 'minus'
          },
        ],
        addModulesList: [
          {
            text: '备忘录',
            icon: 'note-icon',
            operate: 'plus'
          },
        ]
      }
    },
    methods:{
      close(){
        this.$emit('close',false)
      },
      // 移除卡片
      minusCard(item,index){
        this.showModulesList.splice(index,1)
        item.operate = 'plus'
        this.addModulesList.push(item)
      }, 

      // 添加卡片
      addCard(item,index){
        this.addModulesList.splice(index,1)
        item.operate = 'minus'
        this.showModulesList.push(item)
      },

      // 确定
      onSumbit(){

      }
    }
}
</script>

<style lang="scss" scoped>
.sort-modules-wrapper {
  height: 100%;
  overflow-y: hidden;
  box-sizing: border-box;
  background: #f5f5f5;
  .sort-modules-content{
    display: flex;
    flex-direction: column;
    padding: 12px 18px;
    .modules-box{
      .modules-title {
        font-size: 14px;
        color: #3D3D3D;
        font-weight: 600;
      }
      .modules-box-content {
        padding: 15px 0;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        justify-content: space-between;
        transition: all .1s ease;
        .modules-item{
          background: url('@/assets/images/svg/modules-bg-icon.svg') no-repeat center center;
          height: 89px; /*no*/
          width: 154.78px; /*no*/
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          background-size: 103%;
          position: relative;
          .card-text{
            font-weight: 600;
          }
          .icon{
            display: inline-block;
            width: 30px;
            height: 30px;
          }
          .van-icon{
            position: absolute;
            right: 5px;
            top: 3px;
          }
        }
      }
    }
  }
}
</style>