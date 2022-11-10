<template>
  <div class="relative d-block font-sans">
    <div class="w-full h-screen px-1 py-1 bg-black">
      <!-- <span class="text-4xl animate__animated animate__fadeInDown animate__delay-1s animate__slower">
        HOLA
      </span>
      <span class="text-4xl animate__animated animate__fadeOutDown animate__delay-2s animate__slower">
        CHAO
      </span> -->
      <app-first-layer
        class="absolute opacity-40 blur-sm"
        style="z-index: 0"
        :maxCols=4
        v-if="currentData"
        :row="currentData && currentData"
      />
      <app-second-layer
        class="absolute opacity-50 blur-sm"
        style="z-index: 1"
        :maxCols=9
        v-if="currentData"
        :row="currentData && currentData"
      />
      <app-first-layer
        class="absolute opacity-10"
        style="z-index: 2"
        :maxCols=3
        v-if="currentData"
        :row="currentData && currentData"
      />
      <app-second-layer
        class="absolute opacity-20"
        style="z-index: 3"
        :maxCols=6
        v-if="currentData"
        :row="currentData && currentData"
      />
      <div class="absolute" style="z-index: 4">
        <transition name="fade">
          <div v-if="showContent">
            <app-word-cloud
              v-if="currentData"
              :row="currentData && currentData"
            />
          </div>
        </transition>
      </div>
      <!-- Control for develop pruposes -->
      <div class="absolute h-200 bg-green-200 top-52" style="z-index:9999">
        <button @click="startProgram = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          start
        </button>
        <button @click="startProgram = false"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          stop
        </button>
      </div>
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

    return { currentData, startProgram, timeMilliseconds, showContent }
  }
}
</script>