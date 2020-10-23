<template>
  <v-app-bar app color="primary" dense dark>
    <v-app-bar-nav-icon @click="handleDrawerToggle"></v-app-bar-nav-icon>

    <v-toolbar-title>Hacker News</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    handleDrawerToggle() {
      this.$store.commit("SET_DRAWER");
    }
  }
};
</script>

<style></style>
