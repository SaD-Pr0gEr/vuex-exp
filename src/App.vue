<template>
  <NewsList/>
</template>

<script>
import NewsList from "@/components/news/NewsList";

export default {
  components: {
    NewsList
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #7f9dff;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #7f9dff;
}

.container {
  margin: 50px 50px;
  /*margin: 0 auto;*/
}

.news_container {
  border-radius: 10px;
  padding: 20px;
  width: 70%;
  background-color: white;
  margin-bottom: 50px;
}

.news_title {
  border-bottom: 3px solid black;
  margin-top: 5px;
}

.preview_img_container img {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  border-radius: 10px;
}

.preview_img_container {
  text-align: center;
}

.news_desc {
  font-size: 20px;
  word-break: break-all;
}

.meta_data {
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 0;
}

.date {
  display: block;
}

.description {
  border-bottom: 3px solid black;
}

.bg-red a {
  color: white;
}

.bg-red {
  background-color: rgb(252, 72, 82);
}
</style>
