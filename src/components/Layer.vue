<template>
    <div class="absolute text-white">
    <div class="relative flex flex-col justify-around w-screen h-screen p-8">
            <div class="text-4xl font-black">
              {{qa_obj?.question}}
            </div>              
            <div class="text-2xl italic p-4 font-thin text-right">
              {{qa_obj?.answer}}
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        nOpacity: Number,
        qa_obj: Object,
        milliseconds: Number
    })
</script>