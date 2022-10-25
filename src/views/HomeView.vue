<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import cList from '../components/cList/cList.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->

    <h1>Lorem ipsum</h1>

    <!-- <cList :list="itemList" /> -->

  </main>
</template>


<script>
  export default {
    name: "HomeView",
    props: {},

    data() {
      return {
        name: 'Hello'
      }
    },

    methods: {
      // itemList() {
        
      // }
    },

    computed: {
      itemList() {        
        const country = [
          { code: "nz", name: "New Zealand"},
          { code: "au", name: "Australia"},
          { code: "us", name: "United States"}
        ]

        return country;
      }
    }
  };
</script>
