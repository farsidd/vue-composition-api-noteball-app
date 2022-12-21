<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
            </div>
            <div class="has-text-right">
                <small>{{characterLength}}</small>
            </div>
        </div>
        <footer class="card-footer">
            <router-link :to="{name: 'edit-notes', params: {id: note.id}}" class="card-footer-item">Edit</router-link>
            <!-- <a href="#" @click.prevent="notesStore.deleteNote(note.id)" class="card-footer-item">Delete</a> -->
            <a href="#" @click.prevent="modal.deleteModal = true" class="card-footer-item">Delete</a>
        </footer>
        <ModalDeleteNoteVue v-model="modal.deleteModal" :noteId="note.id" v-if="modal.deleteModal" />
    </div>
</template>

<script setup>
import {computed,reactive} from 'vue';
import {useNotesStore} from '@/stores/storeNotes';
import ModalDeleteNoteVue from './ModalDeleteNote.vue';
const notesStore = useNotesStore()
const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})
const characterLength = computed( () => {
    let length = props.note.content.length
    let description = length > 1 ? 'characters' : 'character'
    return `${length} - ${description}`
})
//modal related code
const modal = reactive({
    deleteModal: false
})
</script>