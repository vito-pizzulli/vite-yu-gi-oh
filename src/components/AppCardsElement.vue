<template>
    <div class="app-cards-element">
        <img :src="cardElement.card_images[0].image_url" :alt="cardElement.name + 'Image'">
        <h3>{{ cardElement.name }}</h3>
        <span>{{ cardElement.race }}</span>
    </div>
</template>

<script>
export default {
    name: 'AppCardsElement',

    props: {
        cardElement: Object
    },
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    div.app-cards-element {
        background-color: #d48f38;
        width: calc(100% / 5 - 1rem);
        height: 500px;
        margin: 1rem 0;
        text-align: center;
        border-radius: 0 0 20px 20px;

        img {
            width: 100%;
        };

        h3 {
            color: white;
            text-transform: uppercase;
            margin: .5rem;
        }

        span {
            display: inline-block;
            margin: .5rem;
        }
    }
</style>