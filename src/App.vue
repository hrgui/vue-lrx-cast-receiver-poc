<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMenuFocused = ref(false)

function onFocusMenu(e) {
  console.log('menu focused', e)
  isMenuFocused.value = true
}

function onFocusMenuLeft() {
  isMenuFocused.value = false
}
</script>

<template>
  <div class="w-full absolute h-[56.25vw]">
    <div class="flex">
      <nav
        id="nav-menu"
        class="flex flex-col overflow-hidden"
        :class="{
          '@asvw:w-[300px] fixed left-0 bg-gray-500': isMenuFocused,
          '@asvw:w-[64px]': !isMenuFocused
        }"
        v-focus-section:menu
        v-focus-events="{ focused: onFocusMenu, unfocused: onFocusMenuLeft }"
      >
        <RouterLink to="/" v-focus>Home</RouterLink>
        <RouterLink to="/browse" v-focus>Browse</RouterLink>
        <RouterLink to="/history" v-focus>History</RouterLink>
        <RouterLink to="/search" v-focus>Search</RouterLink>
        <RouterLink to="/watchlist" v-focus>Watchlist</RouterLink>
        <RouterLink to="/settings" v-focus>Settings</RouterLink>
      </nav>
      <div
        :class="{
          '@asvw:pl-[300px]': isMenuFocused,
          '@asvw:pl-[64px]': !isMenuFocused
        }"
      >
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
#nav-menu *:focus {
  background: green;
}
</style>
