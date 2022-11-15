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
        <Layer :qa_obj=queueData[3] style="opacity: 15%"></Layer>
        <Layer :qa_obj=queueData[2] style="opacity: 20%"></Layer>
        <Layer :qa_obj=queueData[1] style="opacity: 30%"></Layer>
        <Layer :qa_obj=queueData[0] style="opacity: 100%"></Layer>
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
import Layer from './components/Layer.vue'
export default {
  components: {
    Layer
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
        else if (currentTimeAnimation.value === 5) {
          showContent.value = false
          // addFadeOut(classTop)
        }
      }
    })

    watchEffect(() => {
      if (nextFrame.value) {
        const currentFrameData = nextFrame.value % privateData.length
        console.log('CURRENT ROW', currentFrameData)
        // console.log('TOTAL ROW DATA', privateData.length)
        queueData.value = [
          privateData[(currentFrameData) % privateData.length], 
          privateData[(currentFrameData + 1) % privateData.length], 
          privateData[(currentFrameData + 2) % privateData.length], 
          privateData[(currentFrameData + 3) % privateData.length]
        ]
      }
    })

    return { queueData, dummyData, currentData, startProgram, timeMilliseconds, showContent }
  }
}
</script>