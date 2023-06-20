<template>
    <div class="app-searchbar">
        <select name="card-archetype" id="card-archetype" @change="$emit('eventArchetypeChange', $event.target.value)" v-if="(nameToSearch == 0)">
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
        @include flex(row, flex-end, center, wrap);
        width: 80%;
        margin: 0 auto;
        padding: 1rem;

        select {
            padding: .5rem 1rem;
            font-size: 1.2rem;
            background-color: white;
            border-radius: 10px;
            border: none;
            text-align: center;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        }

        div.card-name-search {
            input {
                border-radius: 10px;
                margin: 0 1rem;
            }

            button {
                border-radius: 20px;
            }

            input,
            button {
                padding: .5rem 1rem;
                font-size: 1.2rem;
                border: none;
                background-color: white;
                box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
            }
        }
    }
</style>