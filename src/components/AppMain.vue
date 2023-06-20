<template>
    <main>
        <AppSearchbar
            :archetypeList="archetypeList"
            @eventArchetypeChange="archetypeUpdate"
            @eventNameSearch="searchByName"
        />
        <AppCardsList v-if="store.cardsLoading === false" />
        <AppCardsLoading v-else />
    </main>
</template>

<script>
import AppSearchbar from './AppSearchbar.vue';
import AppCardsList from './AppCardsList.vue';
import AppCardsLoading from './AppCardsLoading.vue';
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'AppMain',

    components: {
        AppSearchbar,
        AppCardsList,
        AppCardsLoading
    },

    methods: {
        archetypeUpdate(archetype) {
            store.cardsLoading = true;
            store.noCardsFound = false;
                axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=' + archetype)
                    .then(function (response) {
                        console.log(response.data.data);
                        store.yugiohApi = response.data.data;
                        store.cardsLoading = false;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
        },
        searchByName(name) {
            if (name) {
                store.cardsLoading = true;
                axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=' + name)
                    .then(function (response) {
                        console.log(response.data.data);
                        store.yugiohApi = response.data.data;
                        store.cardsLoading = false;
                        store.noCardsFound = false;
                    })
                    .catch(function (error) {
                        console.log(error);
                        store.cardsLoading = false;
                        store.noCardsFound = true;
                    })
            }
        }
    },

    data() {
        return {
            store,
            archetypeList: []
        }
    },

    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
            .then(function (response) {
                console.log(response.data.data);
                store.yugiohApi = response.data.data;
                store.cardsLoading = false;
            })
            .catch(function (error) {
                console.log(error);
            }),

        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then(response => {
                console.log(response.data);
                this.archetypeList = [...response.data];
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