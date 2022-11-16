<template>
  <div class="absolute text-white">
    <div class="relative flex flex-col justify-around w-screen h-full p-8">
      <div class="text-4xl font-black">
        {{ props.qa_obj?.question }}
      </div>
      <div class="text-2xl italic p-4 font-thin text-right">
        {{ props.qa_obj?.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['milliseconds', 'qa_obj'])
</script>