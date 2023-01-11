<template>
<v-col cols="auto">
  <v-dialog transition="dialog-top-transition" max-width="1000">
    <template v-slot:activator="{ props }">
      <v-btn size="x-large" color="warning" v-bind="props">
        <v-icon icon="mdi-cart-arrow-down" size="large" start />

        Позвоните мне
      </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar color="orange" title="Мы вам перезвоним"><v-icon icon="mdi-close-circle-outline" class="pr-5" @click="isActive.value = false"></v-icon></v-toolbar>

        <v-container>

          <v-alert v-if="isShowAlert" type="success" class="mb-5">Мы вам скоро позвоним!</v-alert>

          <v-form ref="form" v-model="valid" lazy-validation class="pt-5">

            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Ваше имя" required class="mb-2"></v-text-field>

            <v-text-field v-model="phone" :rules="phoneRules" label="Ваш номер телефона" required class="mb-2"></v-text-field>

            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'Для продолжения нужно согласие!']"
              label="Вы согласны на сбор данных?" required class="mb-2"></v-checkbox>

            <v-btn color="success" class="mr-4" @click.prevent="postCall">
              Отправить
            </v-btn>

          </v-form>
        </v-container>

        <v-card-actions class="justify-end">
          <v-btn color="error" @click="isActive.value = false">Отенить действие</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</v-col>
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
    phone: '',
    phoneRules: [
      v => !!v || 'Phone is required',
      v => /^((\+7|7|8)+([0-9]){10})$/.test(v) || 'Phone must be valid',
    ],
    checkbox: false,
  }),

  methods: {
    async postCall() {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        this.isShowAlert = true;
        this.$store.dispatch('postCall', {
          name: this.name,
          phone: this.phone,
        });
        setTimeout(() => {
          this.isShowAlert = false;
          this.name = '';
          this.phone = '';
          this.reset();
          this.resetValidation();
        }, 3000);
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

<style>

</style>
