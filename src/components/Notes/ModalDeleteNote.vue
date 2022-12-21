<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div ref="modalDeleteNoteRef" class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Note</p>
                <button @click="$emit('update:modelValue', false)" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                Are you sure you want to delete note?
            </section>
            <footer class="modal-card-foot is-justify-content-flex-end">
                <button @click.prevent="deleteNote(noteId)" class="button is-danger">Delete</button>
                <button @click="$emit('update:modelValue', false)" class="button">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { useNotesStore } from '@/stores/storeNotes';
import { ref } from "vue";
const notesStore = useNotesStore()

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    noteId: {
        type: String,
        required: true
    }
})

//click anywhere to close modal
const modalDeleteNoteRef = ref(null)
const emit = defineEmits(['update:modelValue'])
onClickOutside(modalDeleteNoteRef, () => { emit('update:modelValue', false) })
//delete note
const deleteNote = (noteId) => {
    notesStore.deleteNote(noteId)
    // emit('update:modelValue', false)
}
</script>