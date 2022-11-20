<template>
  <div
  :class="`${posYText}`"
    class="absolute text-white text-center left-1/2"
  >
    <div
      class="relative w-96"
    >
      <div class="text-4xl font-black">
        {{ props.qa_obj?.PREGUNTA }}
      </div>
      <div class="text-2xl italic font-thin">
        {{ props.qa_obj?.RESPUESTA }}
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
])
const posX = [
  'left-1/2','left-1/3','left-2/3',
]
const posY = [
  'bottom-1/2','bottom-1/3','bottom-1/4',
]
const generatePosX = ref(0)
const generatePosY = ref(0)

const generate = () => {
  generatePosX.value = Math.floor(Math.random() * 2)
  generatePosY.value = Math.floor(Math.random() * 2)
}

watchEffect(() => {
  switch (props.milliseconds) {
    case (props.generate): {
      generate()
      return
    }
  }
})

const posXText = posX[generatePosX.value]
const posYText = posY[generatePosY.value]
console.log('oe', posXText, posYText)
</script>