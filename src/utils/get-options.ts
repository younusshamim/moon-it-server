import { SelectOption } from "../models/base.model";

const getOptions = (
  data: any,
  labelKey?: string,
  valueKey?: string
): SelectOption[] => {
  return data.map((item: any) => ({
    label: labelKey ? item[labelKey] : item.name,
    value: valueKey ? item[valueKey] : item._id,
  }));
};

export default getOptions;
