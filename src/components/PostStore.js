import axios from 'axios'
const baseUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/lowlyj.wordpress.com/posts/';

export default {


    posts: [],

    fetchPosts() {
        axios.get(`${baseUrl}?number=100,fields=ID,terms,slug,date,title,excerpt,content`)
                .then(({data}) => this.posts = data.posts)
                .catch(err => console.log(err.response));
    },

    getCategoryPosts(category) {
        return this.posts.filter(post => post.terms.category.hasOwnProperty(category));
    },

    getPostById(id) {
        // return this.posts.find(post => post.ID === id);

    },

    getPostBySlug(slug) {
        // let local = this.posts.find(post => post.slug === slug);

        // return local ? local : {title: 'Mooz', date: '2017-05-05', content: 'Fuck You'};
        return new Promise((resolve, reject) => {
            let local = this.posts.find(post => post.slug === slug);

            if(local) {
                resolve(local);
            } else {
                axios.get(`${baseUrl}slug:${slug}?fields=ID,terms,slug,date,title,excerpt,content`)
                .then(({data}) => resolve(data))
                .catch(err => reject(err));        
            }
        });
    },

    fetchPostBySlug(slug) {
        axios.get(`${baseUrl}slug:${slug}?number=100,fields=ID,terms,slug,date,title,excerpt,content`)
                .then(({data}) => this.posts = data.posts)
                .catch(err => console.log(err.response));
    }
}