<template>
  <v-form ref="form" v-model="valid" lazy-validation>

    <h2 class="mb-2">Оставить отзыв:</h2>

    <v-alert v-if="isShowAlert" type="success" class="mb-5">Отзыв был получен!</v-alert>

    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Ваше имя" required class="mb-2"></v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="Ваш E-mail" required class="mb-2"></v-text-field>

    <v-textarea name="input-7-1" variant="filled" label="Текст отзыва" auto-grow v-model="text">
    </v-textarea>

    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'Для продолжения нужно согласие!']"
      label="Вы согласны на обработку данных?" required class="mb-2"></v-checkbox>

    <v-btn color="success" class="mr-4" @click.prevent="postReview">
      Отправить
    </v-btn>

  </v-form>
</template>

<script>
export default {
  data: () => ({
    isShowAlert: false,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail обязателен для заполнения',
      v => /.+@.+\..+/.test(v) || 'E-mail должен быть действительным',
    ],
    text: '',
    checkbox: false,
  }),

  methods: {
    async postReview() {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        this.isShowAlert = true;
        setTimeout(() => {
          this.isShowAlert = false;
        }, 3000);
        this.$store.dispatch('postReview', {
          product_id: this.$route.params.id,
          email: this.email,
          text: this.text,
        });
        this.reset();
        this.resetValidation();
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<!-- <script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();

store.dispatch('getCurrentDiscount', route.params.id);

const form = ref(null);

const isShowAlert = ref(false);

const valid = ref(true);


const postReview = async () => {
  const { valid } = await form.value.validate()
  if (valid) {

  }
};

</script> -->

<style>

</style>
