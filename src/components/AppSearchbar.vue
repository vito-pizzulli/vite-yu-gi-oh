<template>
    <div class="app-searchbar">
        <select name="card-archetype" id="card-archetype" @change="$emit('archetypeFilterChosen', $event.target.value)">
            <option value="All">All</option>
            <option v-for="archetype in archetypeList" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>


    </div>
</template>
<script>
export default {
    name: 'AppSearchbar',

    props: {
        archetypeList: Array
    }
}
</script>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
    
    div.app-searchbar {
        width: 80%;
        margin: 0 auto;
        padding: 1rem;

        select {
            padding: .5rem 1rem;
            font-size: 1rem;
            background-color: white;
            border-radius: 10px;
            border: none;
        }
    }
</style>