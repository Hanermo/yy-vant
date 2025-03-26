<template>
    <div class="calendar-wrap">
        <div class="c-title">
            <span>{{ current }}</span>
            <svg-icon name="calendar1" font-size="23px" color="#2279C9"></svg-icon>
        </div>
        <div :class="['calendar-content',isCollapse ? 'content-collapse' : 'content-show']">
            <van-calendar
            v-model="show"
            color="#2279C9" 
            :poppable="false"
            :show-confirm="false"
            :show-mark="false"
            :min-date="currentMonday"
            :formatter="formatterDate"
            first-day-of-week="1"
            :class="['calendar-w',isCollapse ? 'hidden-calendar' : 'show-calendar']"
            @select="handleDate"
            />
            <div class="collapse-arrow" @click="collapseClick">
                <van-icon name="arrow-down" :class="!isCollapse ? 'icon-arrow-down' : 'icon-arrow-top'"/>
            </div>
        </div>
        <div class="c-footer">
            <span>{{ formatTimeDistance(currentDate) }}</span>
            <span class="date">{{getLunarDate(currentDate)}}</span>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import lunar from 'chinese-lunar'
export default {
    name:'calendar',
    props: {
        events: { // 传入的日程数据格式：[{date: '2023-10-05', status: 'pending'}]
            type: Array,
            default: () => []
        }
    },
    data(){
      return{
        current: new Date().getFullYear() + '年' + (new Date().getMonth() + 1) + '月',
        show: true,
        isCollapse:true,
        currentDate: new Date(),
        isshow:true
      }
    },
    computed:{
        currentMonday(){
            const now = new Date();
            const dayOfWeek = this.getDayFromMonday(now); // 0 (周一) 到 6 (周日)
            const firstDayOfWeek = new Date(now);
            firstDayOfWeek.setDate(now.getDate() - dayOfWeek);
            return new Date(this.timeChangeover(firstDayOfWeek))
        },
        startDate() {
            const start = new Date(this.currentDate);
            start.setDate(start.getDate() - this.getDayFromMonday(start)); 
            return  this.timeChangeover(start)
        },
        endDate() {
            const end = new Date(this.startDate);
            end.setDate(end.getDate() + 6); 
            return  this.timeChangeover(end)
        },
    },
    methods: {
        // 0-6：周一到周日
        getDayFromMonday(date){
            const day = date.getDay()
            return day === 0 ? 6 : day - 1
        },
        timeChangeover (item) {
            const date = new Date(item)
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            return year + "/" + month + "/" + day;
        },
        handleDate(val){
            this.currentDate = new Date(val)
            this.$emit('currentDateConfirm',this.currentDate)
        },
        formatterDate(day){
            const date = day
            if(day.date < new Date(this.startDate) && day.date < new Date(this.currentMonday)){
                date.className = 'hidden'
            }
            if(!this.isshow && !(day.date >= new Date(this.startDate) && day.date <= new Date(this.endDate))){
                date.className = 'hidden'
            }
            // 如果没有日程返回，今天之前的日期返回
            if(this.events.length == 0 || moment(day.date).format('yyyy-MM-dd') < moment(new Date()).format('yyyy-MM-dd')) return date
            // 取出最大值截至日期
            let expectAnalyxsisDate = moment(new Date()).format('yyyy-MM-dd')
            this.events.forEach(v => v.date > expectAnalyxsisDate ? expectAnalyxsisDate = v.date :  "" )
            // 渲染今天到最大值
            if( moment(day.date).format('yyyy-MM-dd') <= expectAnalyxsisDate){
                date.className = 'isSchedule-dot' 
            }
            return date
        },
        collapseClick(){
            this.isCollapse = !this.isCollapse
            console.log('star-',this.startDate,'end-',this.endDate);
            this.currentDate = new Date()
            if(this.isCollapse && (this.currentDate >= new Date(this.startDate) && this.currentDate <= new Date(this.endDate))){
                this.isshow = false
            }else{
                this.isshow = true
            }
        },
        // 将公历转成农历
        getLunarDate(date){
            let currenDate = date
            // 时分秒设置0
            currenDate.setHours(0,0,0,0)
            const lunarDate = lunar.solarToLunar(currenDate)
            return lunar.format(lunarDate,'MD')
        },
        formatTimeDistance(targetDate) {
            const now = new Date();
            const date = new Date(targetDate);

            // 验证日期有效性
            if (isNaN(date)) {
                return '无效日期';
            }

            let diffMs = now - date;
            let suffix = '前';

            const diffSeconds = Math.floor(diffMs / 1000);

            // 时间单位配置（单位：秒）
            const units = [
                { unit: '年', value: 31536000 },   // 365天
                { unit: '个月', value: 2592000 },  // 30天
                { unit: '天', value: 86400 },      // 24小时
                // { unit: '小时', value: 3600 },
                // { unit: '分钟', value: 60 },
                // { unit: '秒', value: 1 }
            ];

            // 寻找最大合适单位
            for (const { unit, value } of units) {
                const interval = Math.floor(diffSeconds / value);
                if (interval >= 1) {
                return `${interval}${unit}${suffix}`;
                }
            }

            // 处理0-1秒的情况
            return '今天';
        },


        // 判断是否是当天
        isCurrentDay(date) {
        const today = new Date();
        console.log('dantan',date.toDateString() === today.toDateString());
        
        return date.toDateString() === today.toDateString();
        },

        // 判断是否有日程
        hasSchedule(date) {
        return this.getEventsByDate(date).length > 0;
        },

        // 获取某天的日程
        getEventsByDate(date) {
        const dateStr = this.formatDate(date);
        console.log('有日程',this.events.filter(event => event.date === dateStr));
        
        return this.events.filter(event => event.date === dateStr);
        },

        // 显示红点/橙点
        showDot(date) {
        return this.getEventsByDate(date).length > 0;
        },

        // 圆点颜色逻辑
        dotStyle(date) {
        const event = this.getEventsByDate(date)[0];
        const isExpired = new Date(date) < new Date() && event?.status === 'pending';
        return { background: isExpired ? '#ff976a' : '#ee0a24' };
        },

        // 月份切换
        onPageChange(page) {
        this.currentPage = page;
        },

        // 日期格式化
        formatDate(date) {
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.c-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}
.calendar-content{
    border-radius: 10px;
    padding: 10px 10px 0;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 0px rgba(197, 197, 197, 0.3);
    transition: all .2s ease-in;
    position: relative;
    .calendar-w{
        /deep/{
            .van-calendar__header{
                box-shadow: none;
            }
            .van-calendar__header-title{
                display: none;
            }
            .van-calendar__header-subtitle{
                display: none;
            }
            .van-calendar__selected-day{
                border-radius: 50%;
                width: 25px;
                height: 25px;
            }
            .van-calendar__weekday{
                color: #D3D3D3;
                font-size: 13px;
            }
            .van-calendar__day{
                height: 50px;
            }
        }
    }
    .hidden-calendar{
        /deep/ {
            .van-calendar__body{
                overflow: hidden;
            }
        }
    }
    .show-calendar{
        /deep/ {
            .van-calendar__body{
                overflow: auto;
            }
        }
    }
    
    
    .collapse-arrow{
        text-align: center;
        padding: 5px;
        font-size: 20px;
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        border-radius: 0 0 10px 10px;
        background: linear-gradient(transparent -63%, #fff 75%);
        /deep/ .van-icon{
            transition: all .2s ease-in;
        }
        .icon-arrow-down{
            transform: rotate(-180deg);
        }
        .icon-arrow-top{
            transform: rotate(0deg);
        }
    }
}
.content-collapse{
    height: 115px;
}
.content-show{
    height: 300px;
}
/deep/ .noSchedule-dot::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: #D8D8D8;
    transform: translate(0px, 20px);
    border-radius: 50%;
    }
/deep/ .isSchedule-dot::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: red;
    transform: translate(0px, 20px);
    border-radius: 50%;
}
/deep/ {
    .hidden{
        display: none;
    }
}
.c-footer{
    padding: 20px 0;
    font-size: 13px;
    .date{
        color: #9A9A9A;
        margin-left: 10px;
    }
}
</style>