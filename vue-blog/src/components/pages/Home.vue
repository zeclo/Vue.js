<template>
  <div class="home">
    <div id="header">
      ヘッダー部分
    </div>
    <div id="main">
      <div id="TileList">
        タイル一覧部分
        <TileList />
      </div>
      <div id="SiteMap">
        サイトマップ部分
      </div>
      <div id="ContentsDetail">
        コンテンツ詳細部分
      </div>
      <div id="Scenario">
        シナリオ部分
      </div>
    </div>
    <div id="footer">
      フッター部分
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import TileList from '@/components/parts/TileList.vue';
import SiteMap from '@/components/parts/SiteMap.vue';
import ContentsDetail from '@/components/parts/ContentsDetail.vue';
import Scenario from '@/components/parts/Scenario.vue';
import Tile from '@/components/parts/Tile.vue';

@Options({
  components: {
    HelloWorld,
    TileList,
    SiteMap,
    ContentsDetail,
    Scenario,
    Tile,
  },
})
export default class Home extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
   margin: 0;
   padding: 0;
}
#wrapper {
   width: 850px;
   margin: 0 auto;/* 幅固定（700px）でセンタリングします。*/
}
#header {
   width: 850px;
   height: 50px;
}
#main {
   width: 850px;/* 両端ブロックとコンテンツを囲んでいるセレクタです。*/
   overflow: hidden;/* 親ボックスでフロート解除します。*/
}
#TileList {
   float: left;
   width: 150px;    /* floatに、width 指定は必須です。*/
   background-color: red;
}
#SiteMap {
   float: left;
   width: 400px;
}
#ContentsDetail {
   float: left;
   width: 150px;
   background-color: red;
}
#Scenario {
   float: left;
   width: 150px;
}
#footer {
   clear: both;     /* IE6 以前の float 解除対応です。 */
   width: 850px;
   height: 50px;
}
#menu ul {
   list-style: none;
}
</style>
