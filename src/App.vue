<template>
  <div class="block w-full h-screen bg-black font-sans mt-[200px] overflow-hidden">
    <div class="container top-0 z-10">
        <!-- <button @click="startProgram = true"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          start
        </button>
        <button @click="startProgram = false"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          stop
        </button> -->
      </div>
    <div class="w-screen h-screen overflow-hidden">
      <app-main-layer
        v-if="showLayerOne"
        :qa_obj=queueData[0]
        :posx="positionsX[0]"
        :posy="positionsY[0]"
        :class="opacity[0]"
        :milliseconds="currentTimeAnimation"
        width="w-[32rem]"
        :generate=3
        :startQuestion=4
        :endQuestion=18
        :startAnswer=6
        :endAnswer=16
      />
      <app-main-layer
        v-if="showLayerOne"
        :qa_obj=queueData[1]
        :posx="positionsX[1]"
        :posy="positionsY[1]"
        :class="opacity[1]"
        :milliseconds="currentTimeAnimation"
        width="w-[32rem]"
        :generate=3
        :startQuestion=4
        :endQuestion=18
        :startAnswer=6
        :endAnswer=16
      />
      <app-main-layer
        v-if="showLayerOne"
        :qa_obj=queueData[2]
        :posx="positionsX[2]"
        :posy="positionsY[2]"
        :class="opacity[2]"
        :milliseconds="currentTimeAnimation"
        width="w-[32rem]"
        :generate=3
        :startQuestion=4
        :endQuestion=18
        :startAnswer=6
        :endAnswer=16
      />
      <app-main-layer
        v-if="showLayerOne"
        :qa_obj=queueData[3]
        :posx="positionsX[3]"
        :posy="positionsY[3]"
        :class="opacity[3]"
        :milliseconds="currentTimeAnimation"
        width="w-[32rem]"
        :generate=3
        :startQuestion=4
        :endQuestion=18
        :startAnswer=6
        :endAnswer=16
      />      
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { reactive, watchEffect, ref } from 'vue'
import dummyData from './dummyData.js'
import MainLayer from './components/MainLayer.vue'

// const data = ref(null)
// const error = ref(null)

// fetch('https://drive.google.com/uc?export=download&id=1WxkUX93tn4PjGN1BHyZc-cZbjH0T_s7K')
//   .then((res) => res.json())
//   .then((json) => (data.value = json))
//   .catch((err) => (error.value = err))

export default {
  components: {
    'app-main-layer': MainLayer,
  },
  setup() {
    const startProgram = ref(true)
    let interval = () => { }
    let startTime = null
    const timeMilliseconds = ref(0)
    const timeXSecond = 11
    const totalDurationAnimation = 21 // 21 segundos
    let currentTimeAnimation = ref(0)
    let nextFrame = ref(0)
    const privateData = reactive(dummyData)
    const showLayerOne = ref(false)
    const showLayerTwo = ref(false)
    const showLayerThree = ref(false)
    const showLayerFour = ref(false)
    const showLayerFive = ref(false)

    let positionsX = [ 'left-10p','left-30p','left-45p','left-65p']
    let positionsY = [ 'bottom-50p','bottom-60p','bottom-80p','bottom-90p']
    let opacity = [ 'opacity-40','opacity-20','opacity-10','opacity-100']

    let queueData = ref([])
    queueData.value = dummyData.slice(0,-3)

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
      // console.log('carechimba', value3)
      switch (currentTimeAnimation.value) {
        case (0): {
          showLayerFour.value = true
          return
        }
        case (1): {
          showLayerTwo.value = true
          return
        }
        case (2): {
          showLayerThree.value = true
          return
        }
        case (3): {
          showLayerOne.value = true
          return
        }
        case (4): {
          showLayerFive.value = true
          return
        }
        case (16): {
          showLayerFive.value = false
          return
        }
        case (17): {
          showLayerThree.value = false
          return
        }
        case (18): {
          showLayerTwo.value = false
          return
        }
        case (19): {
          showLayerOne.value = false
          return
        }
        case (20): {
          showLayerFour.value = false
          nextFrame.value = nextFrame.value + 1
          positionsX.value = positionsX.sort(() => Math.random() -.5 )
          positionsY.value = positionsY.sort(() => Math.random() -.5 )
          opacity.value = opacity.sort(() => Math.random() -.5)
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

    return { queueData, startProgram, currentTimeAnimation, showLayerFour, showLayerOne, showLayerTwo, showLayerThree, showLayerFive, positionsX, positionsY, opacity }
  }
}
</script>