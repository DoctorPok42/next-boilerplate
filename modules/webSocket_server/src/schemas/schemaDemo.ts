import { Schema, model } from "mongoose";
import { SchemaDemo } from "../types";

const schemas = new Schema<SchemaDemo>({
  key: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const SchemaDemoModel = model<SchemaDemo>("Schema", schemas);

export default SchemaDemoModel;
