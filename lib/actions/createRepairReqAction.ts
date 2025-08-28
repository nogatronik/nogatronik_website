"use server";

export const createRepairReqAction = async (
  state: unknown,
  formData: FormData
) => {
  console.log(state, formData);
  return { success: true, message: "success" };
};
