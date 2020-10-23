<template>
  <!-- <div>{{ jobsList }}</div> -->
  <v-data-table
    :headers="headers"
    :items="jobsList"
    item-key="id"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar class="mb-2" color="indigo" dark flat dense>
        <v-toolbar-title>Jobs Table</v-toolbar-title>
      </v-toolbar>
    </template>
    <template v-slot:[`item.title`]="{ item }">
      <a :href="item.url">{{ item.title }}</a>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Title", value: "title" },
        { text: "작성시간", value: "time_ago" }
      ]
    };
  },
  computed: {
    jobsList() {
      return this.$store.getters.jobsList;
    }
  }
};
</script>

<style></style>
