<template>
  <div class="relative d-block font-sans">
    <div class="w-full h-screen px-1 py-1 bg-black">
    <div class="container">
      <div class="absolute top-20 text-white px-10" style="opacity: 30%; transform: translate3d(10px, 20px, 0);">
          <div class="text-4xl font-black">
            {{dummyData[0].question}}
          </div>
          <div class="text-2xl italic p-4 font-thin w-3/4 text-right">
            {{dummyData[0].answer}}
          </div>
      </div>
      <div class="absolute top-20 text-white px-10" style="opacity: 20%; transform: translate3d(-10px, 5px, 0);">
          <div class="text-4xl font-black">
            {{dummyData[1].question}}
          </div>
          <div class="text-2xl italic p-4 font-thin w-3/4 text-right">
            {{dummyData[1].answer}}
          </div>
      </div>
      <div class="absolute top-20 text-white px-10" style="opacity: 10%; transform: translate3d(3px, 70px, 0);">
          <div class="text-4xl font-black">
            {{dummyData[2].question}}
          </div>
          <div class="text-2xl italic p-4 font-thin w-3/4 text-right">
            {{dummyData[2].answer}}
          </div>
      </div>
      <div class="absolute top-20 text-white px-10" style="opacity: 100%; transform: translate3d(20px, 40px, 0);">
          <div class="text-4xl font-black">
            {{dummyData[3].question}}
          </div>
          <div class="text-2xl italic p-4 font-thin w-3/4 text-right">
            {{dummyData[3].answer}}
          </div>
      </div>
    </div>
      <!-- <span class="text-4xl animate__animated animate__fadeInDown animate__delay-1s animate__slower">
        HOLA
      </span>
      <span class="text-4xl animate__animated animate__fadeOutDown animate__delay-2s animate__slower">
        CHAO
      </span> -->
    </div>
  </div>
</template>

<script>
import { reactive, watchEffect, ref } from 'vue'
// import animateCSS from './composables/animateCSS.js'
import _ from 'lodash'
import dummyData from './dummyData.js'
import WordCloud from './components/WordCloud.vue'
import FirstLayer from './components/FirstLayer.vue'
import SecondLayer from './components/SecondLayer.vue'
export default {
  components: {
    'app-word-cloud': WordCloud,
    'app-first-layer': FirstLayer,
    'app-second-layer': SecondLayer
  },
  setup() {
    const currentData = ref({})
    const startProgram = ref(false)
    let interval = () => { }
    let startTime = null
    const timeMilliseconds = ref(0)
    const timeXSecond = 11
    const totalDurationAnimation = 5 // medio minuto
    let currentTimeAnimation = ref(0)
    let nextFrame = ref(0)
    const privateData = reactive(dummyData)
    const showContent = ref(false)

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

    watchEffect(() => {
      if (startProgram.value) {
        start()
      } else {
        stop()
      }
    })

    watchEffect(() => {
      if (currentTimeAnimation.value) {
        console.log('currentTimeAnimation', currentTimeAnimation.value)
        if (currentTimeAnimation.value === 1) {
          showContent.value = true
          // addFadeIn(classTop)
          nextFrame.value = nextFrame.value + 1
        }
        else if (currentTimeAnimation.value === 28) {
          showContent.value = false
          // addFadeOut(classTop)
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

    return { dummyData, currentData, startProgram, timeMilliseconds, showContent }
  }
}
</script>