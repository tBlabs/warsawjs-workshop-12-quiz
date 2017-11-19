<template>
  <div id="app">
    <h2>Quiz</h2>
    <Quiz v-on:IndexChange="BindQuizIndexChangeWithQuestionList"/>
    <QuestionsList v-bind:value="questionListValue"/>
  </div>
</template>

<script>
import Quiz from './components/Quiz'
import QuestionsList from './components/QuestionsList'

export default {
  name: 'app',
  data () {
    return {
      questionListValue: {}
    }
  },
  components: {
    Quiz,
    QuestionsList
  },
  methods:
  {
    BindQuizIndexChangeWithQuestionList(x)
    {
      console.log('aaaa', x);
      this.questionListValue = x;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #42b983;
}
</style>
