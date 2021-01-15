<template>
  <div class="hello">
    <h1>タイル一覧の見出し</h1>
    <!-- ループ処理
    <li v-for="(station, index) in appNumber2" :key="index">
      {{station.sakuradouri}}:{{index}}
    </li>
    <h1>▲▲▲▲▲▲▲▲▲▲</h1>
    -->
    <div v-for="(row, index) in csvData" :key="index">
      <tile v-bind:id="index"></tile>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import Tile from '@/components/parts/Tile.vue';

export default {

  // コンポーネントの登録
  components: {
    Tile,
  },

  setup() {
    const store = useStore();
    const appNumber2 = computed(() => store.state.stations2);
    const csvData = computed(() => store.state.csvData);
    const count2 = computed(() => store.state.count);

    // expose bindings on render context
    return {
      // このコンポーネント内で定義した変数
      msg3: 'Vue Template File これmsg3だぞ',
      stations4: [
        // 連想配列の定義
        { sakuradouri: '名古屋' },
        { sakuradouri: '国際センター' },
        { sakuradouri: '丸の内' },
      ],
      // computedを定義したconst
      appNumber2,
      count2,
      csvData,
    };
  },

  // props 親要素から受け取るプロパティの定義
  props: {
    msg: String,
  },
};
</script>
