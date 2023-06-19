<template>
    <header>
        <img src="../assets/img/yugioh-logo.webp" alt="Yu-Gi-Oh Logo">
        <h1>Yu-Gi-Oh API</h1>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    header {
        @include flex(row, start, center, no-wrap);
        padding: 1rem;

        img {
            width: 150px;
        };

        h1 {
            margin-left: 1rem;
        }
    }
</style>