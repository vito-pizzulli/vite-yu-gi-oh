<template>
    <header>
        <h1>I'm AppHeader</h1>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
    @use '../styles/general' as *;
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    header {
        background-color: red;
        padding: 1rem;
    }
</style>