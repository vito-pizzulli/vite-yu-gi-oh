<template>
    <main>
        <AppCardsList />
    </main>
</template>

<script>
import AppCardsList from './AppCardsList.vue';
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'AppMain',

    components: {
        AppCardsList
    },

    data() {
        return {
            store
        }
    },

    created(){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
            .then(function (response) {
                console.log(response.data.data);
                store.yugiohApi = response.data.data
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    main {
        background-color: #d48f38;
        padding: 1rem;
    }
</style>