<script setup lang="ts">
import { ref, reactive, toRaw, onMounted, Ref } from "vue";
import type { UnwrapRef } from "vue";
import * as T from "./types";
import {
  getClassify,
  postClassify,
  deleteClassify,
  putClassify,
} from "../../api/classify/index";

const dataSource: Ref<T.ObjdataSource[]> = ref([]);
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
    title: "操作",
    dataIndex: "action",
    key: "action",
  },
  // {
  //   title: "所属人",
  //   dataIndex: "user_id",
  //   key: "user_id",
  // },
];

const visible = ref<boolean>(false);
const setId = ref<string>("");

const showModal = () => {
  setId.value = "";
  formState.name = "";
  visible.value = true;
};
const formState: UnwrapRef<T.FormState> = reactive({
  name: "",
});
const onSubmit = (): void => {
  if (setId.value.length !== 0) {
    putClassify({
      name: toRaw(formState).name,
      id: setId.value,
    }).then((result: { code: number }) => {
      const { code } = result;
      if (code === 0) {
        ongetClassify();
        visible.value = false;
        setId.value = "";
      } else {
        visible.value = false;
        setId.value = "";
      }
    });
  } else {
    postClassify(toRaw(formState)).then((result: { code: number }) => {
      const { code } = result;
      if (code === 0) {
        ongetClassify();
        visible.value = false;
      }
    });
  }
};
const onDelete = (key: string): void => {
  deleteClassify({
    id: key,
  }).then((result: { code: number }) => {
    const { code } = result;
    if (code === 0) {
      ongetClassify();
    }
  });
};
const onSet = (obj: { name: string; id: string }): void => {
  setId.value = obj.id;
  visible.value = true;
  formState.name = obj.name;
};
const ongetClassify = (): void => {
  getClassify().then((result: { code: number; data: any }) => {
    const { code, data } = result;
    if (code === 0) {
      dataSource.value = data;
    }
  });
};
onMounted(() => {
  ongetClassify();
});
</script>
<template>
  <div class="classification">
    <div class="classification-add">
      <a-button type="primary" size="small" @click="showModal"
        >添加分类</a-button
      >
    </div>
    <a-table size="small" :data-source="dataSource" :columns="columns" bordered>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <span>
            <a class="ant-dropdown-link" @click="onSet(record)"> 编辑 </a>
            <a-divider type="vertical" />
            <a @click="onDelete(record.id)">删除</a>
          </span>
        </template>
      </template>
    </a-table>
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
