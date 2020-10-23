<template>
  <v-navigation-drawer app :value="appDrawer" @input="handleDrawerToggle">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          make a board
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="goPage(item.title)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "News", icon: "mdi-help-box" }
      ],
      right: null
    };
  },
  computed: {
    appDrawer() {
      return this.$store.getters.drawer;
    }
  },

  methods: {
    goPage(name) {
      this.$router.push({ name: name });
    },
    handleDrawerToggle(value) {
      if (this.appDrawer !== value) {
        this.$store.commit("SET_DRAWER");
      }
    }
  }
};
</script>

<style></style>
