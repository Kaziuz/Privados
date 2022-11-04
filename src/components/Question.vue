<template>
  <!-- en el eje x jusitfy-start  justify-center justify-end -->
  <!-- en el eje x items-start items-center items-start items-ens-->
  <div class="w-full h-1/2 flex justify-center items-center">
    <!-- <span class="text-4xl animate__animated animate__fadeInDown animate__delay-1s animate__slower"> -->
      <span class="text-4xl">
        {{ question ? question : '¿De qué se alimentan los koalas?' }}
      </span>
    </div>
</template>

<!-- <script>
export default {
  props: {
    question: String
  }
}   
</script> -->

<script setup>
defineProps({
  question: String,
  milliseconds: Number
})
</script>