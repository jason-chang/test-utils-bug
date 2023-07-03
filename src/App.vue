<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  
  <Case ref="caseRef" />
  
  <button @click="callFn1">Call Fn 1</button>
  <button @click="callFn2Alias">Call Fn 2 Alias</button>
  <button @click="logExposeProps">Log expose props</button>
</template>

<script setup lang="ts">
import { onMounted, ref, isRef, unref, toRef, reactive } from 'vue';

import Case from './components/Case.vue';

let caseRef = ref<InstanceType<typeof Case>>();

let callFn1 = () => {
  caseRef.value?.originalFn1();
}

let callFn2Alias = () => {
  caseRef.value?.originalFn2Alias();
}

let logExposeProps = () => {
  console.log(caseRef.value?.propLocal);
  console.log(caseRef.value?.originalProp1);
  console.log(caseRef.value?.originalProp2Alias);
}

onMounted(() => { })
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
