<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import type SpatialNavigation from 'vue-spatial-nav/lib/spatial_navigation'

const spatialNavigation = inject('spatialNavigation') as SpatialNavigation

function print(e: any) {
  console.log(e)
}

onMounted(() => {
  spatialNavigation.focus('browse')
})

onBeforeRouteLeave(() => {
  spatialNavigation.remove('browse')
})
</script>

<template>
  browse
  <div id="browse" v-focus-section:browse style="display: flex">
    <div class="first" v-focus v-focus-events="{ willmove: print }">
      <div>Test</div>
    </div>
    <div v-focus v-focus-events="{ willmove: print }">
      <div>Test 2</div>
    </div>
    <a href="https://www.google.com" v-focus v-focus-events="{ willmove: print }">
      <div>Test 3</div>
    </a>
  </div>
</template>
