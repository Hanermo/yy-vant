<template>
    <div class="index-slot-wrapper">
        <div class="comp-box">
          <component 
          v-for="(item,index) in compList" 
          :key="item.id" 
          :is="item.currentView" 
          :class="index === 0 ? 'full-width' : ''"></component>
        </div>
        <div class="slot-edit" >
          <span @click="openEdit">编辑卡片</span>
        </div>
        <!-- 编辑卡片弹出框 -->
        <van-popup v-model="slotEditPopupVisible" :style="{height: '100%',width: '100%'}" position="right">
          <sortModules @close="closeEvent"></sortModules>
        </van-popup>
    </div>
</template>

<script>
export default {
    name:'index-slot',
    data(){
      return{
        compList: [
          { id: 1, currentView: 'schedulesList' },
          { id: 2, currentView: 'dietDiary' },
          { id: 3, currentView: 'memoComp' },
          { id: 4, currentView: 'memoComp' },
          { id: 5, currentView: 'memoComp' },
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
        schedulesList: () => import('@/views/channel/group/schedules-list/components/simple-list.vue'),
        dietDiary: () => import('@/views/channel/group/diet-diary/index.vue'),
        memoComp: () => import('@/views/channel/group/memo/index.vue'),
        sortModules: () => import('@/views/home/group/tracker-slot/components/sort-modules.vue'),
    }
}
</script>

<style lang="scss" scoped>
.comp-box{
  column-count: 2; /* 默认3列 */
  column-gap: 10px; /* 列间距 */
}
.comp-box > * {
  break-inside: avoid; /* 防止内容被拆分到不同列 */
  margin-bottom: 10px; /* 行间距 */
  width: 100%;
}
.full-width{
  column-span: all; /* 首项跨所有列 */
  margin-bottom: 10px;
}
/* 响应式调整列数 */
@media (max-width: 1200px) {
  .masonry-container { column-count: 2; }
}
@media (max-width: 768px) {
  .masonry-container { column-count: 1; }
}
.slot-edit {
  text-align: center;
  margin: 20px 0 10px;
  color: $primary-color;
}
</style>