<template>
  我是子组件
  {{ name }}
  {{ data }}
  <button @click="clickTap">派发给父组件</button>
</template>

<script setup lang="ts">
import { reactive } from "vue";

// 接收父组件值
defineProps<{
  name: string;
  data: number[];
}>();

const list = reactive<number[]>([4, 5, 6]);
// 子组件暴露改父组件
defineExpose({
  list,
});
const emit = defineEmits(["on-click"]);
const clickTap = (): void => {
  emit("on-click", [1, 2, 3, 4]);
};
</script>

<style></style>
