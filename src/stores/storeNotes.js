import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {

  //state

  const notes = ref([
    {
      id: '1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
    },
    {
      id: '2',
      content: 'this is just a second test'
    }
  ])

//actions to change state

  function addNote(newNoteContent) {
    //creating random id based on time
    let currentDate = new Date().getTime(),
      id = currentDate.toString()
    let note = {
      id,
      content: newNoteContent
    }
    this.notes.unshift(note)
  }
  function deleteNote(id) {
    this.notes = this.notes.filter(note => {
      return note.id !== id
    })
  }
  function editNote(id) {
   return this.notes.filter(note => {
      return note.id == id
    })[0].content
  }
  function updateNote(id,editedContent)
  {
    let index = this.notes.findIndex(note => {return note.id === id})
    this.notes[index].content = editedContent
  }

  //getters to manupulate data in somehow and return
  
const totalNotesCount = computed(() => notes.value.length)
const totalCharactersCount = computed(() => {
  let count = 0
    notes.value.forEach(note => {
    count += note.content.length
  })
  return count
})
  return { notes, addNote, deleteNote, editNote, updateNote, totalNotesCount,totalCharactersCount }
})
