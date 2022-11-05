<template>
  <!-- en el eje y jusitfy-start  justify-center justify-end -->
  <!-- en el eje x items-start items-center items-start items-ens-->
  <div class="w-full h-1/2 flex flex-col justify-center items-center">
    <!-- <span class="">seconds{{ seconds }}</span> -->
    <span class="text-2xl italic text-right">
      {{ data && data.answer ? data.answer : 'Los koalas son animales herbívoros que tienen una dieta poco variada. Se alimentan de hojas de eucalipto'}}
    </span>
    <div class="block w-full">
      <div class="flex justify-end">
        <span class="text-xl">
          {{ data && data.nickname ? data.nickname : 'apodo' }}
          {{ data && data.age ? data.age : '19' }} años
        </span>
      </div>
    </div>
  </div>
</template>
 
<script setup>
// import { ref } from 'vue'
defineProps({
  data: Object,
  milliseconds: Number
})
</script>