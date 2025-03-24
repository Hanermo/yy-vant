<template>
  <div class="index">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name: 'index-Main'
}
</script>

<style lang="scss" scoped>
.index{
  height: 100%;
  box-sizing: border-box;
}
</style>