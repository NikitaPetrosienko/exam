<template>
  <TheHeader />
  <v-main>
    <router-view />
  </v-main>
  <TheFooter />
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

</script>
