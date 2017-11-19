<template>
<div>
    <Quiz v-on:IndexChange="BindQuizIndexChangeWithQuestionList"/>
    <QuestionsList v-bind:value="questionListValue"/>
</div>
</template>

<script>
import Quiz from './Quiz'
import QuestionsList from './QuestionsList'

export default {
  name: 'QuizPage',
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
      this.questionListValue = x;
    }
  }
}
</script>

<style>
</style>
