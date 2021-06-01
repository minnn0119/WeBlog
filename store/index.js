import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            blogs: []
        },
        mutations: {
            addBlog(state, newBlog) {
                state.blogs.push(newBlog)
            },
            editBlog(state, editBlog) {
                const deckIndex = state.blogs.findIndex((blog) => blog.id === editBlog.id)

                state.blogs[deckIndex] = editBlog
            },
            setBlogs(state, blogs) {
                state.blogs = blogs
            },

        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios
                    .get(
                        "https://nuxt-web-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json"
                    )
                    .then((response) => {
                        const blogsArray = [];
                        for (const key in response.data) {
                            blogsArray.push({ ...response.data[key], id: key });
                        }

                        vuexContext.commit('setBlogs', blogsArray)
                    }).catch((e) => {
                        context.error(e)
                    })

            },
            addBlog(vuexContext, blogData) {
                return axios
                    .post(
                        "https://nuxt-web-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json",
                        blogData
                    )
                    .then((result) => {
                        vuexContext.commit('addBlog', { ...blogData, id: result.data.name })
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            },
            editBlog(vuexContext, blogData) {
                const blogId = blogData.id;
                delete blogData.id;

                return axios
                    .put(
                        "https://nuxt-web-default-rtdb.asia-southeast1.firebasedatabase.app/blogs/" +
                        blogId +
                        ".json",
                        blogData
                    )
                    .then((result) => {
                        vuexContext.commit('editBlog', { ...result.data, id: blogId })
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            },

            setBlogs(vuexContext, blogs) {
                vuexContext.commit('setBlogs', blogs)
            }
        },
        getters: {
            blogs(state) {
                return state.blogs
            }
        }
    })
}

export default createStore