<script setup>
import { RouterLink, RouterView } from 'vue-router'
import btn from './components/btn/btn.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <div class="btn-group">
        <btn label="Default button" />
        <btn label="primary button" color="primary"/>
      </div>
      
    </div>
  </header>

  <RouterView />
</template>
