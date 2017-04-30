<template>
  <div id="app">
  <nav class="main-nav">
    
    <div class="left-nav">
      <router-link to="/">Home</router-link>
    </div>
    <div class="right-nav">
      <router-link to="/running">Running</router-link>
      <router-link to="/banting">Banting</router-link>
      <router-link to="/photography">Photography</router-link>
    </div>
    
    
  </nav>
    <router-view></router-view>
    <footer class="main-footer">
      <p>Keep on running.</p>
    </footer>
  </div>

</template>

<script>
import PostStore from '@/components/PostStore';
export default {
  name: 'app',

  data() {
    return {
      store: PostStore
    };
  },

  mounted() {
    this.store.fetchPosts();
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #fd5e53;
}

.main-nav a {
  text-decoration: none;
  color: inherit;
  margin: 0 15px;
  color: #fff;
}

footer.main-footer {
  height: 400px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 60px;
  background: #fd5e53;
}
</style>
