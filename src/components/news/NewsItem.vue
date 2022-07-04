<template>
  <div class="news_item">
    <p class="meta_data">Author: {{ newsItem.author }} <span class="date">Date: {{ newsItem.date }}</span></p>
    <h3 class="news_title"><a :href="newsItem.readMoreUrl">{{ newsItem.title }}</a></h3>
    <div class="preview_img_container">
      <img
          :src="newsItem.imageUrl"
          alt="">
    </div>
    <div class="news_desc_container">
      <h3 class="description">Description</h3>
      <p class="news_desc">{{ newsItem.title }}</p>
    </div>
    <BaseButton class="bg-red">
      <a :href="newsItem.readMoreUrl">More info</a>
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: "NewsItem",
  props: ["newsItem"]
}
</script>

<style scoped>

</style>