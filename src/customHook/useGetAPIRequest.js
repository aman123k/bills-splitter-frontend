import toast from "react-hot-toast";
import { GROUP_MESSAGE } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const baseUrl = process.env.REACT_APP_URL;

const useGetAPIRequest = (path, navigateTo, key) => {
  const navigation = useNavigate();

  return useQuery({
    queryKey: key,
    queryFn: () => getAPIRequest(path, navigateTo, navigation),
    onError: () => {
      toast.error(GROUP_MESSAGE?.ERROR);
    },
  });
};
export default useGetAPIRequest;

const getAPIRequest = async (path, navigate, navigation) => {
  try {
    const response = await fetch(`${baseUrl}${path}`, {
      credentials: "include",
    });
    const json = await response.json();
    if (json.status) {
      return json;
    } else {
      navigation(navigate);
      throw new Error(json.message);
    }
  } catch (err) {
    console.log(err);
  }
};
