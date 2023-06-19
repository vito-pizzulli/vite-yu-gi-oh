<template>
    <div class="app-cards-element">
        <h1>{{ cardElement.name }}</h1>
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