<template>
  <div class="absolute w-screen h-screen">
    <div
      class="text-white text-center w-screen h-screen">
    <div class="absolute" :class="`${posx} ${posy} ${width}`">
      <div class="relative">

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
              class="text-2xl italic font-thin relative"
            >
              {{ props.qa_obj?.RESPUESTA }}
            </div>
          </transition>
        </div>
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

</script>