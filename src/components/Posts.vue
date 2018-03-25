<template>
    <div class="max-w-md lg:max-w-lg mx-auto px-4 lg:px-0 md:text-lg">
        <h1 class="text-5xl uppercase font-sans my-12 text-center">{{ category }}</h1>
        <div class="loader" v-show="!posts.length"></div>
        <div v-for="post in posts" class="my-12">
            <router-link :to="`/post/${post.slug}`" class="no-underline">
                <h2 v-html="post.title" class="mb-1 text-grey-darkest hover:text-primary"></h2>
            </router-link>
            <p class="post-date mb-4 mt-2 text-grey-dark"><span>{{ formatted_date(post) }}</span></p>
            <div class="leading-normal excerpt" v-html="post.excerpt">
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "posts",

  props: ["category"],

  data() {
    return {
      posts: [],
      baseUrl:
        "https://public-api.wordpress.com/rest/v1.1/sites/lowlyj.wordpress.com/posts/"
    };
  },

  created() {
    eventHub.$on("posts-loaded", () => this.getPosts());
  },

  mounted() {
    this.getPosts();
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getPosts();
    });
  },

  // beforeRouteUpdate(to, from, next) {
  //     console.log('joo');
  //     console.log(this.ctaegory);
  //     next();
  // },

  methods: {
    getPosts() {
      // axios.get(`${this.baseUrl}?category=${this.category}&fields=ID,terms,slug,date,title,excerpt,content`)
      // .then(({data}) => this.posts = data.posts)
      // .catch(err => console.log(err.response));
      this.posts = this.$parent.store.getCategoryPosts(this.category);
    },

    formatted_date(post) {
      return moment(post.date).format("dddd, MMMM Do YYYY");
    }
  }
};
</script>

<style>
.excerpt a {
  color: #fd5e53;
}
</style>


<style scoped lang="css" type="text/css">
.post-listing {
  width: 95%;
  margin: 0 auto;
  max-width: 800px;
}

.post-date span {
  border-bottom: 2px solid #fd5e53;
}

@media (max-width: 500px) {
  .post-listing {
    text-align: left;
  }
}

.loader,
.loader:before,
.loader:after {
  background: #fd5e53;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #fd5e53;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: "";
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>