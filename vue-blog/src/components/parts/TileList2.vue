<template>
  <div class="hello">
    <h1>ここにタイルを出力する処理を記述</h1>
    <h1>{{ msg2 }}</h1>
    <!-- ループ処理 -->
    <li v-for="(station, index) in stations" :key="index">
      {{station.sakuradouri}}:{{index}}
    </li>
    <h1>▲▲▲▲▲▲▲▲▲▲</h1>
    {{appNumber}}
    <h1>▲▲▲▲▲▲▲▲▲▲</h1>
    <tile/>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { Options, Vue } from 'vue-class-component';
// 利用するコンポーネントファイルのインポート
import Tile from '@/components/parts/Tile.vue';
import { useStore } from 'vuex';

@Options({
  setup() {
    const store = useStore();
    // const completed = (e) =>{
    //   const targetIndex = props.index
    //   store.commit('complete', targetIndex)
    // };
    const abc = computed(() => store.state.stations2);
    const appNumber2 = computed(() => store.state.stations2);// 'ああああ appNumber2を出力');

    // expose bindings on render context
    return {
      abc,
      appNumber2,
    };
  },
  data() {
    // テンプレート内で保有するデータ
    return {
      msg2: 'Vue Template File',
      // 配列の定義
      stations: [
        // 連想配列の定義
        { sakuradouri: '名古屋' },
        { sakuradouri: '国際センター' },
        { sakuradouri: '丸の内' },
      ],
    };
  },
  // props 親要素から受け取るプロパティの定義
  props: {
    msg: String,
  },
  // コンポーネントの登録
  components: {
    Tile,
  },
  // storeの値を取得
  computed: {
    appNumber() {
      // return this.$store.state.statioons2;
      return this.$store.state.statioons2;// 'ああああ appNumberを出力';//
    },
  },
})

export default class TileList extends Vue {
  msg!: 'あああ';
}
</script>
