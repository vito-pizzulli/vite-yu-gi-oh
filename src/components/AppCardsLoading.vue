<template>
    <div class="app-cards-loading">
        <img src="../assets/img/loading.gif" alt="Loading Image">
        <h2>Loading...</h2>
    </div>
</template>

<script>
export default {
    name: 'AppCardsLoading'
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    div.app-cards-loading {
        text-align: center;
        position: relative;

        img  {
            width: 1500px;
        }

        h2 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 5rem;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 1rem;
            border-radius: 20px;
        }
    }

</style>