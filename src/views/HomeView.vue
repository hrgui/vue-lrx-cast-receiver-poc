<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import type SpatialNavigation from 'vue-spatial-nav/lib/spatial_navigation'

const spatialNavigation = inject('spatialNavigation') as SpatialNavigation

function print(e) {
  console.log(e)
}

onMounted(() => {
  spatialNavigation.focus('home')
})

onBeforeRouteLeave(() => {
  spatialNavigation.remove('home')
})
</script>

<template>
  Home
  <div id="home" v-focus-section:home style="display: flex">
    <div class="@asvw:w-[200px]" v-focus v-focus-events="{ willmove: print }">
      <div>Test</div>
    </div>
    <div v-focus v-focus-events="{ willmove: print }">
      <div>Test 2</div>
    </div>
    <div v-focus v-focus-events="{ willmove: print }">
      <div>Test 3</div>
    </div>
  </div>
</template>
