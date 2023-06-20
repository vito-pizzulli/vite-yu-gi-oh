<template>
    <div class="app-cards-element">
        <img :src="cardElement.card_images[0].image_url" :alt="cardElement.name + 'Image'">
        <h3>{{ cardElement.name }}</h3>
        <span v-if="(cardElement.archetype)">{{ cardElement.archetype }}</span>
        <span v-else>No Archetype</span>
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
        @include flex(column, start, center, no-wrap);
        background-image: url(../assets/img/backcard_texture.webp);
        background-position: center;
        border: 3px solid black;
        width: calc(100% / 5 - 2rem);
        height: 500px;
        margin: 1rem;
        text-align: center;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

        img {
            width: 100%;
        };

        h3 {
            color: white;
            text-transform: uppercase;
            margin: .5rem;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }

        span {
            display: inline-block;
            margin: .5rem;
            color: rgb(255, 219, 126);
            font-weight: 600;
            padding: .5rem;
            font-size: 1.3rem;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
    }


    /* 2K Layout (from 2560px to 3840px */
    @media screen and (min-width: 2560px) {
        div.app-cards-element {
            height: 650px;
        }
    }

    /* 4K Layout (from 3840px to higher resolutions */
    @media screen and (min-width: 3840px) {
        div.app-cards-element {
            height: 1000px;
        }
    }
</style>