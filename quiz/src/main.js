import Vue from 'vue'
import App from './App.vue'
import quizzes from './quizzes.json'

new Vue({
  el: '#app',
  render: h => h(App),
  data:
  {
    quizzes: quizzes.quizzes
  }
})
