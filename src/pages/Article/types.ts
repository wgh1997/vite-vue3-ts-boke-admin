export interface Objcolumns {
  title: string;
  dataIndex: string;
  key: string;
}
export interface ObjdataSource {
  id: string | number; //id不能为空
  title: string; //标题
  creation_time: string; //创建时间
  modification_time: string; //修改时间
  like_sum: number; //点赞数
  comment_sum: number; //评论数
  classify_id: string; //分类id
  is_top: boolean; //是否置顶
  article: string; //文章
  user_id: string; //用户id
}
export interface FormState {
  title: string; //标题
  classify_id: string; //分类id
  is_top: boolean; //是否置顶
  article: string; //文章
  creation_time?: string; //创建时间
  modification_time?: string; //修改时间
  like_sum?: number; //点赞数
  comment_sum?: number; //评论数
}
export interface ObjData {
  id: string | number;
  name: string;
  // user_id: string;
}
export const labelCol = { style: { width: "80px" } };
export const wrapperCol = { span: 14 };
