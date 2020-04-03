<template>
    <div class="row board">
        <draggable class="list-group" group="columns">
            <Column v-for="(elem) in cols" 
                :key="elem.id"
                :elem="elem"
                class="col column list-group-item">
            </Column>
        </draggable>
        <AddingColumn></AddingColumn>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import Column from './Column'
import AddingColumn from './AddingColumn'

export default {
    name: "Columns",
    components: {
        draggable,
        Column,
        AddingColumn
    },    
    computed: {
        cols() {
            return this.$store.getters.COLUMNS
        }
    },
}
</script>

<style>
body {
    background: #DADADA;
}
.board {
    width: 1260px;
    margin: 20px;
    flex-direction: row;
}
.column {
    width: 300px;
    background: #EFEFF0;
    padding: 5px 10px 15px;
    padding-top: 5px;
    padding-bottom: 15px;
    box-shadow: 0 0 10px rgba(1, 8, 65, 0.5);
    border-radius: 5px;
    margin: 5px;
}
</style>

<style scoped>
.list-group {
    flex-direction: row;
}
</style>