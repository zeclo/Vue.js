import { createStore } from 'vuex';

export default createStore({
  // 変数定義(初期値設定も行う)
  state: {
    count: 10,
    stations2: [
      // 連想配列の定義
      { sakuradouri: '名古屋' },
      { sakuradouri: '国際センター' },
      { sakuradouri: '丸の内' },
    ],
    csvData: [
      ['サイト名1', 'サイトURL1', false],
      ['サイト名2', 'サイトURL2', false],
      ['サイト名3', 'サイトURL3', false],
    ],
    hoverFlag: false,
  },
  // gettersオプションで定義
  getters: {
    // stateから別の値を計算
    squared(state) {
      return state.count * state.count;
    },
    // 他のgettersの値を使うことも可能(省略技法ももちろん使える)
    cubed: (state, getters) => state.count * getters.squared,
  },
  // mutationsオプションで定義
  mutations: {
    // 'increment'mutationを定義
    increment(state, payload) {
      state.count += payload.amount;
    },
    hoverFlagOn2(state, val) {
      state.csvData[val][2] = true;
    },
    hoverFlagOff2(state, val) {
      state.csvData[val][2] = false;
    },
  },
  // actionオプションで定義
  actions: {
    hoverFlagOn(ctx, val) {
      ctx.commit('hoverFlagOn2', val);
    },
    hoverFlagOff(ctx, val) {
      ctx.commit('hoverFlagOff2', val);
    },
  },
  modules: {
  },
});
