<template>
  <v-row class="align-center flex-wrap">

    <v-col cols="12" sm="12" md="8" lg="8" xl="8">
      <h2 class="text-h3 mb-3">Наши рецепты</h2>

      <router-link to="/product/create" class="text-decoration-none">
        <v-btn variant="flat" color="success">
          Добавить свой рецепт
          <v-icon icon="mdi-hamburger-plus" class="ml-3"></v-icon>
        </v-btn>
      </router-link>
    </v-col>

    <v-col cols="12" sm="12" md="4" lg="4" xl="4">
      <v-select :items="items" label="Все" v-model="currentSelect"></v-select>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="4" md="4" lg="4" xl="4" v-for="item in menu" :key="item.id">
      <MenuItem :item="item"/>
    </v-col>
  </v-row>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem.vue';

export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      items: ['Все', 'pizza', 'tanuki',],
      currentSelect: '',
    }
  },
  methods: {
    getMenuByFilter() {
      console.log('Filter');
    },
    createPrintPage() {
      const w = window.open('print-me', '_blank')
      w.document.write(htmlString)
    },
    printPage() {
      this.createPrintPage('<h1>Print me title</h1>')
    }
  },
  computed: {
    menu: {
      get() {
        return this.$store.getters.menuList
      }
    },
  },
  watch: {
    currentSelect(value) {
      this.$store.dispatch('getMenuByFilter', value);
    }
  }
}
</script>

<style>

</style>
