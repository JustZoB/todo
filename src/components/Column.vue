<template>
    <div>
        <ColumnName :name="elem.name" :columnId="elem.id"></ColumnName>
        <draggable class="list-group" :list="elem.tasks" group="tasks">
            <Task 
            v-for="(element) in elem.tasks" 
            :key="element.name" 
            :taskName="element.name" 
            :columnId="elem.id" 
            :description="element.description"
            ></Task>
        </draggable>
        <AddingTask :columnId="elem.id"></AddingTask>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import Task from './Task'
import ColumnName from './ColumnName'
import AddingTask from './AddingTask'

export default {
    name: "Column",
    props: ["elem"],
    components: {
        draggable,
        Task,
        ColumnName,
        AddingTask
    },
}
</script>

<style>

</style>