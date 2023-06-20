<template>
    <div class="app-searchbar">
        <select name="card-archetype" id="card-archetype">
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
    }
</style>