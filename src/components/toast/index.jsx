import { toast } from "react-toastify";

export const badNotify = (text) => {
  toast.error(text, {
    theme: "blue",
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
