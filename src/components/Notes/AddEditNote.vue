<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <label class="label has-text-white">{{props.label}}</label>
    <div class="field">
      <div class="control">
        <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="textAreaRef" class="textarea" :placeholder="props.placeholder"></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const props = defineProps({
  modelValue: {
    type: String,
  },
  placeholder: {
    type: String,
    default: 'Type Something...'
  },
  label: {
    type: String,
  }
})
defineEmits(['update:modelValue'])
const textAreaRef = ref(null)
const focusTextArea = () => {
  textAreaRef.value.focus()
}
defineExpose({
  focusTextArea
})
</script>
