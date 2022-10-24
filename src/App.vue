<script setup>
import { RouterLink, RouterView } from 'vue-router'
import cBtn from './components/cBtn/cBtn.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

    <div class="header-btn btn-group">
      <cBtn label="Default button" />
      <cBtn label="primary button" color="primary"/>
    </div>
  </header>

  <RouterView />
</template>
