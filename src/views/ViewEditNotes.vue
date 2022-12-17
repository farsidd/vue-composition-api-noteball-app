<template>
    <div class="notes">
        <AddEditNote v-model="editNoteContent" ref="newNoteRef" placeholder="Edit Note" label="Edit Note">
            <template #buttons>
                <div class="control">
                    <button  @click="$router.push('/')" 
                        class="button is-link has-background-success" style="margin-right: 5px;">
                        Cancel
                    </button>
                    <button @click="updateNote()" :disabled="!editNoteContent"
                        class="button is-link has-background-success">
                        Update
                    </button>
                </div>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {useRoute,useRouter} from 'vue-router';
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useNotesStore } from '@/stores/storeNotes';

const route = useRoute()
const router = useRouter()
const notesStore = useNotesStore()

const editNoteContent = ref('')
editNoteContent.value = notesStore.editNote(route.params.id)
const updateNote = () =>  {
    notesStore.updateNote(route.params.id, editNoteContent)
    router.push({name: 'notes'})
}
</script>