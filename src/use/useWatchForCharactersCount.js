import {watch} from 'vue'
export function useWatchForCharactersCount(value,maxChars = 100)  {
    watch(value,(newValue) => {
        if(newValue.length >= maxChars)
        {
            alert(`Your Value Exceeded. Sorry You can only type max ${maxChars} - Characters`)
            // alert('hello')
        }
    })
}