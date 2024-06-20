<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import type SpatialNavigation from 'vue-spatial-nav/lib/spatial_navigation'

const spatialNavigation = inject('spatialNavigation') as SpatialNavigation

function print(e) {
  console.log(e)
}

onMounted(() => {
  spatialNavigation.focus('watchlist')
})

onBeforeRouteLeave(() => {
  spatialNavigation.remove('watchlist')
})
</script>

<template>
  watchlist
  <div id="watchlist" v-focus-section:watchlist style="display: flex">
    <div class="first" v-focus v-focus-events="{ willmove: print }">
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
