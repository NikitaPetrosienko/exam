<template>
  <v-container>

    <v-row>
      <v-col>
        <v-breadcrumbs :items="breadcrumbs" large>
        </v-breadcrumbs>
      </v-col>
    </v-row>

    <v-card class="py-5 px-5 mb-5">

      <v-row>
        <v-col cols="12" sm="12" md="5" lg="5" xl="5">
          <v-img :src="`../src/assets/image/${currentProduct.image}`" height="600px" :alt="`${currentProduct.image}`"></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="7" lg="7" xl="7">
          <v-card class="h-100 bg-orange-lighten-5">
            <v-card-text>
              <v-card-title class="text-h5 mb-4">
                {{ currentProduct.name }}
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="mt-4 text-body-2 mr-5">
                <h4 class="text-h6">Рецепт:</h4>
                {{ currentProduct.description }}
              </v-card-text>
            </v-card-text>

          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-container>
          <h3 class="text-h6">
            Отзывы:
          </h3>
        </v-container>
        <v-col cols="12" v-for="review in reviews" :key="review.id">
          <v-card>
            <v-card-text>
              <v-card-title class="text-h5 mb-4">
                Пользователь {{ review.email }}
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="mt-4 text-body-2 mr-5">
                <h4 class="text-h6">Информация:</h4>
                {{ review.text }}
              </v-card-text>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-card>

    <AppReview />

  </v-container>
</template>

<script>
import AppReview from '@/components/product/AppReview.vue';

export default {
  components: {
    AppReview,
  },
  created() {
    this.$store.dispatch('getCurrentProduct', this.$route.params.id);
    this.$store.dispatch('getCurrentProductReviews', this.$route.params.id);
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'Кухня',
          disabled: true,
          href: '/'
        }
      ],
      panel: [0],
    }
  },
  computed: {
    currentProduct: {
      get() {
        return this.$store.getters.currentProduct
      }
    },
    reviews: {
      get() {
        return this.$store.getters.currentProductReviews
      }
    },
  },
}
</script>

<style>
@media print {
  input {
    display: none;
  }
}
</style>
