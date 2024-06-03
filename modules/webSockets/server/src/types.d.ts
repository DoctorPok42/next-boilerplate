import mongoose from "mongoose";

export interface SchemaDemo extends mongoose.Document {
  key: string;
  createdAt: Date;
}

export type Events = {
  params?: {
    authRequired: boolean;
  };

  (data: any, decoded: any, socketId: string): {
    status: string;
    message: string;
    data: any;
  };
};

export interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
}
