<template>
    <li>
          <nuxt-link class="blog" :to="`/blog/${id}`">
            <div class="card blog-card">
              <img :src="hinhanh" :alt="`Img of ${name}`" />
              <div class="card-body">
                <h3>{{ name }}</h3>
              </div>
            </div>
          </nuxt-link>
        </li>
</template>
<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        noidung: {
            type: String,
            default:''
        },
        hinhanh: {
            type: String,
            required: true
        }
    }
}
</script>

<style  scoped>
p {
  color: black;
}
h3 {
  color: #000;
}
.blog{
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

</style>