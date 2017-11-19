<template>
<div class="new-quiz">
    <input v-model="quest">
    <hr>
    <input v-for="(answer, index) in answers" v-model="answers[index]">
</div>
</template>

<script>
export default 
{
  name: 'NewQuiz',
  created()
  {
      this.questions = this.$root.quizzes[0].questions;
  },
  data() 
  {
      return (
      {
        quest: "quest",
        answers: ["a", "b", "c", "d"],
      })
  },
  methods:
  {
  },
}
</script>

<style>
.new-quiz
{
    border: 1px solid red;
    margin: 8px;
}
</style>