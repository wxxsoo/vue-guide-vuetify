<template>
  <div>
    <v-data-iterator :items="newsList" item-key="id" :items-per-page="6">
      <template v-slot:header>
        <v-toolbar class="mb-2" color="indigo" dark flat dense>
          <v-toolbar-title>News Card List</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:default="{ items }">
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.id"
            cols="12"
            sm="12"
            md="6"
            lg="6"
          >
            <v-card>
              <v-card-title>
                <a class="text-truncate" :href="item.url">{{ item.title }}</a>
              </v-card-title>
              <v-card-subtitle
                >{{ item.time_ago }} by {{ item.user }}
              </v-card-subtitle>
              <v-card-actions>
                <v-list-item>
                  <v-row align="center" justify="end">
                    <v-icon>mdi-comment</v-icon>
                    <span class="subheading mr-2">
                      {{ item.comments_count }}
                    </span>
                    <v-icon>mdi-bookmark</v-icon>
                    <span class="subheading mr-2"> {{ item.points }} </span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </div>
</template>

<script>
export default {
  computed: {
    newsList() {
      return this.$store.getters.newsList;
    }
  }
};
</script>

<style></style>
