<template>
  <form @submit.prevent="onSave">
    <div class="form_group">
      <label for="">Tiêu đề</label>
      <input
        v-model="editedBlog.name"
        class="form_control"
        type="text"
        placeholder="Hãy điền tiêu đề"
      />
      <label for="">Nội dung</label>
      <textarea
        v-model="editedBlog.noidung"
        class="form_control"
        placeholder="Hãy viết nội dung"
        cols="120"
        rows="15"
      ></textarea>
      <label for="">Image</label>
      <input
        v-model="editedBlog.hinhanh"
        class="form_control"
        type="text"
        placeholder="https://example.com/vd.png"
      />
      <div class="preview"></div>
    </div>
    <div class="form_group">
      <button class="btn btn_danger" type="button" @click.prevent="closeModal">Exit</button>
      <button
        class="bbtn btn_primary"
        type="submit"
      >
        {{editedBlog && editedBlog.id ? 'Edit' : 'Create'}}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      require: false,
      default: {
        name: "",
        noidung: "",
        hinhanh: "",
      },
    },
  },
  data() {
    return {
      editedBlog: this.blog
        ? { ...this.blog }
        : {
            name: "",
            noidung: "",
            hinhanh: "",
          },
    };
  },
  methods: {
    closeModal() {
      console.log("close modal");
      this.$modal.close({ name: "BlogFormModal" });
    },
    onSave() {
        this.$emit('submit', this.editedBlog)
    },
  },
};
</script>