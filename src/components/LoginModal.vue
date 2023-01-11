<template>
  <v-col cols="auto">
    <v-dialog transition="dialog-top-transition" max-width="700">
      <template v-slot:activator="{ props }">
        <v-btn color="black" icon="mdi-account-circle" v-bind="props"></v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar color="orange" title="Авторизация"><v-icon icon="mdi-close-circle-outline" class="pr-5"
              @click="isActive.value = false"></v-icon></v-toolbar>

          <v-container>

            <v-alert v-if="isShowAlert" type="success" class="mb-5">Мы вам скоро позвоним!</v-alert>

            <v-form ref="form" v-model="valid" lazy-validation class="pt-5">

              <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Ваше имя" required
                class="mb-2"></v-text-field>

              <v-text-field v-model="email" :rules="emailRules" label="Ваш E-mail" required class="mb-2"></v-text-field>

              <v-checkbox v-model="checkbox"
                label="Запомнить вход?" class="mb-2"></v-checkbox>

              <v-btn color="success" class="float-right ml-4" @click.prevent="login">
                Авторизоваться
              </v-btn>

            </v-form>
          </v-container>
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
    email: '',
    emailRules: [
      v => !!v || 'E-mail обязателен для заполнения',
      v => /.+@.+\..+/.test(v) || 'E-mail должен быть действительным',
    ],
    checkbox: false,
  }),

  methods: {
    async login() {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        this.$store.commit('toggleAuthUser');
        this.$store.commit('setCurrentUserName', this.name);
        setTimeout(() => {
          this.isShowAlert = false;
          this.checkbox = false;
          this.reset();
          this.resetValidation();
        }, 3000);
        // this.isShowAlert = true;
        // this.$store.dispatch('postCall', {
        //   name: this.name,
        //   phone: this.phone,
        // });
        // setTimeout(() => {
        //   this.isShowAlert = false;
        //   this.name = '';
        //   this.phone = '';
        //   this.reset();
        //   this.resetValidation();
        // }, 3000);
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
