<template>
  <v-card class="h-100 py-3">
    <v-img :src="`../src/assets/image/${item.image}`" height="300px" :alt="`${item.image}`"></v-img>
    <v-card-title>
      <router-link class="text-black text-decoration-none" :to="{ name: 'Product', params: { id: item.id }}">
        {{ item.name }}
      </router-link>
    </v-card-title>
    <v-card-subtitle>
      <v-badge color="black" content="50 мин" inline></v-badge>
    </v-card-subtitle>
    <v-card-text>
      Игредиенты: <br>
      {{ item.description }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
