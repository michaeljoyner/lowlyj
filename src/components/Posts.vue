<template>
    <div class="post-listing">
        <h1 class="page-title">{{ category }}</h1>
        <div v-for="post in posts" class="post">
            <router-link :to="`/post/${post.slug}`">
                <h2 v-html="post.title"></h2>
            </router-link>
            <p class="post-date"><span>{{ formatted_date(post) }}</span></p>
            <div class="body" v-html="post.excerpt">
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';

    export default {
        name: 'posts',

        props: ['category'],

        data() {
            return {
                posts: [],
                baseUrl: 'https://public-api.wordpress.com/rest/v1.1/sites/lowlyj.wordpress.com/posts/'
            }
        },

        // computed: {
        //     formatted_date(post) {
                
        //     }
        // },

        mounted() {
            this.getPosts();
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {vm.getPosts()});
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
    }
</script>

<style scoped>
    .page-title {
        font-size: 48px;
        text-transform: uppercase;
    }

    .post-listing {
        width: 95%;
        margin: 0 auto;
        max-width: 800px;
    }

    .post-listing a {
        text-decoration: none;
        color: #333;
    }

    .post-listing a:hover {
        color: #fd5e53;
    }

    .post-date span {
        border-bottom: 2px solid #fd5e53;
    }
</style>