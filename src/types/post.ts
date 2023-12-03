export interface IPost {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  author: {
    _ref: string;
    _type: string;
  };
  content: string;
  categories: {
    _key: string;
    _ref: string;
    _type: string;
  }[];
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  slug: {
    _type: string;
    current: string;
  };
  title: string;
  description: string;
}

export interface IPostPreview {
  
}