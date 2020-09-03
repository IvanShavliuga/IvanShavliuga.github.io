<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HeaderProf
      name="Ivan Ivanov Shavliuga"
      geo="Novopolotsk"
      email="iv2@gtb.com"
      prof="js developer"
      phone="37500"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderProf from '@/components/HeaderProf.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HeaderProf
  }
}
</script>
