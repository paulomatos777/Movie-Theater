import { toast } from "react-toastify";

export function errorHandler(
  error: any,
  message?: string,
  isBinaryError = false
) {
  if (error.response && error.response.status !== 401) {
    let toastMessage =
      error.response.data?.message || message || "Falha na operação";

    if (isBinaryError) {
      toastMessage = message;
    }

    toast.error(toastMessage);
  }

  if (!error.response) {
    toast.error(message || "Falha na operação");
  }
}
