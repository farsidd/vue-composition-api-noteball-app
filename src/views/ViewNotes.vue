<template>
  <div class="notes">

    <!-- <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note" v-model="newNoteContent" ref="newNoteRef" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button @click="addNote()" :disabled="!newNoteContent" class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </div>
    </div> -->
    <AddEditNote v-model="newNoteContent">
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
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useNotesStore } from '@/stores/storeNotes';
const notesStore = useNotesStore()

const newNoteContent = ref('')
const newNoteRef = ref(null)
const addNote = () => {
  notesStore.addNote(newNoteContent.value)
  newNoteContent.value = ''
  newNoteRef.value.focus()
}
</script>