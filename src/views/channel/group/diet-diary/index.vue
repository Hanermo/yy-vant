<template>
    <div class="diet-diary-wrapper">
        <div class="diet-diary-box-title">
            饮食
        </div>
        <div class="dd-box-label">
            <van-icon name="flower-o"></van-icon>
            <p>总摄入</p>
        </div>
        <div class="dd-box-value">
            <span class="cur-value-text">425</span>
            <span class="total-value-text">/1954千卡</span>
        </div>
        <div class="dd-box-footer">
            记饮食
            <van-icon name="arrow" size="12px"></van-icon>
        </div>
    </div>
</template>

<script>
export default {
    name:'diet-diary',
    data(){
      return{
         
      }
    }
}
</script>

<style lang="scss" scoped>
.diet-diary-wrapper{
    width: 100%;
    background: #fff;
    border-radius: 10px;
    .diet-diary-box-title{
        padding: 8px 10px;
        color: #3d3d3d;
        font-weight: 600;
        font-size: 15px;
    }
    .dd-box-label{
        display: flex;
        align-items: center;
        padding: 0 10px;
        font-size: 15px;
    }
    .dd-box-value{
        padding: 10px;
        .cur-value-text{
            color: #3d3d3d;
        }
        .total-value-text{
            font-size: 12px;
            color: $value-font;
        }
    }
    .dd-box-footer{
        font-size: 12px;
        color: $primary-color;
        text-align: right;
        padding: 0 10px 10px 0;
    }
}
</style>