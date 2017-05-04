<template>
    <div class="post-component">
    <h1 v-html="post.title" class="centered heading-text post-post-title"></h1>
    <p class="post-date centered">{{ formatted_date }}</p>
    <article class="article-body" v-html="post.content"></article>
    </div>
</template>

<script>
    import moment from "moment";
    export default {

        name: 'post',

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
                    title: '',
                    date: null,
                    content: ''
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
                if(Number.isInteger(parseInt(this.id))) {
                    return this.getById(parseInt(this.id));
                }
                
                return this.getBySlug(this.id);
            },

            getById(id) {
                this.post = this.$parent.store.getPostById(id)
            },

            getBySlug(slug) {
                this.$parent.store.getPostBySlug(slug).then(post => this.post = post);
            }
        }

    }
</script>

<style lang="scss">
    .post-post-title {
        font-size: 2.5em;
    }

    .article-body {
        max-width: 800px;
        width: 95%;
        margin: 2em auto;
        text-align: left;
    }

    .article-body * {
        max-width: 100%;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 1em auto;
        border: none;
    }
</style>