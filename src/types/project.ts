export interface IProjectImages {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface ISanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}
export interface IProject {
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
  images: string[];
  mainImage: ISanityImage;
  slug: {
    _type: string;
    current: string;
  };
  title: string;
  description: string;
  videoDemo: string;
}