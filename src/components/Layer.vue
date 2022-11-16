<template>
  <div class="absolute text-white">
    <div class="relative flex flex-col justify-around w-screen h-full p-8">
      <transition name="questionFade">
        <div v-if="question" class="text-4xl font-black">
          {{props.qa_obj?.question}}
        </div>
      </transition>
      <transition name="answerFade">
        <div v-if="answer" class="text-2xl italic p-4 font-thin text-right">
          {{props.qa_obj?.answer}}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue'
import { ref } from 'vue'

const props = defineProps(['milliseconds', 'qa_obj'])
const question = ref(false)
const answer = ref(false)

watchEffect(() => {
  console.log('counter layer', props.milliseconds)
  switch (props.milliseconds) {
    case (1): {
      question.value = true
      return
    }
    case (3): {
      answer.value = true
      return
    }
    case (7): {
      question.value = false
      return
    }
    case (8): {
      answer.value = false
      return
    }
  }
})
</script>