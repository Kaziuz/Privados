<template>
  <!-- <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <p class="text-3xl text-gray-700 font-bold mb-5">
      Welcome!
    </p>
    <p class="text-gray-500 text-lg">
      Vue and Tailwind CSS in action
    </p>
 </div> -->
  <div class="relative d-block">
    <div class="border border-black w-full h-screen bg-red-400 absolute px-1 py-1">
      <div class="bg-blue-200 w-full h-full d-flex opacity-1">
        <pre>{{ currentData }}</pre>
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
    const time = 1000 // 5000 milisec to 5 seconds
    const currentData = ref({})
    const startProgram = ref(false)
    let stepperProgram = () => {}
    let frame = () => {}
    const privateData = reactive([
      { id: 0,question:'Pregunta 1', answer: 'Respuesta 1', nickname: 'anonimo 1', age: 19 },
      { id: 1,question:'Pregunta 2', answer: 'Respuesta 2', nickname: 'anonimo 2', age: 19 },
      { id: 2,question:'Pregunta 3', answer: 'Respuesta 3', nickname: 'anonimo 3', age: 19 },
      { id: 3,question:'Pregunta 4', answer: 'Respuesta 4', nickname: 'anonimo 4', age: 19 },
      { id: 4,question:'Pregunta 5', answer: 'Respuesta 5', nickname: 'anonimo 5', age: 19 },
      { id: 5,question:'Pregunta 6', answer: 'Respuesta 6', nickname: 'anonimo 6', age: 19 },
      { id: 6,question:'Pregunta 7', answer: 'Respuesta 7', nickname: 'anonimo 7', age: 19 },
      { id: 7,question:'Pregunta 8', answer: 'Respuesta 8', nickname: 'anonimo 8', age: 19 },
      { id: 8,question:'Pregunta 9', answer: 'Respuesta 9', nickname: 'anonimo 9', age: 19 },
      { id: 9,question:'Pregunta 10', answer: 'Respuesta 1', nickname: 'anonimo 1', age: 19 },
      { id: 10,question:'Pregunta 11', answer: 'Respuesta 2', nickname: 'anonimo 2', age: 19 },
      { id: 11,question:'Pregunta 12', answer: 'Respuesta 3', nickname: 'anonimo 3', age: 19 },
      { id: 12,question:'Pregunta 13', answer: 'Respuesta 4', nickname: 'anonimo 4', age: 19 },
      { id: 13,question:'Pregunta 14', answer: 'Respuesta 5', nickname: 'anonimo 5', age: 19 },
      { id: 14,question:'Pregunta 15', answer: 'Respuesta 6', nickname: 'anonimo 6', age: 19 },
      { id: 15,question:'Pregunta 16', answer: 'Respuesta 7', nickname: 'anonimo 7', age: 19 },
      { id: 16,question:'Pregunta 17', answer: 'Respuesta 8', nickname: 'anonimo 8', age: 19 },
      { id: 17,question:'Pregunta 18', answer: 'Respuesta 9', nickname: 'anonimo 9', age: 19 },
      { id: 18,question:'Pregunta 19', answer: 'Respuesta 1', nickname: 'anonimo 1', age: 19 },
      { id: 19,question:'Pregunta 20', answer: 'Respuesta 2', nickname: 'anonimo 2', age: 19 },
      { id: 20,question:'Pregunta 21', answer: 'Respuesta 3', nickname: 'anonimo 3', age: 19 },
      { id: 21,question:'Pregunta 22', answer: 'Respuesta 4', nickname: 'anonimo 4', age: 19 },
      { id: 22,question:'Pregunta 23', answer: 'Respuesta 5', nickname: 'anonimo 5', age: 19 },
      { id: 23,question:'Pregunta 24', answer: 'Respuesta 6', nickname: 'anonimo 6', age: 19 },
      { id: 24,question:'Pregunta 25', answer: 'Respuesta 7', nickname: 'anonimo 7', age: 19 },
      { id: 25,question:'Pregunta 26', answer: 'Respuesta 8', nickname: 'anonimo 8', age: 19 },
      { id: 26,question:'Pregunta 27', answer: 'Respuesta 9', nickname: 'anonimo 9', age: 19 },
    ])

    watchEffect(() => {
      if (startProgram.value) {
        stepperProgram = () => {
          let counter = 0
          frame = setInterval(() => {
            counter++
            if (counter < privateData.length) {
              currentData.value = privateData[counter]
            } else if (counter === parseInt(privateData.length)) {
              counter = 0
            }
          }, time) 
        }
        stepperProgram()
      } else {
        clearInterval(frame)
      }
    })

    return { opacity, currentData, startProgram }
  }
}
</script>