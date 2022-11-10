<template>
  <div class="relative d-block font-sans">
    <div class="w-full h-screen bg-black">
      <!-- <span class="text-4xl animate__animated animate__fadeInDown animate__delay-1s animate__slower">
        HOLA
      </span>
      <span class="text-4xl animate__animated animate__fadeOutDown animate__delay-2s animate__slower">
        CHAO
      </span> -->
      <app-first-layer
        class="absolute opacity-40 blur-sm"
        style="z-index: 1"
        :maxCols=4
        v-if="topData"
        :row="topData && topData"
      />
      <app-second-layer
        class="absolute opacity-50 blur-sm"
        style="z-index: 2"
        :maxCols=9
        v-if="bottomData"
        :row="bottomData && bottomData"
      />
      <app-first-layer
        class="absolute opacity-10"
        style="z-index: 3"
        :maxCols=3
        v-if="topData"
        :row="topData && topData"
      />
      <app-second-layer
        class="absolute opacity-20"
        style="z-index: 4"
        :maxCols=6
        v-if="bottomData"
        :row="bottomData && bottomData"
      />
      <div class="absolute w-full- h-screen" style="z-index: 5">
        <transition name="fadeGroupTop">
          <div v-if="showGroupTop" class="fixed top-1">
            <app-word-cloud
              v-if="topData"
              :row="topData && topData"
            />
          </div>
        </transition>
        <transition name="fadeGroupBottom">
          <div v-if="showGroupBottom" class="fixed bottom-1">
            <app-word-cloud
              v-if="bottomData"
              :row="bottomData && bottomData"
            />
          </div>
        </transition>
      </div>
      <!-- Control for develop pruposes -->
      <div class="absolute h-200 bg-green-200" style="z-index:9999">
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
    const topData = ref({})
    const bottomData = ref({})
    const showGroupTop = ref(false)
    const showGroupBottom = ref(false)

    const startProgram = ref(false)
    let interval = () => { }
    let startTime = null
    const timeMilliseconds = ref(0)
    const timeXSecond = 11
    const totalDurationAnimation = 20 // 40 segundos
    let currentTimeAnimation = ref(0)
    let nextFrame = ref(0)
    const privateData = reactive(dummyData)

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

        if (currentTimeAnimation.value === 2) {
          showGroupTop.value = true
          // addFadeIn(classTop)
          nextFrame.value = nextFrame.value + 1
        }

        if (currentTimeAnimation.value === 5) {
          showGroupBottom.value = true
        }

        if (currentTimeAnimation.value === 15) {
          showGroupTop.value = false
        }

        if (currentTimeAnimation.value === 18) {
          showGroupBottom.value = false
        }
      }
    })

    watchEffect(() => {
      if (nextFrame.value) {
        const currentFrameData = nextFrame.value % privateData.length
        // console.log('CURRENT ROW', currentFrameData)
        // console.log('TOTAL ROW DATA', privateData.length)
        topData.value = privateData[currentFrameData]
        bottomData.value = privateData[currentFrameData+1]
      }
    })

    return { topData, bottomData, startProgram, timeMilliseconds, showGroupTop, showGroupBottom }
  }
}
</script>