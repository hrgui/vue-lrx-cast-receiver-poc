<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div style="display: flex">
    <nav style="display: flex; flex-direction: column" v-focus-section:menu>
      <RouterLink to="/" v-focus>Home</RouterLink>
      <RouterLink to="/browse" v-focus>Browse</RouterLink>
      <RouterLink to="/history" v-focus>History</RouterLink>
      <RouterLink to="/search" v-focus>Search</RouterLink>
      <RouterLink to="/watchlist" v-focus>Watchlist</RouterLink>
      <RouterLink to="/settings" v-focus>Settings</RouterLink>
    </nav>
    <div>
      <RouterView />
    </div>
  </div>
</template>
