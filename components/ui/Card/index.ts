export { Card } from './Card'

export interface Welcome {
  id: string;
  imageUri: string;
  textData: TextData;
  metadata: Metadata;
  comments: Comment[];
}

export interface Comment {
  text: string;
  author: string;
  profilePic: string;
  likes: number;
}

export interface Metadata {
  priority: number;
  publishDate: Date;
}

export interface TextData {
  title: string;
  subTitle: string;
  body: string;
  author: Author;
}

export interface Author {
  first: string;
  last: string;
}
