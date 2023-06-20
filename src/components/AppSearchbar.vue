<template>
    <div class="app-searchbar">
        <select name="card-archetype" id="card-archetype" @change="$emit('eventArchetypeChange', $event.target.value)">
            <option selected hidden>Choose an Archetype</option>
            <option v-for="archetype in archetypeList">{{ archetype.archetype_name }}</option>
        </select>
        <div class="card-name-search">
            <input type="text" placeholder="Insert card name" v-model="nameToSearch" @keyup.enter="$emit('eventNameSearch', nameToSearch)">
            <button @click="$emit('eventNameSearch', nameToSearch)">Search</button>
        </div>

    </div>
</template>
<script>
export default {
    name: 'AppSearchbar',

    props: {
        archetypeList: Array
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
        @include flex(row, space-between, center, wrap);
        width: 80%;
        margin: 0 auto;
        padding: 1rem;

        select {
            padding: .5rem 1rem;
            font-size: 1rem;
            background-color: white;
            border-radius: 10px;
            border: none;
            text-align: center;
        }

        div.card-name-search {
            input {
                padding: .5rem 1rem;
                font-size: 1rem;
                border-radius: 10px;
                border: none;
                margin: 0 1rem;
            }

            button {
                padding: .5rem 1rem;
                border-radius: 20px;
                border: none;
                background-color: white;
                font-size: 1rem;
            }
        }
    }
</style>