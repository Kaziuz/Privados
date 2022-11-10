<template>
  <div
    :class="`grid-cols-${maxCols}`"
    class="w-full h-full grid overflow-hidden"
  >
    <div
      v-for="col in randomCols"
      :key="`col-num-${col}`"
    >
      <div class="text-white flex flex-wrap">
        <div
          v-for="field in showData(row)"
          :key="field"
        >
          <p
            :class="`${field.size} ${field.margin}`" class="">
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
  props: ['maxCols', 'row'],
  setup (props) {
    const fontSizes = [
      'text-very-small leading-very-small',
      'text-small leading-small',
      'text-sm',
      'text-8px leading-8px'
    ]
    const axisX = ['ml-4', 'mr-4']
    const maxcolsRef = ref(props.maxCols)
    const randomCols = generateRandomNumber(3, maxcolsRef.value)
    const showData = data => {
      if (data && data.answer) {
        let words = []
        let answerByWords = data.answer.split(' ')
        answerByWords = [...answerByWords, data.nickname, data.age, 'años']
        let transformedData = {}
        answerByWords.map((word, idx) => {
          const getSizeFont = generateRandomNumber(0, 3)
          const shuffleSizes = _.shuffle(fontSizes)
          const generateFontSizes = shuffleSizes[getSizeFont]
          const randomXaxis = generateRandomNumber(0, 1)
          const getPosX = axisX[randomXaxis]
          transformedData = {
            position: idx,
            text: word.toLowerCase().trim(),
            size: generateFontSizes,
            margin: getPosX
          }
          words.push(transformedData)
        })
        return words
      }
    }
    return { randomCols, showData }
  }
}
</script>