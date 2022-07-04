<template>
  <div class="container">
    <h1 style="text-align: center">All News</h1>
    <section class="news_container" v-for="someNews in news" :key="someNews.url">
      <NewsItem :newsItem="someNews"/>
    </section>
  </div>
</template>

<script>
import NewsItem from "@/components/news/NewsItem";

export default {
  name: "NewsList",
  components: {NewsItem},
  created() {
    this.$store.dispatch("getNewsAll")
  },
  computed: {
    news() {
      return this.$store.getters.getNews
    }
  },
}
</script>

<style scoped>

</style>