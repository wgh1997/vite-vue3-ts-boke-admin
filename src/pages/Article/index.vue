<script setup lang="ts">
import { ref, reactive, toRaw } from "vue";
import type { UnwrapRef } from "vue";
import * as T from "./types";
/* eslint-disable camelcase */
const dataSource: Array<T.ObjdataSource> = [
  {
    id: 111, //id不能为空
    title: "测试", //标题
    creation_time: "创建时间",
    modification_time: "修改时间",
    like_sum: 1,
    comment_sum: 2, //评论数
    classify_id: "1",
    is_top: true,
    article: "文章内容",
    user_id: "用户id",
  },
];
const areas = [
  { label: "Beijing", value: "Beijing" },
  { label: "Shanghai", value: "Shanghai" },
];

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
    title: "用户id",
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
  title: "",
  classify_id: "",
  is_top: false,
  article: "",
});
const onSubmit = () => {
  console.log("submit!", toRaw(formState));
};
</script>
<template>
  <div class="article">
    <div class="article-add">
      <a-button type="primary" size="small" @click="showModal"
        >添加文章</a-button
      >
    </div>
    <a-table size="small" :data-source="dataSource" :columns="columns" />
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
          <a-select v-model:value="formState.classify_id" :options="areas" />
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
