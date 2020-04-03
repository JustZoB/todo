<template>
    <div >
        <div 
        class="list-group-item task btn btn-outline-info"
        id="show-modal" @click="showModal = true"
        > 
        {{ taskName }} 
        </div>
        <Modal 
        @clicked="onDelete" 
        :description="description"
        @change="onChange"
        v-if="showModal" 
        @close="showModal = false" 
        @keyup.esc="showModal = false">
            <h3 slot="header">{{ taskName }}</h3>
            <p v-if="showDescription" slot="description">{{ description }}</p>
        </Modal>
    </div>
</template>

<script>
import Modal from './Modal'

export default {
    components: {
        Modal,
    },
    name: "Task",
    props: ['taskName', 'columnId', 'description'],
    data () {
        return {
            showModal: false,
            showDescription: true
        }
    },
    methods: {
        onDelete: function () {
            this.$store.dispatch('deleteTask', { id: this.columnId, name: this.taskName } );
        },
        onChange: function (newDescription) {
            this.$store.dispatch('changeDescription', { id: this.columnId, name: this.taskName, description: newDescription } );
        }
    }
}
</script>

<style>
.task {
    width: 100%;
    cursor: pointer;
    padding: 8px 10px;
    text-align: left;
    border-radius: 10px;
    margin: 5px 0px;
}
</style>
