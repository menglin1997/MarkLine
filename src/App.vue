<!--
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-05-29 15:14:54
 * @LastEditors: zml
 * @LastEditTime: 2020-06-02 17:56:11
--> 
<template>
  <div id="app">
    <ticker :width="width" :height="height" :percent="percent" :valueStyle="valueStyle" :textStyle="textStyle"></ticker>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ticker from '@/components/ticker.vue';

@Component({
  components: {
    ticker,
  },
  data() {
    return {
      width:207,
      height:10,
      percent: 10,
      valueStyle: {
        color:'#1E7DD5'
      },
      textStyle: {
        fontSize:'26px',
        fontFamily:'PingFang SC',
        fontWeight:500,
        color:'rgba(255,255,255,1)',
        lineHeight:'42px',
        marginTop:'10px'
      }
    }
  },
})
export default class App extends Vue {
  
}
</script>
