<script lang="ts" setup>
import { provide, reactive, ReactiveEffect, Ref, ref, useCssModule } from 'vue'
import MyButton from './MyButton.vue'
import MyButton1 from './MyButton1'
import MyButton2 from './MyButton2'
import Component from './Component.vue'

interface Main {
  username?: string
  password?: string
}

interface Book extends Main {
  name: string
  age: number
}

// props接收
const props = defineProps({
  name: String
})
let obj: Book = reactive({ name: 'zs', age: 20 })
obj = { name: 'ls', age: 200 }
const count: Ref<number> = ref(0)
function handleClick() {
  count.value++
}
console.log('props: ', props)

// provide
provide('username', 'Erak')

function handleClick2(e: KeyboardEvent) {
  console.log(11111, (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div :class="mystyle.red">{{ count }}111</div>
  <button @click="handleClick">button</button>
  <!-- <MyButton name="count" /> -->
  <MyButton1 name="zs" :age="20" @keyup.enter="handleClick2" />
  <!-- <MyButton2 name="zs" :age="20" /> -->
  <!-- <Component /> -->
  <!-- <el-button>按钮</el-button> -->
</template>

<style module="mystyle">
.red {
  color: red;
}
</style>
