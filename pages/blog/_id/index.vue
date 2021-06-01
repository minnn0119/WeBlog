<template>
  <div class="blogpage" >
    <h3>Blog:{{ blog.name }}</h3>
    <img :src="blog.hinhanh" :alt="`Img of ${blog.name}`" />
    <p>{{ blog.noidung }}</p>
    <div class="button">
      <button
        class="btn btn_warning"
        @click.prevent="openModal('BlogFormModal')"
      >
        Edit Blog
      </button>
      <button class="btn btn_danger" @click.prevent="deleteBlog">Delete</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-web-default-rtdb.asia-southeast1.firebasedatabase.app/blogs/${context.params.id}.json`
      )
      .then((response) => {
        return {
          blog: response.data,
        };
      })
      .catch((e) => {
        context.error(e);
      });
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: "EditBlog" });
    },
    openModal(name) {
      this.$modal.open({
        name: "BlogFormModal",
        payload: { ...this.blog, id: this.$route.params.id },
      });
    },
    deletaBlog(blogData) {
      const blogId = blogData.id;
      delete blogData.id;

      return axios
        .delete(
          "https://nuxt-web-default-rtdb.asia-southeast1.firebasedatabase.app/blogs/" +
            blogId +
            ".json",
          blogData
        )
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style scoped>
.blogpage {
  color: aliceblue;
  text-align: center;
}
.button {
  display: flex;
}
</style>