<template>
  <p>{{name}} {{geo}} {{prof}} {{email}} {{phone}}</p>
</template>
<script>
export default {
  name: 'Header',
  props: ['name', 'geo', 'prof', 'email', 'phone']
}
</script>
