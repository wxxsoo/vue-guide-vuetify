<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="askList"
      item-key="id"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar class="mb-2" color="indigo" dark flat dense>
          <v-toolbar-title>Ask Table</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>
  </div>
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
    askList() {
      return this.$store.getters.askList;
    }
  }
};
</script>

<style></style>
