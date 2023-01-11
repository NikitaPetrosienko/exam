<template>
    <v-toolbar class="flex-grow-0" color="orange" dense>
      <router-link to="/" class="pl-5 text-black text-decoration-none">
        <v-toolbar-title>
          <v-icon icon="mdi-list-box"></v-icon>
          Recipes
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <LoginModal />

      <v-btn v-if="currentUser.isAuthUser" variant="flat" color="error" @click="logout">
        Выйти {{ currentUser.name }}
        <v-icon icon="mdi-logout" class="ml-3"></v-icon>
      </v-btn>

    </v-toolbar>
</template>

<script>
import LoginModal from '@/components/LoginModal.vue';

export default {
  components: {
    LoginModal,
  },
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
  methods: {
    logout() {
      this.$store.commit('toggleAuthUser');
    },
  },
  computed: {
    currentUser: {
      get() {
        return this.$store.getters.currentUser;
      }
    },
  },
}
</script>

<style scoped>
</style>
