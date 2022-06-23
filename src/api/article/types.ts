export interface Classify {
  name?: string;
  id?: string;
}
export interface FormState {
  title: string; //标题
  classify_id: string; //分类id
  is_top: boolean; //是否置顶
  article: string; //文章
  reation_time?: string; //创建时间
  modification_time?: string; //修改时间
  like_sum?: number; //点赞数
  comment_sum?: number; //评论数
  id?: string;
}
