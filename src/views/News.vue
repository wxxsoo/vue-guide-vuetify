<template>
  <v-row>
    <v-col cols="12" sm="12" md="6" lg="6">
      <news-card-list></news-card-list>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="6">
      <news-table></news-table>
    </v-col>
  </v-row>
</template>

<script>
import NewsCardList from "@/components/news/NewsCardList.vue";
import NewsTable from "@/components/news/NewsTable.vue";
export default {
  components: {
    NewsCardList,
    NewsTable
  },
  created() {
    //fetch news...
    this.$store.dispatch("FETCH_NEWS_LIST");
  }
};
</script>

<style></style>
