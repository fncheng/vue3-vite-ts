<script lang="ts" setup>
import { reactive, ReactiveEffect, Ref, ref, useCssModule } from 'vue'
import MyButton from './MyButton.vue'
import MyButton1 from './MyButton1'
import MyButton2 from './MyButton2'
import Component from './Component.vue';

const $style = useCssModule()
console.log('$style: ', $style);

// props接收
const props = defineProps({
  name: String
})
let obj = reactive({ name: 'zs', age: 20 })
obj = { name: 'ls', age: 200 }
function handleClick() {
  obj.age = Math.random()
}
console.log('props: ', props)
</script>

<template>
  <div>{{ obj }}</div>
  <button @click="handleClick">button</button>
  <MyButton name="ls" />
  <MyButton1 />
  <MyButton2 name="zs" :age="20" />
  <Component />
</template>

<style module>
.red {
  color: red;
}
</style>