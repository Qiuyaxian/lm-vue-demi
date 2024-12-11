<template>
  <div>
    <div class="template-component">
      Template Component. Vue version: {{ version }}
    </div>
    <div>
      <h3>{{ msg }}, {{ name }}</h3>
      <button @click="inc">
        Inc
      </button>
      <div>{{ count }} x 2 = {{ doubled }}</div>
      <button @click="dec()" v-html="decText" />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref, version, watch } from 'vue-demi';
export default defineComponent({
  props: { 
    msg: {
      type: String,
      default: 'Hello'
    }, 
    name: {
      type: String,
      default: 'my friend'
    }
  },
  setup: (props, ctx) => {
    // const emits = defineEmits(['update'])
    const count = ref(0);
    const doubled = computed(() => count.value * 2);

    function inc() {
      count.value += 1
      console.log(count, 'count')
    }
    function dec() {
      count.value -= 1
    }
    const decText = '<b>Dec</b>';
    watch(count, (newValue) => {
      console.log(newValue, 'sdsd')
    });
    return {
      version,
      count,
      doubled,
      inc,
      dec,
      decText
    }
  }
})
</script>

<style scoped>
.template-component {
  color: #2c3e50;
}
</style>