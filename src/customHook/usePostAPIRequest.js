import { useRef } from "react";
import toast from "react-hot-toast";
import { GROUP_MESSAGE } from "../constants/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostAPIRequest = (refetchQueryKey) => {
  const baseUrl = process.env.REACT_APP_URL;
  const toastId = useRef("");
  const queryClient = useQueryClient();
  const postAPIRequest = async ({ path, data, headers }) => {
    try {
      toastId.current = toast.loading(GROUP_MESSAGE?.LOADING);
      const response = await fetch(`${baseUrl}${path}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (json.status) {
        toast.success(json.message, { id: toastId.current });
        return json;
      } else {
        toast.error(json.message, { id: toastId.current });
      }
    } catch (err) {
      console.log(err);
      toast.error(GROUP_MESSAGE?.ERROR, { id: toastId.current });
    }
  };
  return useMutation({
    mutationFn: postAPIRequest,
    onSuccess: () => {
      if (refetchQueryKey) {
        queryClient.invalidateQueries({ queryKey: refetchQueryKey });
      }
    },
  });
};
export default usePostAPIRequest;
