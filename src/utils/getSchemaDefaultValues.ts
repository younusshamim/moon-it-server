import { Schema } from "mongoose";

function getSchemaDefaultValues<T>(schema: Schema): T {
  const defaultValues: Record<string, any> = {};

  Object.keys(schema.paths).forEach((path) => {
    const schemaType = schema.paths[path];

    if ("defaultValue" in schemaType && schemaType.defaultValue !== undefined) {
      defaultValues[path] = schemaType.defaultValue;
    } else {
      switch (schemaType.instance) {
        case "String":
          defaultValues[path] = "";
          break;
        case "Number":
          defaultValues[path] = 0;
          break;
        case "Boolean":
          defaultValues[path] = false;
          break;
        case "Date":
          defaultValues[path] = new Date();
          break;
        case "ObjectID":
          defaultValues[path] = "ObjectId placeholder";
          break;
        case "Array":
          defaultValues[path] = [];
          break;
        case "Mixed":
        case "Map":
          defaultValues[path] = {};
          break;
        default:
          defaultValues[path] = null;
      }
    }
  });

  // Remove MongoDB specific fields
  delete defaultValues._id;
  delete defaultValues.__v;
  delete defaultValues.createdAt;
  delete defaultValues.updatedAt;

  return defaultValues as T;
}

export default getSchemaDefaultValues;
