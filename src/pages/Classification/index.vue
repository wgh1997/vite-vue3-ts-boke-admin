<script setup lang="ts">
import { ref, reactive, toRaw } from "vue";
import type { UnwrapRef } from "vue";
import * as T from "./types";

const dataSource: Array<T.ObjdataSource> = [
  {
    id: 1,
    name: "name",
    // eslint-disable-next-line camelcase
    user_id: "222",
  },
  {
    id: 1,
    name: "name",
    // eslint-disable-next-line camelcase
    user_id: "222",
  },
];

const columns: Array<T.Objcolumns> = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "分类名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "所属人",
    dataIndex: "user_id",
    key: "user_id",
  },
];
// eslint-disable-next-line prefer-const
let visible = ref<boolean>(false);

const showModal = () => {
  visible.value = true;
};

const handleOk = (e: MouseEvent) => {
  visible.value = false;
};
const formState: UnwrapRef<T.FormState> = reactive({
  name: "",
});
const onSubmit = () => {
  console.log("submit!", toRaw(formState));
};
</script>
<template>
  <div class="classification">
    <div class="classification-add">
      <a-button type="primary" size="small" @click="showModal"
        >添加分类</a-button
      >
    </div>
    <a-table size="small" :data-source="dataSource" :columns="columns" />
    <a-modal v-model:visible="visible" title="添加分类" @ok="onSubmit">
      <a-form
        :model="formState"
        :label-col="T.labelCol"
        :wrapper-col="T.wrapperCol"
      >
        <a-form-item label="名称">
          <a-input v-model:value="formState.name" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<style scoped lang="less">
.classification {
  &-add {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
}
</style>
