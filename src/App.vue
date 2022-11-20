<template>
  <div class="block w-full h-screen font-sans">
    <div class="w-screen h-screen bg-black px-8 py-8">
      <div class="container absolute z-10">
        <button @click="startProgram = true"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          start
        </button>
        <button @click="startProgram = false"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          stop
        </button>
      </div>

      <transition name="layerTwo" appear>
        <div v-if="showLayerFive">
          <app-layer-one
            :qa_obj=queueData[3]
            style="opacity: 40%"
            :milliseconds="currentTimeAnimation"
            :generate=4
            class="ml-80"
          />
        </div>
      </transition>

      <transition name="layerTwo" appear>
        <div v-if="showLayerFour">
          <app-layer-one
            :qa_obj=queueData[2]
            style="opacity: 40%"
            :milliseconds="currentTimeAnimation"
            :generate=0
            class="mr-44"
          />
        </div>
      </transition>

      <transition name="layerTwo" appear>
        <div v-if="showLayerThree">
          <app-layer-one
            :qa_obj=queueData[1]
            style="opacity: 20%"
            :milliseconds="currentTimeAnimation"
            :generate=2
            class="mr-80"
          />
        </div>
      </transition>

      <transition name="layerTwo" appear>
        <div v-if="showLayerTwo">
          <app-layer-one
            :qa_obj=queueData[3]
            style="opacity: 10%"
            :milliseconds="currentTimeAnimation"
            :generate=1
            class="ml-36"
          />
        </div>
      </transition>

      <!-- Main layer -->
      <app-main-layer
        v-if="showLayerOne"
        :qa_obj=queueData[0]
        style="opacity: 100%"
        :milliseconds="currentTimeAnimation"
        width="w-96"
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
import LayerOne from './components/LayerOne.vue'
import MainLayer from './components/MainLayer.vue'
export default {
  components: {
    'app-main-layer': MainLayer,
    'app-layer-one': LayerOne,
  },
  setup() {
    const startProgram = ref(false)
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

    return { queueData, startProgram, currentTimeAnimation, showLayerFour, showLayerOne, showLayerTwo, showLayerThree, showLayerFive }
  }
}
</script>