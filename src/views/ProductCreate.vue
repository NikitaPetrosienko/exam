<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>

      <h2 class="text-h3 my-5">Добавить рецепт</h2>

      <v-alert v-if="isShowAlert" type="success" class="mb-5">Рецепт был добавлен!</v-alert>

      <v-text-field v-model="name" :counter="50" :rules="nameRules" label="Название блюда" required
        class="mb-2"></v-text-field>

      <v-text-field v-model="description" label="Ингредиенты" required class="mb-2"></v-text-field>

      <v-select :items="items" label="Выберите тип" v-model="currentSelect"></v-select>

      <v-btn color="success" class="mr-4" @click.prevent="postProduct">
        Добавить
      </v-btn>


    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isShowAlert: false,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 50 characters',
    ],

    description: '',
    checkbox: false,
    items: ['pizza', 'tanuki',],
    currentSelect: '',
  }),

  methods: {
    async postProduct() {
      const { valid } = await this.$refs.form.validate()
      if (valid) {

        this.isShowAlert = true;
        setTimeout(() => {
          this.isShowAlert = false;
          this.reset();
          this.resetValidation();
        }, 3000);

        this.$store.dispatch('postProduct', {
          name: this.name,
          description: this.description,
          type: this.currentSelect,
        });
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
