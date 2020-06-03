<!--
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-06-02 17:09:12
 * @LastEditors: zml
 * @LastEditTime: 2020-06-02 17:44:00
--> 
<template>
  <div>
      <div class="ticker">
          <!-- {{showValue}} -->
        <div v-if="showValue" class="value" :style=valueStyle>
          {{value || 0}} <span class="unit">{{unit }}</span>
        </div>
      <div class="tickerGraph" :style = "{ width: width + 'px', height: maxHeight + 'px'}">
        <div class="tickerLine" :style="{borderBottomColor: defaultColor}">
            <div v-for="(item,index) in  new Array(lineNum)" :key="index">
   <span 
                       class="tick"
                       :style="{
                         height: random(3, maxHeight) + 'px',left: (gap + 2) * index + 'px',
                         backgroundColor: (index + 1) <= Math.floor(lineNum * percent / 100) ? activeColor : defaultColor
                        }">
                     </span>
            </div>
        </div>
        <div class="tickerBar" :style="{width: percent + '%', borderBottomColor: activeColor}"></div>
      </div>
      <div v-if="text" class="text" :style=textStyle>{{text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
        type: Number,
        default: 100
    },
    maxHeight:  {
        type: Number,
        default: 10
    },
    percent:   {
        type: Number,
        default: 50
    },
    text:  {
        type: String,
        default: function() {
            return '瞬间能见度'
        }
    },
    value:{
        type: Number,
        default: 50
    },
    showValue: {
        type: Boolean,
        default: true
    },
    unit: {
        type: String,
        default: function() {
            return 'M'
        }
    },
    lineNum: {
        type: Number,
        default: 12
    },
    defaultColor: {
        type: String,
        default: function() {
            return '#06c'
        }
    },
    activeColor: {
        type: String,
        default: function() {
            return 'red'
        }
    },
    textStyle: {
        type: Object,
        default: function() {
            return {}
        }
    },
    valueStyle:  {
        type: Object,
        default: function() {
            return {}
        }
    }
  },
  data() {
    return {
        isActive:'1',
        gap:null
    };
  },
  created() {
      console.log(this.percent)
    this.gap = (this.width - 2 * this.lineNum) / (this.lineNum - 1)
    console.log(this.gap, 'gap')
  },
  methods: {
      
      random(min, max) {
        return min + Math.random() * (max - min)
      }
  },
};
</script>
<style scoped>
.ticker {
  display: inline-block;
  text-align: center;
}

.ticker .value {
  font-size: 18px;
  line-height: 2em;
}

.tickerGraph {
  position: relative;
}

.tickerGraph .tickerLine {
  position: absolute;
  width: 100%;
  height: 100%;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  text-align: left;
}

.tickerGraph .tickerBar {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0;
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

.tickerLine .tick {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2px;
  display: inline-block;
}

.tickerLine .tick:last-child {
  margin-right: 0;
}

.ticker .text {
  line-height: 3em;
  font-size: 16px;
}
</style>