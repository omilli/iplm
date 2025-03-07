import express from "express";

let modelServer: express.Express;

export function getModelServer(): express.Express {
  return modelServer ??= express();
} 
