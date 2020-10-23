<template>
  <div>
    <v-app>
      <app-header></app-header>
      <app-drawer></app-drawer>
      <app-content></app-content>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppContent from "@/components/layouts/AppContent";
import AppDrawer from "@/components/layouts/AppDrawer";
import AppFooter from "@/components/layouts/AppFooter";
import AppHeader from "@/components/layouts/AppHeader";
export default {
  components: {
    AppContent,
    AppDrawer,
    AppFooter,
    AppHeader
  }
};
</script>

<style></style>
