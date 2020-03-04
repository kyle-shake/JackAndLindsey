export interface JnlPost {
  id: number;
  author: string;
  pdate: Date;
  title: string;
  content: string;
  pinned: boolean;
  imgPath: string;
}
