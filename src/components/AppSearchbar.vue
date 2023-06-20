<template>
    <div class="app-searchbar">
        <select name="card-archetype" id="card-archetype" @change="$emit('eventArchetypeChange', $event.target.value)" v-if="(nameToSearch == 0)">
            <option selected hidden>Choose an Archetype</option>
            <option v-for="archetype in archetypeList">{{ archetype.archetype_name }}</option>
        </select>
        <div class="card-name-search">
            <input type="text" placeholder="Insert Card Name" v-model="nameToSearch" @keyup.enter="eventNameSearch">
            <button @click="eventNameSearch">Search</button>
        </div>

    </div>
</template>
<script>
export default {
    name: 'AppSearchbar',

    props: {
        archetypeList: Array
    },

    methods: {
        eventNameSearch() {
            this.$emit('eventNameSearch', this.nameToSearch);
            if (this.nameToSearch >= 3) {
                this.nameToSearch = ''
            }
        }
    },

    data() {
        return {
            nameToSearch: ''
        }
    }
}
</script>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
    
    div.app-searchbar {
        @include flex(row, flex-end, center, wrap);
        width: 80%;
        margin: 0 auto;
        padding: 1rem;

        select {
            padding: .5rem 1rem;
            font-size: 1.2rem;
            background-image: url(../assets/img/header_background.webp);
            color: white;
            border-radius: 10px;
            border: none;
            text-align: center;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
            border: 3px solid black;

            option {
                color: black;
            }
        }

        div.card-name-search {
            input {
                border-radius: 10px;
                margin: 0 1rem;
                text-align: center;
            }

            button {
                border-radius: 20px;
            }

            input,
            button {
                background-image: url(../assets/img/header_background.webp);
                color: white;
                padding: .5rem 1rem;
                font-size: 1.2rem;
                border: none;
                border: 3px solid black;
                box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
            }
        }
    }
</style>