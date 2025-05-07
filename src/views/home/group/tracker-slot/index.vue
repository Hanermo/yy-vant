<template>
    <div class="index-slot-wrapper">
        <div class="comp-box">
          <component v-for="item in compList" :key="item.id" :is="item.currentView" :sort="item.sort"></component>
        </div>
        <div class="slot-edit" @click="openEdit">编辑卡片</div>
        <!-- 编辑卡片弹出框 -->
        <van-popup v-model="slotEditPopupVisible" :style="{height: '100%',width: '100%'}" position="right">
          <sortModules v-if="slotEditPopupVisible" @close="closeEvent"></sortModules>
        </van-popup>
    </div>
</template>

<script>
export default {
    name:'index-slot',
    data(){
      return{
        compList: [
          { id: 1, currentView: 'schedulesList', sort: 1 },
          { id: 2, currentView: 'dietDiary', sort: 2 },
          { id: 3, currentView: 'memoComp', sort: 3 },
        ],
        slotEditPopupVisible: false
      }
    },
    methods: {
      openEdit(){
        this.slotEditPopupVisible = true
      },
      closeEvent(val){
        this.slotEditPopupVisible = val
      }
    },
    components: {
        schedulesList: () => import('@/views/channel/group/schedules-list/index.vue'),
        dietDiary: () => import('@/views/channel/group/diet-diary/index.vue'),
        memoComp: () => import('@/views/channel/group/memo/index.vue'),
        sortModules: () => import('@/views/home/group/tracker-slot/components/sort-modules.vue')
    }
}
</script>

<style lang="scss" scoped>
.comp-box{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.slot-edit {
  text-align: center;
  padding: 20px 0 0;
  color: $primary-color;
}
</style>