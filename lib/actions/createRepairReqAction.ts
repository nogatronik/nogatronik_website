"use server";

// import { RepairRequest } from "../types";

// export const createRepairReq = async (
//   prevState: RepairRequest,
//   formData: FormData
// ) => {
//   const formInput: RepairRequest["formInput"] = {
//     uploadImage: null,
//     uploadVideo: null,
//     brand: (formData.get("brand") as string) ?? "",
//     model: (formData.get("model") as string) ?? "",
//     modelNumber: (formData.get("modelNumber") as string) ?? "",
//     issueTitle: (formData.get("issueTitle") as string) ?? "",
//     issueDate: formData.get("issueDate")
//       ? new Date(formData.get("issueDate") as string)
//       : null,
//     previousWork: (formData.get("previousWork") as string) ?? "",
//     issueOcccurance: (formData.get("issueOcccurance") as string) ?? "",
//     warranty: (formData.get("warranty") as string) ?? "",
//     prefferedDelivery: (formData.get("prefferedDelivery") as string) ?? "",
//     preferredContactMethod:
//       (formData.get("preferredContactMethod") as string) ?? "",
//     issueDescription: (formData.get("issueDescription") as string) ?? "",
//   };
//   return {
//     success: true,
//     message: "",
//     error: "",
//     formInput,
//   };
// };
