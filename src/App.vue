<template>
  <div class="relative d-block font-sans">
    <div class="w-screen h-screen px-1 py-1 bg-black">
      <div class="container">
        <!-- Control for develop pruposes -->
        <button @click="startProgram = true"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          start
        </button>
        <button @click="startProgram = false"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          stop
        </button>
        <div>
          <transition name="layerTwo" appear>
            <div v-if="showLayerFour">
              <app-layer :qa_obj=queueData[3] style="opacity: 15%" :milliseconds="currentTimeAnimation" />
            </div>
          </transition>
          <transition name="answerFade" appear>
            <div v-if="showLayerThree">
              <app-layer :qa_obj=queueData[2] style="opacity: 20%" :milliseconds="currentTimeAnimation" />
            </div>
          </transition>
          <transition name="layerTwo" appear>
            <div v-if="showLayerTwo">
              <app-layer :qa_obj=queueData[1] style="opacity: 30%" :milliseconds="currentTimeAnimation" />
            </div>
          </transition>
            
          <app-main-layer v-if="showLayerOne" :qa_obj=queueData[0] style="opacity: 100%"
              :milliseconds="currentTimeAnimation" />
          
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
import MainLayer from './components/MainLayer.vue'
export default {
  components: {
    'app-main-layer': MainLayer,
    'app-layer': Layer
  },
  setup() {
    const currentData = ref({})
    const startProgram = ref(false)
    let interval = () => { }
    let startTime = null
    const timeMilliseconds = ref(0)
    const timeXSecond = 11
    const totalDurationAnimation = 34 // 34 segundos
    let currentTimeAnimation = ref(0)
    let nextFrame = ref(0)
    const privateData = reactive(dummyData)
    const showLayerOne = ref(true)
    const showLayerTwo = ref(true)
    const showLayerThree = ref(true)
    const showLayerFour = ref(true)

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
      console.log('time', currentTimeAnimation.value)
      switch (currentTimeAnimation.value) {
        case (0): {
          // showLayerTwo.value = true
          // showLayerFour.value = true
          // showLayerThree.value = true
          return
        }
        case (1): {
          // showLayerThree.value = true
          return
        }
        case (2): {
          // showLayerTwo.value = true
          return
        }
        case (3): {
          // showLayerOne.value = true
          return
        }
        case (25): {
          // showLayerThree.value = false
          return
        }
        case (30): {
          // showLayerFour.value = false
          nextFrame.value = nextFrame.value + 1
          return
        }
        case (32): {
          // showLayerOne.value = false
          return
        }
        case (33): {
          // showLayerTwo.value = false
          // nextFrame.value = nextFrame.value + 1
          return
        }
        case (34): {
          //nextFrame.value = nextFrame.value + 1
          return
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

    return { queueData, startProgram, currentTimeAnimation, showLayerFour, showLayerOne, showLayerTwo, showLayerThree }
  }
}
</script>