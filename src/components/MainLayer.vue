<template>
  <div class="absolute text-white">
    <div
      :class="`${getReverse} ${getJustify}`"
      class="relative flex w-screen h-screen p-8"
    >
      <transition name="questionFade">
        <div
          v-if="question"
          :class="getPosX"
          class="block text-4xl font-black"
        >
          {{ props.qa_obj?.PREGUNTA }}
        </div>
      </transition>
      <transition name="answerFade">
        <div
          :class="`${posXText[generatePosX]}`"
          v-if="answer" class="text-2xl italic p-4 font-thin"
        >
          {{ props.qa_obj?.RESPUESTA }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import generateRandomNumber from './../composables/generateRandomNumber'
import { watchEffect } from 'vue'
import { ref } from 'vue'

const props = defineProps(['milliseconds', 'qa_obj'])
const posXText = ['text-left', 'text-center', 'text-right']
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
  console.log('time', props.milliseconds)
  switch (props.milliseconds) {
    case (1): {
      generate()
      question.value = true
      return
    }
    case (4): {
      answer.value = true
      return
    }
    case (28): {
      // question.value = false
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
  const posText = posXText[generatePosX.value]
  posText ?  getPosX.value = posText : getPosX.value = posXText[2]
  const posytext = posY[generatePosY.value]
  posytext ? getReverse.value = posytext : getReverse.value = posY[1]
  const posjustify = justify[generateJustify.value]
  posjustify ? getJustify.value = posjustify : getJustify.value = justify[2]
})
</script>