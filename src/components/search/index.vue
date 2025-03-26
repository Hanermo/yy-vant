<template>
    <div class="search-wrap">
        <van-search
            v-model="value"
            :placeholder=placeholder
            @search="onSearch"
            >
            <template #left-icon>
                <van-icon class="search-icon"></van-icon>
            </template>
        </van-search>
    </div>
</template>

<script>
export default {
    name:'search',
    props: {
        placeholder: {
            type: String,
            default: '请输入'
        }
    },
    data(){
        return{
            value: ''
        }
    },
    methods: {
        // 查询，给父组件传方法
        onSearch(){
            this.$emit('_search',this.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.search-wrap{
    width: 100%;
    /deep/ {
        .van-search{
            padding: 3px 0;
            background: transparent;
            border: 1px solid;
            border-radius: 6px;
        }
        .van-search__content{
            background: transparent;
            padding-left: 8px
        }
        .van-field__left-icon{
            margin-right: 8px
        }
    }
}
</style>
   