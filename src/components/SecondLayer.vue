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
import { reactive, ref } from 'vue'
export default {
  props: ['maxCols', 'row'],
  setup (props) {
    const dummy = reactive({
      id: 1,
      question:'Qué es el cambio climático y cómo nos afecta',
      answer: 'El estudio del clima es un campo de investigación complejo y en rápida evolución, debido a la gran cantidad de factores que intervienen. El clima de la Tierra nunca ha sido estático. Como consecuencia de alteraciones en el balance energético, está sometido a variaciones en todas las escalas temporales, desde decenios a miles y millones de años. Entre las variaciones climáticas más destacables que se han producido a lo largo de la historia de la Tierra, figura el ciclo de unos 100.000 años, de períodos glaciares, seguido de períodos interglaciares.',
      nickname: 'Andrea',
      age: '23'
    })
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
        answerByWords = [...answerByWords, dummy.nickname, dummy.age, 'años']
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