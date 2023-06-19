<template>
    <div class="app-cards-element">
        <img :src="cardElement.card_images[0].image_url" :alt="cardElement.name + 'Image'">
        <span>{{ cardElement.name }}</span>
        <span>{{ cardElement.archetype }}</span>
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
        padding: 1rem;
    }
</style>