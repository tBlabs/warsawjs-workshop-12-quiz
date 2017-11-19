<template>
<div>
    {{ value.index }} / {{ value.max }}
</div>
</template>

<script>
export default 
{
  name: 'QuestionsList',
  props: ['value'],
  data()
  {
      return { 
        }
  },
}
</script>
