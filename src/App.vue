<template>
  <div id="app">
  <nav class="main-nav">
    
    <div class="left-nav">
      <router-link class="heading-text text-red" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/></svg></router-link>
    </div>
    <div class="right-nav">
      <router-link class="heading-text" to="/running">Running</router-link>
      <router-link class="heading-text" to="/banting">Banting</router-link>
      <router-link class="heading-text" to="/photography">Photography</router-link>
    </div>
    
    
  </nav>
  <div class="main-content">
    <router-view></router-view>
  </div>
  <footer class="main-footer bg-primary">
    <p class="text-red-dark font-sans">Keep on running.</p>
  </footer>
  </div>

</template>

<script>
import PostStore from "@/components/PostStore";
export default {
  name: "app",

  data() {
    return {
      store: PostStore
    };
  },

  mounted() {
    this.store.fetchPosts();
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  height: 100%;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

svg {
  fill: currentColor;
}

#app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  & > * {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
  }

  .main-content {
    flex-grow: 1;
  }
}

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Noto Serif", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.centered {
  text-align: center;
}

.heading-text {
  font-family: "Oswald", "Noto Serif", Helvetica, Arial, sans-serif;
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
  text-transform: uppercase;

  &:hover {
    color: #333;
  }
}

footer.main-footer {
  height: 250px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-align: center;
}
</style>
<style src="./styles/main.css"></style>