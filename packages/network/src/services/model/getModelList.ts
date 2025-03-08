import { prebuiltAppConfig, type ModelRecord } from "@mlc-ai/web-llm";

/**
 * Returns a list of availible models from the @mlc-ai/web-llm configuration.
 */
export function getModelList(
  id?: string
): ModelRecord[] {
  let modelList = prebuiltAppConfig.model_list;

  if (id) {
    modelList = modelList.filter((_) => _.model_id === id);
  }

  return modelList;
} 