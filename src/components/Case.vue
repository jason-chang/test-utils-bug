
<template>
  <div>
    <h1>Case</h1>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'Case' })

let originalProp1 = 'originalProp1'
let originalProp2 = 'originalProp2'

let originalFn1 = () => {
  console.log('originalFn1')
}

let originalFn2 = () => {
  console.log('originalFn2')
}

defineExpose({
  propLocal: 'propLocal',

  originalProp1,
  originalProp2Alias: originalProp2,

  originalFn1,
  originalFn2Alias: originalFn2,
})
</script>
