<template>
    <div>
        <ul class="ul-box">
            <li class="li-item" v-for="item in 7" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'schedule-list',
    data(){
      return{
         
      }
    }
}
</script>

<style lang="scss" scoped>
.ul-box{
    display: flex;
    flex-direction: column;
    gap: 10px;
    li.li-item {
        padding: 10px;
        height: 30px;
        background: #F5F6F7;
        border-radius: 6px;
    }
}
</style>