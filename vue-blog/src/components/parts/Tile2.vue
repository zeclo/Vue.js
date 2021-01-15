<template>
  <div class="tile">
    <h1>{{csvData}}</h1>
  </div>
  <div class="css-fukidashi">
    <p class="text" v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction">
      ここをマウスオーバーすると・・・</p>
    <div v-if=$store.state.hoverFlag>
      <p class="fukidashi">吹き出しが表示されます</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

// import { Options, Vue, props } from 'vue-class-component';

export default defineComponent({
  // props 親要素から受け取るプロパティの定義
  props: {
    id: Number,
  },

  /*
  data: () => ({
    hoverFlag: {
      type: Boolean,
      default: false,
    },
  }),
  */

  setup(props: any, context) {
    const store2 = useStore();
    const csvData = computed(() => store2.state.csvData[props.id][0]);
    const hoverFlag = computed(() => store2.state.hoverFlag);

    // expose bindings on render context
    return {
      csvData,
      hoverFlag,
    };
  },

  methods: {
    mouseOverAction(): void {
      const store = useStore();
      useStore.commit('hoverFlagOn');
    },
    mouseLeaveAction(): void {
      const store = useStore();
      useStore.dispatch('hoverFlagOff');
    },
  },

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tile {
      width: 50px;
      position: relative;
      margin:80px 50px 50px;
      padding: 20px;
      border: 1px solid #ccc;
    }
    body {
      margin: 0;
      padding: 0;
    }
    .css-fukidashi {
      padding: 0;
      margin: 0;
    }
    .text {
      width: 200px;
      position: relative;
      margin:80px 50px 50px;
      padding: 20px;
      border: 1px solid #ccc;
    }
    .fukidashi {
      display: none;
      width: 200px;
      position: absolute;
      top: 0;
      left: 250px;
      padding: 16px;
      border-radius: 5px;
      background: #33cc99;
      color: #fff;
      font-weight: bold;
    }
    .fukidashi:after {
      position: absolute;
      width: 0;
      height: 0;
      left: 0;
      bottom: -19px;
      margin-left: 10px;
      border: solid transparent;
      border-color: rgba(51, 204, 153, 0);
      border-top-color: #33cc99;
      border-width: 10px;
      pointer-events: none;
      content: " ";
    }
    .text:hover + .fukidashi {
      display: block;
    }
</style>
