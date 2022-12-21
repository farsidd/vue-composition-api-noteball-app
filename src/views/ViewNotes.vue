<template>
  <div class="notes">
    <AddEditNote v-model="newNoteContent" ref="newNoteRef">
      <template #buttons>
        <div class="control">
          <button @click="addNote()" :disabled="!newNoteContent" class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </template>
    </AddEditNote>
    <Note v-for="note in notesStore.notes" :key="note.id" :note="note" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useWatchForCharactersCount } from '../use/useWatchForCharactersCount';
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useNotesStore } from '@/stores/storeNotes';
const notesStore = useNotesStore()

const newNoteContent = ref('')
const newNoteRef = ref(null)

const addNote = () => {
  notesStore.addNote(newNoteContent.value)
  newNoteContent.value = ''
  newNoteRef.value.focusTextArea()
}
useWatchForCharactersCount(newNoteContent, 10)
</script>