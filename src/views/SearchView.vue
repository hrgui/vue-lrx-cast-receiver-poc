<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import type SpatialNavigation from 'vue-spatial-nav/lib/spatial_navigation'

const spatialNavigation = inject('spatialNavigation') as SpatialNavigation

function print(e) {
  console.log(e)
}

onMounted(() => {
  spatialNavigation.focus('search')
})

onBeforeRouteLeave(() => {
  spatialNavigation.remove('search')
})
</script>

<template>
  search
  <div id="search" v-focus-section:search style="display: flex">
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
