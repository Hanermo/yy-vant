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
    width: fit-content;
    background: #fff;
    border-radius: 10px;
    .memo-box-title{
        padding: 10px;
        border-radius: 10px 10px 0 0;
        background: #bcd2e7;
        color: #586a7b;
        font-weight: 600;
    }
    .memo-box-content{
        padding: 10px;
    }
}
</style>