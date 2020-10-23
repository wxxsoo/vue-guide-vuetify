<template>
  <v-row>
    <v-col cols="12">
      <news-table></news-table>
    </v-col>

    <v-col cols="12" sm="12" md="6" lg="6">
      <jobs-table></jobs-table>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="6">
      <ask-table></ask-table>
    </v-col>
  </v-row>
</template>

<script>
import JobsTable from "@/components/jobs/JobsTable";
import AskTable from "@/components/ask/AskTable";
import NewsTable from "@/components/news/NewsTable.vue";

export default {
  components: {
    JobsTable,
    AskTable,
    NewsTable
  },
  created() {
    this.$store.dispatch("FETCH_NEWS_LIST");
    this.$store.dispatch("FETCH_JOBS_LIST");
    this.$store.dispatch("FETCH_ASK_LIST");
  }
};
</script>

<style></style>
