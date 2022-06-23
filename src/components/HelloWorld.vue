<template>
  <div>
    我是父组件
    <br />
    <button @click="onckick">按钮</button>
    <Onw ref="I" name="我是名称" :data="data" @on-click="getList"></Onw>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Onw from "./onw.vue";
const I = ref(null);
const data = reactive<number[]>([1, 2, 3, 4]);

const onckick = () => {
  data.push(1);
};
console.log(I.value);
const getList = (list: number[]): void => {
  console.log(list);
};
</script>

<style></style>
