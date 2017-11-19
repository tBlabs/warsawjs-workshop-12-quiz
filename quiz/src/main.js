import Vue from 'vue'
import App from './App.vue'
import quizzes from './quizzes.json'
import VueRouter from 'vue-router'
import HomeComponent from './components/HomeComponent'
import QuizPage from './components/QuizPage'
import AddQuiz from './components/AddQuizPage'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/game', component: QuizPage },
    { path: '/add', component: AddQuiz }
  ]
});


new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  data:
  {
    quizzes: quizzes.quizzes
  }
})
