import { Schema, model } from "mongoose";
import { SchemaDemo } from "../types";

const SchemaDemo = new Schema<SchemaDemo>({
  key: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const SchemaDemoModel = model<SchemaDemo>("SchemaDemo", SchemaDemo);

export default SchemaDemoModel;
