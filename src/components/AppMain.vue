<template>
    <main>
        <AppCardsList />
    </main>
</template>

<script>
import AppCardsList from './AppCardsList.vue';
export default {
    name: 'AppMain',

    components: {
        AppCardsList
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/general' as *;
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    main {
        background-color: #d48f38;
        padding: 1rem;
    }
</style>