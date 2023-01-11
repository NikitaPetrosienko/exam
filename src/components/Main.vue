<template>
    <v-container>

    <v-row>
      <v-col>
        <h1 class="text-h2 py-3">Рецепты для всей семьи</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-breadcrumbs :items="breadcrumbs" large>
        </v-breadcrumbs>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
          <v-carousel-item v-for="item in banners" :key="item.name">
            <v-sheet height="100%">
              <div class="d-flex fill-height justify-center align-center">
                <v-img :src="`../src/assets/image/${item.image}`" height="600px" :alt="`${item.image}`"></v-img>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row class="my-3">
      <v-col class="d-flex justify-center">
        <MakeOrder />
      </v-col>
    </v-row>

    <MenuList />

    </v-container>
</template>

<script>
import MenuList from '@/components/menu/MenuList.vue';
import MakeOrder from '@/components/MakeOrder.vue';

export default {
  components: {
    MenuList, MakeOrder,
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Главная /',
          disabled: true,
          href: '/'
        },
      ],
      banners: [
        {
          "name": "Пиццы",
          "time_of_delivery": 50,
          "stars": 4.5,
          "price": 900,
          "kitchen": "Пицца",
          "image": "preview-pizza.jpg",
          "products": "pizza.json"
        },
        {
          "name": "Роллы",
          "time_of_delivery": 60,
          "stars": 4.3,
          "price": 1200,
          "kitchen": "Японская",
          "image": "preview-tanuki.jpg",
          "products": "tanuki.json"
        },
        {
          "name": "Буррито",
          "time_of_delivery": 50,
          "stars": 4.5,
          "price": 900,
          "kitchen": "Буррито",
          "image": "preview-burrito.jpg",
          "products": "pizza.json"
        },
        {
          "name": "Бургеры",
          "time_of_delivery": 50,
          "stars": 4.5,
          "price": 900,
          "kitchen": "Бургеры",
          "image": "preview-cheeseburger.jpg",
          "products": "pizza.json"
        }
      ],
    }
  },
  created () {
    this.$store.dispatch('getRecipes');
    this.$store.dispatch('getMenu');
  },
  computed: {
    // banners: {
    //   get() {
    //     return this.$store.getters.bannerList
    //   }
    // },
  },
}
</script>

<style scoped>
</style>
