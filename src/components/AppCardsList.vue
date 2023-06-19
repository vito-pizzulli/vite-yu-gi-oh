<template>
    <div class="app-cards-list">
        <h1>I'm AppCardsList</h1>
        <AppCardsElement />
    </div>
</template>

<script>
import AppCardsElement from './AppCardsElement.vue';
export default {
    name: 'AppCardsList',
    
    components: {
        AppCardsElement
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/general' as *;
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    div.app-cards-list {
        background-color: yellow;
        padding: 1rem;
    }
</style>