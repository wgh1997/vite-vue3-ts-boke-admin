<script setup lang="ts">
import { ref, reactive, toRaw, onMounted, Ref } from "vue";
import type { UnwrapRef } from "vue";
import { getClassify } from "../../api/classify/index";

import {
  getGetbock,
  postGetbock,
  deleteGetbock,
  putGetbock,
} from "../../api/article/index";

import * as T from "./types";
/* eslint-disable camelcase */
const dataSource: Ref<T.ObjdataSource[]> = ref([]);
const id = ref();

const ObjData: Ref<T.ObjData[]> = ref([]);
const columns: Array<T.Objcolumns> = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "标题",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "创建时间",
    dataIndex: "creation_time",
    key: "creation_time",
  },
  {
    title: "修改时间",
    dataIndex: "modification_time",
    key: "modification_time",
  },
  {
    title: "点赞数",
    dataIndex: "like_sum",
    key: "like_sum",
  },
  {
    title: "评论数",
    dataIndex: "comment_sum",
    key: "comment_sum",
  },
  {
    title: "是否置顶",
    dataIndex: "is_top",
    key: "is_top",
  },
  {
    title: "操作",
    dataIndex: "action",
    key: "action",
  },
];
// eslint-disable-next-line prefer-const
let visible = ref<boolean>(false);
const formState: UnwrapRef<T.FormState> = reactive({
  title: "",
  classify_id: "",
  is_top: false,
  article: "",
});
const showModal = () => {
  id.value = "";
  visible.value = true;
};

const handleOk = (e: MouseEvent) => {
  visible.value = false;
};
const onSubmit = () => {
  if (id.value.length === 0) {
    postGetbock({
      ...toRaw(formState),
      creation_time: new Date().getTime(), //创建时间
      modification_time: new Date().getTime(), //修改时间
      like_sum: 0,
      comment_sum: 0,
    }).then((result: { code: number }) => {
      const { code } = result;
      if (code === 0) {
        visible.value = false;
        ongetGetbock();
      }
    });
  } else {
    putGetbock({
      ...toRaw(formState),
      id: id.value,
      modification_time: new Date().getTime(), //修改时间
    }).then((result: { code: number }) => {
      const { code } = result;
      if (code === 0) {
        visible.value = false;
        ongetGetbock();
      }
    });
  }
};
const ongetGetbock = (): void => {
  getGetbock().then((result: { code: number; data: any }) => {
    const { code, data } = result;
    if (code === 0) {
      dataSource.value = data.data;
    }
  });
};
onMounted(() => {
  getClassify().then((result: { code: number; data: any }) => {
    const { code, data } = result;
    if (code === 0) {
      ObjData.value = data;
    }
  });
  ongetGetbock();
});
const onDelete = (key: string): void => {
  deleteGetbock({ id: key }).then((result: { code: number }) => {
    const { code } = result;
    if (code === 0) {
      ongetGetbock();
    }
  });
};
const onSet = (obj: T.ObjdataSource): void => {
  formState.title = obj.title;
  formState.classify_id = obj.classify_id;
  formState.is_top = obj.is_top;
  formState.article = obj.article;
  formState.creation_time = obj.creation_time;
  formState.like_sum = obj.like_sum;
  formState.comment_sum = obj.comment_sum;
  id.value = obj.id;
  visible.value = true;
};
</script>
<template>
  <div class="article">
    <div class="article-add">
      <a-button type="primary" size="small" @click="showModal"
        >添加文章</a-button
      >
    </div>
    <a-table size="small" :data-source="dataSource" :columns="columns">
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
    <a-modal v-model:visible="visible" title="添加文章" @ok="onSubmit">
      <a-form
        :model="formState"
        :label-col="T.labelCol"
        :wrapper-col="T.wrapperCol"
        size="small"
      >
        <a-form-item label="文章名称">
          <a-input v-model:value="formState.title" />
        </a-form-item>
        <a-form-item label="是否置顶">
          <a-switch v-model:checked="formState.is_top" />
        </a-form-item>
        <a-form-item label="分类">
          <a-select
            v-model:value="formState.classify_id"
            :options="ObjData"
            :field-names="{ label: 'name', value: 'id' }"
          />
        </a-form-item>
        <a-form-item label="内容">
          <a-textarea v-model:value="formState.article" :rows="4" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<style scoped lang="less">
.article {
  &-add {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
}
</style>
