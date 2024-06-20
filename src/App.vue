<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/browse">Browse</RouterLink>
        <RouterLink to="/history">History</RouterLink>
        <RouterLink to="/search">Search</RouterLink>
        <RouterLink to="/watchlist">Watchlist</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
