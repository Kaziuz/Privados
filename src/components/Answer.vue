<template>
  <!-- en el eje x jusitfy-start  justify-center justify-end -->
  <!-- en el eje x items-start items-center items-start items-ens-->
  <div class="w-full h-1/2 flex flex-col justify-end items-center">
    <span class="text-2xl italic">
      {{ data && data.answer ? data.answer : 'Los koalas son animales herbívoros que tienen una dieta poco variada. Se alimentan de hojas de eucalipto'}}
    </span>
    <div class="flex justify-end items-end">
      <span class="text-xl">
        {{ data && data.nickname ? data.nickname : 'apodo' }}
      </span>
      <span class="text-sm ml-2" style="line-height:24px">
        {{ data && data.age ? data.age : '19' }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  }
}
</script>