<template>
  <div class="w-screen h-screen">
    <div
      :class="`${posXText} ${posYText}`"
      class="absolute text-white text-center"
    >
      <div
        :class="width"
        class="relative"
      >
        <div class="absolute top-[128px]">
          <transition name="questionFade">
            <div
              v-if="question"
              class="text-4xl font-black"
            >
              {{ props.qa_obj?.PREGUNTA }}
            </div>
          </transition>
          <transition name="answerFade">
            <div
              v-if="answer"
              class="text-2xl italic font-thin relative "
            >
              {{ props.qa_obj?.RESPUESTA }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue'
import { ref } from 'vue'

const props = defineProps([
  'milliseconds',
  'qa_obj',
  'generate',
  'startQuestion',
  'endQuestion',
  'startAnswer',
  'endAnswer',
  'width',
  'posx',
  'posy'
])
const posX = [ 'left-[13%]','left-[25%]','left-[50%]','left-[70%]']
const posY = [ 'bottom-[30%]','bottom-[40%]','bottom-[60%]','bottom-[70%]']


const question = ref(false)
const answer = ref(false)


watchEffect(() => {
  switch (props.milliseconds) {
    case (props.generate): {
      // generate()
      return
    }
    case (props.startQuestion): {
      question.value = true
      return
    }
    case (props.startAnswer): {
      answer.value = true
      return
    }
    case (props.endAnswer): {
      answer.value = false
      return
    }
    case (props.endQuestion): {
      question.value = false
      return
    }
  }
})
const posXText = posX[props.posx]
const posYText = posY[props.posy]
console.log('oe', posXText, posYText)
</script>