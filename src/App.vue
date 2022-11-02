<template>
  <div class="relative d-block font-sans">
    <div class="w-full h-screen absolute px-1 py-1 bg-black text-white">
      <!-- en el eje x jusitfy-start  justify-center justify-end -->
      <!-- en el eje x items-start items-center items-start items-ens-->
      <div class="w-full h-1/2 flex justify-center items-center">
        <span class="text-4xl">
          {{ currentData.question }}
        </span>
      </div>
      <div class="w-full h-1/2 flex flex-col justify-end items-center">
        <span class="text-2xl italic">
          {{ currentData.answer }}
        </span>
        <div class="flex justify-end items-end">
          <span class="text-xl">
            {{ currentData.nickname }}
          </span>
          <span class="text-sm ml-2" style="line-height:24px">{{ currentData.age }}</span>
        </div>
      </div>
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
export default {
  setup () {
    const opacity = false
    const currentData = ref({})
    const startProgram = ref(false)
    let interval = () => {}
    let frame = () => {}
    const privateData = reactive([
      { id: 0,
        question:'¿De qué se alimentan los koalas?',
        answer: 'Los koalas son animales herbívoros que tienen una dieta poco variada. Se alimentan de hojas de eucalipto.',
        nickname: 'anonimo 1',
        age: '23 años'
      },
      {
        id: 1,
        question:'¿De qué se alimentan los koalas?',
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

    // https://stackoverflow.com/questions/32307483/in-javascript-how-to-create-an-accurate-timer-with-milliseconds
    watchEffect(() => {
      if (startProgram.value) {
        const startTime = Date.now()
        interval = () => {
          frame = setInterval(() => {
            const elapsedTime = Date.now() - startTime
            const secondsfloat = (elapsedTime / 1000).toFixed(3)
            const seconds = (elapsedTime / 1000).toFixed(0) % privateData.length
            console.log('seconds float', secondsfloat)
            currentData.value = privateData[seconds]
          }, 100)
        }
        interval()
      } else {
        clearInterval(frame)
      }
    })

    return { opacity, currentData, startProgram }
  }
}
</script>