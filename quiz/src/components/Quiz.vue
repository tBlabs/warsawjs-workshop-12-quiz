<template>
<div>
    <h2>{{ Question }} </h2>
    <ul>
        <li class="que" v-for="(item, index) in Answers" v-on:click="Next(index)">{{ item }}</li>
    </ul>
    <h1>{{ msg }}</h1>
</div>
</template>

<script>
export default 
{
  name: 'Quiz',
  created()
  {
      this.questions = this.$root.quizzes[0].questions;
  },
  data() 
  {
      return (
      {
        questions: [],
        index: 0,
        msg: ""
      })
  },
  methods:
  {
      Next(clickedIndex)
      {
        if (this.index < (this.questions.length-1))
        {
            this.index += 1;
        }
        else
        {
            this.msg = "The end.";
        }
        
        this.$emit('IndexChange', { index: this.index, max: this.questions.length });
      }
  },
  computed: 
  {
      Question() 
      { 
          return this.questions[this.index].text;
      },
      Answers() 
      { 
          return this.questions[this.index].answers; 
      }
  }

}
</script>

<style>
.que 
{
    margin: 3px;
    background: #abc;
    border: 1px solid red;
    padding: 13px 30px;

}
</style>