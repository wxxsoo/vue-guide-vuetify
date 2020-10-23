<template>
  <v-data-table
    :headers="headers"
    :items="newsList"
    item-key="id"
    :items-per-page="8"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar class="mb-2" color="indigo" dark flat dense>
        <v-toolbar-title>News Table</v-toolbar-title>
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
        { text: "작성시간", value: "time_ago" },
        { text: "작성자", value: "user" },
        { text: "Points", value: "points" },
        { text: "댓글 수", value: "comments_count" }
      ]
    };
  },
  computed: {
    newsList() {
      return this.$store.getters.newsList;
    }
  }
};
</script>

<style></style>
