<template>
    <div class="app-cards-element">
        <h1>I'm AppCardsElement</h1>
    </div>
</template>

<script>
export default {
    name: 'AppCardsElement'
}
</script>

<style lang="scss" scoped>
    @use '../styles/general' as *;
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    div.app-cards-element {
        background-color: orange;
        padding: 1rem;
    }
</style>