export interface ISkill {
  name: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  url: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
export type IImage={
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}