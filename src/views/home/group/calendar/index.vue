<template>
    <div class="calendar-wrap">
        <div class="c-title">
            <span>{{ todayFormat }}</span>
            <svg-icon name="calendar1" font-size="23px" color="#2279C9" @click.native.stop="openCalendar"></svg-icon>
        </div>
        <div :class="['calendar-content']">
            <div class="cur-calendar-item" v-for="(item,index) in currentWeekList" :key="index + 'curItem'">
                <div class="week">{{ item.week }}</div>
                <div :class="['day', isSelectedDay(item.dayValue) ? 'cur-circle' : '',item.fontClass]" @click.stop="changeDate(item.dayValue)">{{ item.dayLabel }}</div>
                <div class="dot" :style="dotStyle(item.dayValue)" v-if="item.hasSchedule"></div>
            </div>
        </div>
        <div class="c-footer">
            <span>{{ formatTimeDistance(currentDate) }}</span>
            <span class="date">农历 {{getLunarDate(currentDate)}}</span>
        </div>
        <!-- 弹出日历 -->
        <calendarPicker :show.sync="calendarShow"></calendarPicker>
    </div>
</template>

<script>
import moment from 'moment'
import lunar from 'chinese-lunar'
export default {
    name:'calendar',
    props: {
        events: { // 传入的日程数据格式：[{date: '2023-10-05', count: 2}]
            type: Array,
            default: () => []
        }
    },
    data(){
      return{
        currentDate: new Date(),
        calendarShow: false
      }
    },
    computed:{
        todayFormat(){
            const date = new Date()
            return  `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`
        },
        currentWeekList(){
            const weekList = []
            // 获取本周周一
            const start = moment().startOf('isoWeek')
            // 获取某天日程
            const eventDate = this.events.map(v => moment(v.date).format('YYYY-MM-DD')) 

            // 从周一累加天数，获取周一到周日
            for(let i = 0; i < 7; i++){
                weekList[i] = {
                    week: i == 0 ? '一' : i == 1 ? '二' : i == 2 ? '三' : i == 3 ? '四' : i == 4 ? '五' : i == 5 ? '六' : '日',
                    dayLabel: start.clone().add(i,'days').format('DD'),
                    dayValue: start.clone().add(i,'days').format('YYYY-MM-DD')
                }
                // 有日程的那一天标记一下
                if(eventDate.includes(weekList[i].dayValue)){
                    weekList[i].hasSchedule = true
                }
                
            }
            
            return weekList
        }
    },
    methods: {
        // 打开日历弹窗
        openCalendar(){
            this.calendarShow = true
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

        // 切换日期
        changeDate(date){
            this.currentDate = new Date(date)
            const today = this.currentWeekList.find(v => moment(v.dayValue).format('YYYY-MM-DD') === moment(new Date()).format('YYYY-MM-DD'))
            
            // 当天日期被选中时用蓝底白字样式，切换日期时，当天日期高亮
            if(this.isCurrentDay(this.currentDate)){
                this.$set(today,'fontClass','notoday')
            }else{
                this.$set(today,'fontClass','today')
            }
        },

        // 被选中的日期
        isSelectedDay(date) {
            return moment(date).format('YYYY-MM-DD') === moment(this.currentDate).format('YYYY-MM-DD')
        },

        // 判断是否当天
        isCurrentDay(date){
            const today = new Date()
            return moment(date).format('YYYY-MM-DD') === moment(today).format('YYYY-MM-DD')
        },

        // 圆点
        dotStyle(date){
            const today = new Date();
            // 当天之前算过期，过期的日程标灰点；当天或将来未完成的标红点
            const isExpired = moment(date).format('YYYY-MM-DD') < moment(today).format('YYYY-MM-DD') ? true : false
            return { background: isExpired ? '#bbbaba' : '#ee0a24' };
        }

    },
    components: {
        calendarPicker: () => import('@/views/home/group/calendar/components/calendarPicker.vue')
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
.calendar-content {
    display: flex;
    flex-direction: row;
    .cur-calendar-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .week {
            width: 100%;
            text-align: center;
            padding: 5px 0;
            font-size: 13px;
            color: #a5a5a5;
        }
        .day {
            margin: 8px 0 4px;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .1s ease-in;
        }
        .cur-circle{
            background: #0164f6;
            color: #fff;
        }
        .today{
            color: #0164f6;
            font-weight: 600;
        }
        .notoday{
            color: #fff;
            font-weight: 500;
        }
        .dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
        }
    }
}
.c-footer{
    padding: 20px 0 0;
    font-size: 13px;
    .date{
        color: #9A9A9A;
        margin-left: 5px;
    }
}
</style>