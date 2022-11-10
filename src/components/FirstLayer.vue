<template>
  <div
    :class="`grid-cols-${maxCols}`"
    class="w-full h-full grid overflow-hidden"
  >
    <div
      v-for="col in randomCols"
      :key="`col-num-${col}`"
    >
      <div class="mx-1 text-white flex flex-wrap text-justify">
        <div
          v-for="field in showData(row)"
          :key="field"
        >
          <p :class="`${field.size}`">
            {{ field.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import generateRandomNumber from '../composables/generateRandomNumber'
import { ref } from 'vue'
export default {
  props: ['row', 'maxCols'],
  setup (props) {
    const fontSizes = [
      'text-very-small leading-very-small',
      'text-small leading-small',
      'text-sm',
      'text-8px leading-8px'
    ]
    const maxcolsRef = ref(props.maxCols)
    const randomCols = generateRandomNumber(3, maxcolsRef.value + 6)
    const showData = data => {
      if (data && data.answer) {
        let words = []
        let answerByWords = data.answer.split(' ')
        answerByWords = [...answerByWords, data.nickname, data.age, 'años'].join(' ')
        const getSizeFont = generateRandomNumber(0, 3)
        const shuffleSizes = _.shuffle(fontSizes)
        const generateFontSizes = shuffleSizes[getSizeFont]
        let transformedData = {
          text: answerByWords,
          size: generateFontSizes
        }
        words.push(transformedData)
        return words
      }
    }

    return { randomCols, showData }
  }
}
</script>

/*
  Variar el numero de cols (entre 1 y 9)
  variar el tamaño de tipo y line hegiht
  variar la disposicion de texto

  dependiendo del numero de cols entonces pinto los datos

*/