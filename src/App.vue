<template>
  <div class="block w-full h-screen bg-black font-sans overflow-hidden">
    <div class="container top-0 z-10">
        <!-- <button @click="startProgram = true"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          start
        </button>
        <button @click="startProgram = false"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          stop
        </button> -->
        <div v-if="debug" class="text-white text-xl">
        {{currentTimeAnimation}}
      </div>
      </div>
    <div class="w-screen h-screen overflow-hidden">
      <app-main-layer
        :debug="debug"
        v-if="showLayerOne"
        :qa_obj=queueData[0]
        :posx="positionsX[0]"
        :posy="positionsY[0]"
        :class="`opacity-100`"
        :milliseconds="currentTimeAnimation"
        width="w-[32rem]"
        :generate=3
        :startQuestion=startQuestion
        :endQuestion=endQuestion
        :startAnswer=startAnswer
        :endAnswer=endAnswer
      />
      <app-main-layer
        :debug="debug"
        v-if="showLayerTwo"
        :qa_obj=queueData[1]
        :posx="positionsX[1]"
        :posy="positionsY[1]"
        :class="`opacity-100`"
        :milliseconds="currentTimeAnimation"
        width="w-[32rem]"
        :generate=3
        :startQuestion=startQuestion+delay
        :endQuestion=endQuestion+delay
        :startAnswer=startAnswer+delay
        :endAnswer=endAnswer+delay        
      />
      <app-main-layer
        :debug="debug"
        v-if="showLayerThree"
        :qa_obj=queueData[2]
        :posx="positionsX[2]"
        :posy="positionsY[2]"
        :class="`opacity-100`"
        :milliseconds="currentTimeAnimation"
        width="w-[32rem]"
        :generate=3
        :startQuestion=startQuestion+delay*2
        :endQuestion=endQuestion+delay*2
        :startAnswer=startAnswer+delay*2
        :endAnswer=endAnswer+delay*2
      />
      <app-main-layer
        :debug="debug"
        v-if="showLayerFour"
        :qa_obj=queueData[3]
        :posx="positionsX[3]"
        :posy="positionsY[3]"
        :class="`opacity-100`"
        :milliseconds="currentTimeAnimation"
        width="w-[32rem]"
        :generate=3
        :startQuestion=startQuestion+delay*3
        :endQuestion=endQuestion+delay*3
        :startAnswer=startAnswer+delay*3
        :endAnswer=endAnswer+delay*3
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
    const debug = false
    const startProgram = ref(true)
    let interval = () => { }
    let startTime = null

    const delay = 4
    const startQuestion=0
    const endQuestion=14 //parseInt(totalDurationAnimation/4)
    const startAnswer=startQuestion+2
    const endAnswer=endQuestion-2

    const timeMilliseconds = ref(0)
    const timeXSecond = 10
    const totalDurationAnimation = (endQuestion+delay*3) + 5 // 21 segundos
    let currentTimeAnimation = ref(0)
    let nextFrame = ref(0)
    const privateData = reactive(dummyData)
    const showLayerOne = ref(true)
    const showLayerTwo = ref(true)
    const showLayerThree = ref(true)
    const showLayerFour = ref(true)

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
      if(debug) console.log('time', currentTimeAnimation.value)
      // console.log('carechimba', value3)
      switch (currentTimeAnimation.value) {
        case (startQuestion): {
          // showLayerOne.value = true
          return
        }
        case (startQuestion+delay): {
          // showLayerTwo.value = true
          return
        }
        case (startQuestion+delay*2): {
          // showLayerThree.value = true
          return
        }
        case (startQuestion+delay*3): {
          // showLayerFour.value = true
          return
        }
        case (endQuestion): {
          // showLayerOne.value = true
          return
        }
        case (endQuestion+delay): {
          // showLayerTwo.value = false
          return
        }
        case (endQuestion+delay*2): {
          // showLayerThree.value = false
          return
        }
        case (totalDurationAnimation-1): {
          // showLayerFour.value = false
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
        debug ? console.log('CURRENT ROW', currentFrameData) :
        // console.log('TOTAL ROW DATA', privateData.length)
        queueData.value = [
          privateData[(currentFrameData) % privateData.length],
          privateData[(currentFrameData + 1) % privateData.length],
          privateData[(currentFrameData + 2) % privateData.length],
          privateData[(currentFrameData + 3) % privateData.length]
        ]
      }
    })

    return { debug, startQuestion, endQuestion, startAnswer, endAnswer, delay, queueData, startProgram, currentTimeAnimation, showLayerOne, showLayerTwo, showLayerThree, showLayerFour, positionsX, positionsY, opacity }
  }
}
</script>