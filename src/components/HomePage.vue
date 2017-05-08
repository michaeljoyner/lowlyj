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
                <p class="centered">I run at the back of the pack in tortoise gear. Unfortunately this is not enough if one wants to sport that Holy Grail of South African running medals - the Comrades medal. No, to do that one needs a dash of speed, one needs to run on that thin red line, bleeding from the eyeballs. In the meantime I’m having fun, keeping fit and dreaming big.</p>
                <router-link to="/running" class="centered">Hit The Road</router-link>
            </section>
            <section class="blog-section banting">
                <h2>Banting</h2>
                <p class="centered">I Bant and Prof Noakes is my hero. This way of eating is the only way I will be healthy enough to run a marathon in my eighties - and that is precisely what I aim to do. I also love tinkering around in my kitchen, making up new Banting concoctions, and knocking everyone’s socks off with Banting deliciousness.</p>
                <router-link to="/banting" class="centered">Let's Bant, Bitches</router-link>
            </section>
            <section class="blog-section photography">
                <h2>Photography</h2>
                <p class="centered">I am a running, Banting, wine drinking, wannabe photographer. I live in one of the most beautiful parts of the world and I like to cycle in my spare time with a camera in my backpack. Oh and I love my dogs - and everyone else's dogs too! Indulge me - I love tinkering with my pictures for hours and showing them off here.</p>
                <router-link to="/photography" class="centered">See Me Snaps</router-link>
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
    width: 12em;
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