<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMenuFocused = ref(false)

function onFocusMenu() {
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
        v-focus-section:nav-menu="{
          enterTo: 'default-element',
          defaultElement: '.router-link-active'
        }"
        v-focus-events="{
          focused: onFocusMenu,
          unfocused: onFocusMenuLeft
        }"
      >
        <RouterLink v-slot="{ isActive }" to="/" v-focus>
          <div :class="{ 'current-link text-white': isActive, 'text-gray-300': !isActive }">
            Home
          </div>
        </RouterLink>
        <RouterLink v-slot="{ isActive }" to="/browse" v-focus>
          <div :class="{ 'current-link text-white': isActive, 'text-gray-300': !isActive }">
            Browse
          </div>
        </RouterLink>
        <RouterLink v-slot="{ isActive }" to="/history" v-focus>
          <div :class="{ 'current-link text-white': isActive, 'text-gray-300': !isActive }">
            History
          </div>
        </RouterLink>
        <RouterLink v-slot="{ isActive }" to="/search" v-focus>
          <div :class="{ 'current-link text-white': isActive, 'text-gray-300': !isActive }">
            Search
          </div>
        </RouterLink>
        <RouterLink v-slot="{ isActive }" to="/watchlist" v-focus>
          <div :class="{ 'current-link text-white': isActive, 'text-gray-300': !isActive }">
            Watchlist
          </div>
        </RouterLink>
        <RouterLink v-slot="{ isActive }" to="/settings" v-focus>
          <div :class="{ 'current-link text-white': isActive, 'text-gray-300': !isActive }">
            Settings
          </div>
        </RouterLink>
      </nav>
      <div
        :class="{
          '@asvw:pl-[348px]': isMenuFocused,
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
