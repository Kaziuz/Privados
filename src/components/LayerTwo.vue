<template>
  <div class="absolute text-white">
    <div
      :class="`${getReverse} ${getJustify}`"
      class="relative flex w-screen h-screen pt-64 px-8"
    >
      <div class="block text-4xl font-black" :class="getPosX">
        {{ props.qa_obj?.PREGUNTA }}
      </div>
      <div class="ml-8 block text-2xl italic p-4 font-thin" :class="posXText[generatePosX]">
        {{ props.qa_obj?.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import generateRandomNumber from './../composables/generateRandomNumber'
import { watchEffect } from 'vue'
import { ref } from 'vue'

const props = defineProps(['milliseconds', 'qa_obj'])
const posXText = ['text-left']
const posY = ['flex-col', 'flex-col-reverse']
const justify = [
  'justify-around',
  'justify-center',
  'justify-start',
  'justify-end'
]
const question = ref(false)
const answer = ref(false)
const generatePosX = ref(0)
const generatePosY = ref(0)
const generateJustify = ref(0)
const getPosX = ref('')
const getReverse = ref('')
const getJustify = ref('')

const generate = () => {
  generatePosX.value = generateRandomNumber(0, 2)
  generatePosY.value = generateRandomNumber(0, 1) 
  generateJustify.value = generateRandomNumber(0,3)
}

watchEffect(() => {
  switch (props.milliseconds) {
    case (2): {
      generate()
      return
    }
    case (3): {
      answer.value = true
      return
    }
    case (5): {
      question.value = true
      return
    }
    case (30): {
      question.value = false
      answer.value = false
      return
    }
  }
})

watchEffect(() => {
  getPosX.value = posXText[generatePosX.value]
  getReverse.value = posY[generatePosY.value]
  getJustify.value = justify[generateJustify.value]
  console.log('3', getPosX.value, getReverse.value, getJustify.value)
})
</script>