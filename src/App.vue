<template>
  <div class="relative d-block font-sans">
    <div class="w-screen h-screen px-1 py-1 bg-black">
      <div class="container">
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
      <div>
        <Layer v-if="showLayerFour" :qa_obj=queueData[0] style="opacity: 30%" :milliseconds="currentTimeAnimation" />
        <Layer v-if="showLayerFour" :qa_obj=queueData[1] style="opacity: 20%" :milliseconds="currentTimeAnimation" />
        <Layer v-if="showLayerFour" :qa_obj=queueData[2] style="opacity: 10%" :milliseconds="currentTimeAnimation" />
        <Layer v-if="showLayerFour" :qa_obj=queueData[3] style="opacity: 100%" :milliseconds="currentTimeAnimation" />
      </div>
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
import Layer from './components/Layer.vue'
export default {
  components: {
    'app-word-cloud': WordCloud,
    'app-first-layer': FirstLayer,
    'app-second-layer': SecondLayer,
    Layer
  },
  setup() {
    const currentData = ref({})
    const startProgram = ref(false)
    let interval = () => { }
    let startTime = null
    const timeMilliseconds = ref(0)
    const timeXSecond = 11
    const totalDurationAnimation = 9 // 10 segundos
    let currentTimeAnimation = ref(0)
    let nextFrame = ref(0)
    const privateData = reactive(dummyData)
    const showLayerFour = ref(false)

    let queueData = ref([])
    queueData.value = dummyData.slice(-4)

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
      // console.log('time', currentTimeAnimation.value)
      switch (currentTimeAnimation.value) {
        case (0): {
          showLayerFour.value = true
          return
        }
        case (9): {
          showLayerFour.value = false
          nextFrame.value = nextFrame.value + 1
          return
        }
      }
    })

    watchEffect(() => {
      if (nextFrame.value) {
        const currentFrameData = nextFrame.value % privateData.length
        console.log('CURRENT ROW', currentFrameData)
        // console.log('TOTAL ROW DATA', privateData.length)
        currentData.value = privateData[currentFrameData]
        queueData.value = privateData.slice(-1*parseInt(Math.random()*4))
      }
    })

    return { queueData, startProgram, currentTimeAnimation, showLayerFour }
  }
}
</script>