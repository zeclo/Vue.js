<template>
  <div class="hello">
    <h1>ここにタイルを出力する処理を記述</h1>
    <h1>{{ msg }}</h1>
    <!-- ループ処理 -->
    <li v-for="(station, index) in stations" :key="index">
      {{station.sakuradouri}}:{{index}}
    </li>
    <h1>▲▲▲▲▲▲▲▲▲▲</h1>
    <tile/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// 利用するコンポーネントファイルのインポート
import Tile from '@/components/parts/Tile.vue';

@Options({
  data() {
    // テンプレート内で保有するデータ
    return {
      msg: 'Vue Template File',
      stations: [
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
})

export default class TileList extends Vue {
  msg!: 'あああ';
}
</script>
