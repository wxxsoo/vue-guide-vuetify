<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <div class="text-md-center">
          <h1>404</h1>
          <h2 class="my-3 headline">Sorry, page not found</h2>
          <div><v-btn color="primary" @click="goHome">Go Home</v-btn></div>
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style></style>
