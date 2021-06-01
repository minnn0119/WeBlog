<template>
  <div>
    <div class="ct">
      <div class="d_flex">
        <h2>Danh sách Blog</h2>
        <button class="btn btn_success" @click.prevent="openModal">
          Tạo Blog
        </button>
      </div>
      <ul class="blogs-list">
        <blog-list
          v-for="blog in blogs"
          :id="blog.id"
          :key="blog.id"
          :name="blog.name"
          :noidung="blog.noidung"
          :hinhanh="blog.hinhanh"
        />
      </ul>
    </div>
  </div>
</template>

<script>


import BlogList from "@/components/Blogs/BlogList";


export default {
  components: {
    BlogList,
  },
  computed: {
    blogs() {
      return this.$store.getters.blogs;
    },
  },

  methods: {
    openModal() {
      console.log("open modal");
      this.$modal.open({ name: "BlogFormModal" });
    },
  },
};
</script>

<style  scoped>
p {
  color: black;
}
h3 {
  color: #000;
}
.posts-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.blog {
  display: block;
}
.blog-card {
  display: flex;
  flex-direction: row;
  height: 250px;
}
li {
  margin-bottom: 1rem;
}
img {
  height: auto;
  width: 250px;
}
.d_flex {
  display: flex;
  justify-content: space-between;
}
</style>

<style scoped>
.CreateBlog_body {
  color: #000;
  background: white;
}
</style>