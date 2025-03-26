<template>
    <div>
        <component :is="currentView"></component>
    </div>
</template>

<script>
export default {
    name:'index-slot',
    data(){
      return{
        currentView: 'schedulesList'
      }
    },
    methods: {
    },
    components: {
        schedulesList: () => import('@/views/channel/group/schedules-list/index.vue'),
        dietDiary: () => import('@/views/channel/group/diet-diary/index.vue'),
    }
}
</script>

<style lang="scss" scoped>
</style>