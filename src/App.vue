<template>
  <div class="relative d-block font-sans">
    <div class="w-full h-screen px-1 py-1 bg-black text-white">
      <!-- <span class="text-4xl animate__animated animate__fadeInDown animate__delay-1s animate__slower">
        HOLA
      </span>
      <span class="text-4xl animate__animated animate__fadeOutDown animate__delay-2s animate__slower">
        CHAO
      </span> -->
      <app-question
        class="top-content"
        :question="currentData && currentData.question"
        :milliseconds="timeMilliseconds"
      />
      <app-answer
        class="bottom-content"
        :data="currentData && currentData"
      />
      <!-- Control for develop pruposes -->
      <button
        @click="startProgram = true"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        start
      </button>
      <button
        @click="startProgram = false"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        stop
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, watchEffect, ref } from 'vue'
import animateCSS from './composables/animateCSS.js'
import Question from './components/Question.vue'
import Answer from './components/Answer.vue'
export default {
  components: {
    'app-question': Question,
    'app-answer': Answer
  },
  setup () {
    const currentData = ref({})
    const startProgram = ref(false)
    let interval = () => {}
    let startTime = null
    const timeMilliseconds = ref(0)
    const timeXSecond = 11
    const totalDurationAnimation = 10 // 4 seconds really
    let currentTimeAnimation = ref(0)
    let nextFrame = ref(0)
    const privateData = reactive([
      { id: 0,
        question:'pregunta 1',
        answer: 'Los koalas son animales herbívoros que tienen una dieta poco variada. Se alimentan de hojas de eucalipto.',
        nickname: 'anonimo 1',
        age: '23 años'
      },
      {
        id: 1,
        question:'pregunta 2',
        answer: 'Los koalas son animales herbívoros que tienen una dieta poco variada. Se alimentan de hojas de eucalipto.',
        nickname: 'anonimo 2',
        age: '23 años'
      },
      { id: 2,question:'Pregunta 3', answer: 'Respuesta 3', nickname: 'anonimo 3', age: '23 años' },
      { id: 3,question:'Pregunta 4', answer: 'Respuesta 4', nickname: 'anonimo 4', age: '23 años' },
      { id: 4,question:'Pregunta 5', answer: 'Respuesta 5', nickname: 'anonimo 5', age: '23 años' },
      { id: 5,question:'Pregunta 6', answer: 'Respuesta 6', nickname: 'anonimo 6', age: '23 años' },
      { id: 6,question:'Pregunta 7', answer: 'Respuesta 7', nickname: 'anonimo 7', age: '23 años' },
      { id: 7,question:'Pregunta 8', answer: 'Respuesta 8', nickname: 'anonimo 8', age: '23 años' },
      { id: 8,question:'Pregunta 9', answer: 'Respuesta 9', nickname: 'anonimo 9', age: '23 años' },
      { id: 9,question:'Pregunta 10', answer: 'Respuesta 1', nickname: 'anonimo 1', age: '23 años' },
      { id: 10,question:'Pregunta 11', answer: 'Respuesta 2', nickname: 'anonimo 2', age: '23 años' },
      { id: 11,question:'Pregunta 12', answer: 'Respuesta 3', nickname: 'anonimo 3', age: '23 años' },
      { id: 12,question:'Pregunta 13', answer: 'Respuesta 4', nickname: 'anonimo 4', age: '23 años' },
      { id: 13,question:'Pregunta 14', answer: 'Respuesta 5', nickname: 'anonimo 5', age: '23 años' },
      { id: 14,question:'Pregunta 15', answer: 'Respuesta 6', nickname: 'anonimo 6', age: '23 años' },
      { id: 15,question:'Pregunta 16', answer: 'Respuesta 7', nickname: 'anonimo 7', age: '23 años' },
      { id: 16,question:'Pregunta 17', answer: 'Respuesta 8', nickname: 'anonimo 8', age: '23 años' },
      { id: 17,question:'Pregunta 18', answer: 'Respuesta 9', nickname: 'anonimo 9', age: '23 años' },
      { id: 18,question:'Pregunta 19', answer: 'Respuesta 1', nickname: 'anonimo 1', age: '23 años' },
      { id: 19,question:'Pregunta 20', answer: 'Respuesta 2', nickname: 'anonimo 2', age: '23 años' },
      { id: 20,question:'Pregunta 21', answer: 'Respuesta 3', nickname: 'anonimo 3', age: '23 años' },
      { id: 21,question:'Pregunta 22', answer: 'Respuesta 4', nickname: 'anonimo 4', age: '23 años' },
      { id: 22,question:'Pregunta 23', answer: 'Respuesta 5', nickname: 'anonimo 5', age: '23 años' },
      { id: 23,question:'Pregunta 24', answer: 'Respuesta 6', nickname: 'anonimo 6', age: '23 años' },
      { id: 24,question:'Pregunta 25', answer: 'Respuesta 7', nickname: 'anonimo 7', age: '23 años' },
      { id: 25,question:'Pregunta 26', answer: 'Respuesta 8', nickname: 'anonimo 8', age: '23 años' },
      { id: 26,question:'Pregunta 27', answer: 'Respuesta 9', nickname: 'anonimo 9', age: '23 años' },
    ])

    const start = () => {
      startTime = Date.now()
      interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime
        const milliseconds = elapsedTime / 100
        updateDisplay(milliseconds)
      }, 100)
    }
    const stop = () => {
      clearInterval(interval)
    }
    const updateDisplay = (millis) => {
      let milliseconds = parseInt(millis)
      timeMilliseconds.value = milliseconds
      const spendAsecond = milliseconds % timeXSecond
      // console.log('spendAsecond', spendAsecond)
      // console.log('milliseconds', milliseconds)
      if (spendAsecond === 0) {
        currentTimeAnimation.value = (currentTimeAnimation.value + 1) % totalDurationAnimation
      }
    }

    const addFadeIn = (classTop) => {
      console.log('run fadeIn')
      // const question = document.querySelector(classTop)
      // question.style.animationFillMode = 'forwards'
      // question.classList.add('opacity-1')
      // console.log(`start fadeIN animation`)
      animateCSS(classTop, 'fadeIn')
      animateCSS(classTop, 'slower')
      animateCSS(classTop, 'delay-1s')
      // question.style.setProperty('--animate-duration', '3s')
        
      // question.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s', 'animate__slower')
      // detect when animation ends
      // element.addEventListener('animationend', () => {
      //   console.log('element finsh animation')
      // })
    }

    const addFadeOut = (classTop) => {
      console.log('run fadeOut')
      // const question = document.querySelector(classTop)
      // question.style.animationFillMode = 'forwards'
      // question.classList.add('opacity-0')
      // console.log(`start fadeOut animation`)
      // animateCSS(classTop, 'fadeOut')
      // animateCSS(classTop, 'slower')
      // animateCSS(classTop, 'delay-1s')
      // question.style.setProperty('--animate-duration', '3s')
    }

    watchEffect(() => {
      if (startProgram.value) {
        start()
      } else {
        stop()
      }
    })

    watchEffect(() => {
      const classTop = '.top-content'
      if (currentTimeAnimation.value) {
        console.log('currentTimeAnimation', currentTimeAnimation.value)
        if (currentTimeAnimation.value === 1) {
          addFadeIn(classTop)
          nextFrame.value = nextFrame.value + 1
        }
        else if (currentTimeAnimation.value === 9) {
          addFadeOut(classTop)
        } 
      }
    })

    watchEffect(() => {
      if (nextFrame.value) {
        const currentFrameData = nextFrame.value % privateData.length
        // console.log('CURRENT ROW', currentFrameData)
        // console.log('TOTAL ROW DATA', privateData.length)
        currentData.value = privateData[currentFrameData]
      }
    })

    return { currentData, startProgram, timeMilliseconds}
  }
}
</script>