<template>
<div>
    <h2>Add question(s)</h2>
    <NewQuiz v-for="quiz in quizes"/>
    <button v-on:click="Add">One more</button>
</div>
</template>

<script>
import NewQuiz from './NewQuiz'
export default 
{
  name: 'AddQuiz',
  components: { NewQuiz },
  created()
  {
      this.questions = this.$root.quizzes[0].questions;
  },
  data() 
  {
      return (
      {
        quizes: []
      })
  },
  methods:
  {
      Add()
      {
          this.quizes.push('a');
      }
  },
}
</script>

<style>
</style>