<template>
<v-footer class="bg-orange text-center d-flex flex-column">
  <div>
    <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
  </div>

  <v-divider></v-divider>

  <div class="pt-0">
    {{ new Date().getFullYear() }} Петросиенко Никита 211-323.
  </div>

</v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  }
}
</script>
