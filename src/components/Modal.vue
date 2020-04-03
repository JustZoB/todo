<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                    </div>

                    <div class="modal-body" @keyup.enter="changeDescription" @dblclick="showChange = true">
                        <slot v-if="!showChange" name="description" >
                            default description
                        </slot>
                        <input v-if="showChange" v-model="newDescription" type="text">
                        <button class="modal-change-description" @click="changeDescription" v-if="showChange">Change Description</button>
                    </div>

                    <button class="modal-delete" @click="deleteTask">Delete</button>
                    <button class="modal-show-change" @click="showChange = true">Change</button>
                    
                    <button class="modal-close" @click="closeModal">X</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['description'],
    data () {
        return {
            showChange: false,
            newDescription: this.description
        }
    },
    methods: {
        deleteTask: function () {
            this.$emit('clicked');
            this.closeModal;
        },
        
        changeDescription: function () {
            this.$emit('change', this.newDescription);
            this.showChange = false;
        },
        
        closeModal: function () {
            this.$emit('close');
        }
    }
}
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal-container {
    width: 800px;
    position: relative;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
.modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
    height: 600px;
}

.modal-default-button {
    float: right;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

</style>