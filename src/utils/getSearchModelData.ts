import { searchModelCommonData } from "../configs/search-model";

const getSearchModelData = (data: any) => {
  return {
    ...data,
    ...searchModelCommonData,
  };
};

export default getSearchModelData;
