<template>
    <div class="post-component max-w-md lg:max-w-lg mx-auto px-4 lg:px-0">
    <h1 v-html="post.title" class="text-center mt-12 mb-3 text-2xl md:text-3xl text-grey-darkest"></h1>
    <p class="text-center text-grey-dark">{{ formatted_date }}</p>
    <article class="article-body leading-normal md:text-lg" v-html="post.content"></article>
    </div>
</template>

<script>
import moment from "moment";
export default {
  name: "post",

  props: {
    id: {
      required: true,
      type: String
    }
  },

  data() {
    return {
      post: {
        ID: null,
        title: "",
        date: null,
        content: ""
      }
    };
  },

  computed: {
    formatted_date() {
      return moment(this.post.date).format("dddd, MMMM Do YYYY");
    }
  },

  mounted() {
    this.getPost();
  },

  methods: {
    getPost() {
      if (Number.isInteger(parseInt(this.id))) {
        return this.getById(parseInt(this.id));
      }

      return this.getBySlug(this.id);
    },

    getById(id) {
      this.post = this.$parent.store.getPostById(id);
    },

    getBySlug(slug) {
      this.$parent.store.getPostBySlug(slug).then(post => (this.post = post));
    }
  }
};
</script>

<style lang="scss">
.article-body {
  p {
    margin: 1rem 0;
  }

  a {
    color: #fd5e53;
    font-weight: 700;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1em auto;
    border: none;
  }
}

.article-body * {
  max-width: 100%;
}
</style>