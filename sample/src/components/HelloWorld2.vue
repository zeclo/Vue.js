<template>
  <div class="hello">
    <h2>Todoリスト</h2>
    <div id="app">
      <!-- ESlintのエラー対策(https://qiita.com/MakiMatsu/items/ef2eadbce13dc227d3bd) <th v-for="(value, key) in columns" :key="key">{{ value }}</th>  -->

      <div v-for="(todo, key) in todos" :key="key">
        <label>
          <input type="checkbox" v-model="todo.done">
          <span v-bind:class="{donestyle:todo.done}">{{todo.text}}
          </span>
        </label>
      </div>

      <input type="text" v-model.trim="addtext" v-on:keyup.enter="addToDo" placeholder="すること">
      <p><button v-on:click="cleanToDo">処理済みを削除</button></p>
      <p>{{remaining}} / {{todos.length}}件処理</p>
    </div>
  </div>
</template>

<script>
export default {
  el: '#app',
  data() {
    return {
      addtext: '',
      todos: [
        { done: false, text: 'パンを買う' },
        { done: false, text: 'コーヒーを買う' },
      ],
    };
  },
  computed: {
    remaining() {
      return this.todos.filter(val => val.done === true).lengh;
    },
  },
  methods: {
    addToDo() {
      if (this.addtext) {
        this.todos.push({ done: false, text: this.addtext });
        this.addtext = '';
      }
    },
    cleanToDo() {
      this.todos = this.todos.filter(val => val.done === false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .donestyle{
    text-decoration: line-through;
    color: lightgray;
  }
</style>
