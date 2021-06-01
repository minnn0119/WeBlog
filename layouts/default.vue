<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn to="/home">
        <h5>WeBlog</h5>
      </v-btn>
      <v-btn to="/login">
        <p>Đăng nhập</p>
      </v-btn>
      <v-btn to="/register">
        <p>Đăng ký</p>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-modal v-slot="payload" name="BlogFormModal">
      <div class="CreateBlog_body">
        <h1>{{ payload && payload.payload ? "Sửa Blog" : "Tạo Blog mới" }}</h1>
        <blog-form :blog="payload.payload" @submit="onSubmit" />
      </div>
    </v-modal>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import BlogForm from "@/components/Blogs/BlogForm";

export default {
  components: {
    BlogForm,
  },
  methods: {
    onSubmit(blogData) {
      if (blogData && !blogData.id) {
        this.$store
          .dispatch("addBlog", blogData)
          .then(() => this.$modal.close({ name: "BlogFormModal" }));
      } else {
        this.$store.dispatch("editBlog", blogData).then(() => {
          this.$modal.close({ name: "BlogFormModal" });
          this.$router.push('/blog');
        });
      }
    },
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/home",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Blog",
          to: "/blog",
        },
      ],
    };
  },
};
</script>
