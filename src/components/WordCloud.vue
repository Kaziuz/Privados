<template>
  <div
    style="border: 1px solid red"
    :class="positionViz ? positionViz: ''"
  >
    <div
      class="w-full text-white"
      v-if="row && row.answer"
    >
      <div
        class="inline-flex"
        v-for="data in showProcessingAnswer(row)"
        :key="data.position"
      >
        <div class="inline flex-col" :class="positionWords">
          <span :class="data.size" class="mx-1 italic">
            {{ data.text }}
          </span>
        </div>
        <div v-if="data.question" :class="data.size">
          {{ data.question }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { computed } from 'vue'
import generateRandomNumber from '../composables/generateRandomNumber'
export default {
  props: {
    row: Object
  },
  setup () {
    const positionsYaxis = ['justify-start', 'justify-center', 'justify-end']
    const positionsTexts = ['text-left','text-center','text-right']
    const fontSizes = [
      'text-xs',
      'text-sm',
      'text-base',
      'text-lg',
      'text-xl',
      'text-2xl',
      'text-3xl',
      'text-4xl',
    ]
    const randomNumber = generateRandomNumber(0, 2)
    const positionWords = computed(() => { return positionsYaxis[randomNumber] })
    const positionViz = computed(() => { return positionsTexts[randomNumber] })

    const showProcessingAnswer = data => {
      let words = []
      let answerByWords = data.answer.split(' ')
      answerByWords = [...answerByWords, data.nickname, data.age, 'años']
      let transformedData = {}
      answerByWords.map((word, idx) => {
        const randomNumber = generateRandomNumber(0, 7)
        const shuffleSizes = _.shuffle(fontSizes)
        const generatePositions = generateRandomNumber(1, randomNumber)
        const generateFontSizes = shuffleSizes[generatePositions]
        transformedData = {
          position: idx,
          text: word.toLowerCase().trim(),
          size: generateFontSizes,
          start: 0,
          finish: 0
        }
        words.push(transformedData)
      })
      let question = {
        position: answerByWords.length + 1,
        question: data.question.toUpperCase().trim(),
        size: fontSizes[7],
        start: 0,
        end: 0
      }
      words = [...words, question]
      return words
    }
    return { positionWords, positionViz, showProcessingAnswer }
  }
}
</script>