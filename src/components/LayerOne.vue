<template>
  <div
    :class="`${posXText} ${posYText}`"
    class="absolute text-white text-center"
  >
    <div
      class="relative block w-[32rem]"
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
  'posx',
  'posy'
])
const posX = [ 'left-[20%]','left-[40%]','left-[60%]','left-[80%]']
const posY = [ 'bottom-[20%]','bottom-[40%]','bottom-[60%]','bottom-[70%]']

watchEffect(() => {
  switch (props.milliseconds) {
    case (props.generate): {
      // generate()
      return
    }
  }
})

const posXText = posX[props.posx]
const posYText = posY[props.posy]
</script>