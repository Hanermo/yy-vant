<template>
    <div class="memo-wrapper">
        <div class="memo-box-title">
            <div class="line"></div>
            <div class="title">备忘录</div>
            <svg-icon name="arrow" font-size="18px" class="i-arrow"></svg-icon>
        </div>
        <ul class="memo-box-content">
            <li >生日要吃蛋糕</li>
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
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 10px;
        color: #3d3d3d;
        font-weight: 600;
        position: relative;
        .line{
            width: 5px;
            height: 15px;
            background: $primary-color;
            border-radius: 6px;
        }
        .title{
            font-size: 14px;
        }
        .i-arrow{
            position: absolute;
            top: 5px;
            right: 5px;
            color: $value-font;
        }

    }
    .memo-box-content{
        padding: 0 10px 10px;
    }
}
</style>