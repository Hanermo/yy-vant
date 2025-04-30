<template>
    <div class="memo-wrapper">
        <div class="memo-box-title">
            备忘录
        </div>
        <ul class="memo-box-content">
            <li v-for="i in 3" :key="i">{{ i }}.不要熬夜</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'memo',
    data(){
      return{
         
      }
    }
}
</script>

<style lang="scss" scoped>
.memo-wrapper{
    width: 100%;
    background: #fff;
    border-radius: 10px;
    .memo-box-title{
        padding: 8px 10px;
        color: #3d3d3d;
        font-weight: 600;
        font-size: 15px;
    }
    .memo-box-content{
        padding: 0 10px 10px;
    }
}
</style>