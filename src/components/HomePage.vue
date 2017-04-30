<template>
    <section class="homepage-component">
        <div class="hero">
            <h1 class="page-header">Run Happy.</h1>
            <p class="subtitle">Live fast. Run slow. Eat well.</p>
        </div>
        <div class="about">
            <p>Hi there,</p>
            <p>My name is Lowly, and I love to run, eat good, healthy food and take some pictures along the way. When I find the time, I like to write about how these things are going. That is what you are looking at now.</p>
            <p>See you on the road</p>
        </div>
        <div class="card-lot">
            <section class="blog-section running">
                <h2>Running</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt saepe, quasi, odit minima laborum modi consequatur nobis est soluta blanditiis a beatae non quos, eveniet ad magnam? Sunt, facilis, ab.</p>
                <router-link to="/running">Hit the Road</router-link>
            </section>
            <section class="blog-section banting">
                <h2>Banting</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deserunt voluptate perferendis quia modi assumenda molestiae ratione consectetur facilis praesentium dolore dolorem, minima officia, totam voluptatem sint, adipisci earum distinctio?</p>
                <router-link to="/banting">Let's bant, bitches</router-link>
            </section>
            <section class="blog-section photography">
                <h2>Photography</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, voluptatibus. Repellat odio maxime, tenetur ad quidem dolorum, quod vitae, id inventore totam earum laudantium minus nobis. Itaque eum, quod nulla.</p>
                <router-link to="/photography">See me snaps</router-link>
            </section>
        </div>
        
    </section>
</template>

<script>
    export default {
        name: 'homepage',

        data() {
            return {}
        }
    }
</script>

<style scoped>

.hero {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(/static/runhappy.png);
    background-size: cover;
    background-position-y: 100%; 
}

.hero .page-header {
    font-size: 90px;
    color: #333;
    margin: 0;
}

.hero .subtitle {
    font-size: 1.5em;
    margin: 0;
    color: #fd5e53;
}

.about {
    text-align: center;
    max-width: 700px;
    width: 95%;
    margin: 2em auto;
}

.card-lot {
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    justify-content: space-around;

}

.blog-section {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    padding: 10px;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.blog-section a {
    display: inline-block;
    width: 10em;
    color: #fd5e53;
    border: 2px solid;
    border-radius: 8px;
    padding: 4px;
    text-decoration: none;
}

.blog-section a:hover {
    color: #333;
    background: #fd5e53;
    border-color: #fd5e53;
}

@media (max-width: 500px) {
    .hero {
        height: 60vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .hero .page-header {
        font-size: 48px;
    }

    .blog-section {
        max-width: 95%;
        margin: auto;
    }

    .blog-section a {
        margin-top: 30px;
    }

    .card-lot {
        flex-direction: column;
    }
}

</style>