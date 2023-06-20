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
        @include flex(row, center, center, no-wrap);

        background-image: url(../assets/img/header_background.png);
        background-position: top;
        padding: 1rem;
        color: white;
        border-bottom: 3px solid black;

        img {
            width: 150px;
        };

        h1 {
            margin-left: 1rem;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
    }
</style>