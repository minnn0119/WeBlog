<template>
  <section class="page">
    <div class="card card-form">
      <div class="card_body">
        <h1>Đăng Nhập</h1>
        <form >
          <div class="form_group">
            <label for="email">Email</label>
            <input
              id="email"
              class="form_control"
              v-model="email"
              type="text"
              placeholder="vd@gmail.com"
            />
          </div>
          <div class="form_group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="password"
              class="form_control"
              type="password"
              placeholder="Hãy điền mật khẩu"
            />
          </div>
          <div class="form_group">
            <nuxt-link :to="`/`" >
              <button type="submit" class="btn btn_success btn-submit">
              Đăng Nhập
            </button>
            </nuxt-link>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: "auth",
   data() {
    return {
      email: "",
      password: "",
    };
  },
}
</script>
<style lang="scss" scoped>
.page {
  padding-top: 100px;
  display: flex;
  justify-content: center;
}
.card-form {
  width: 500px;
}
.btn-submit {
  width: 100%;
}
</style>