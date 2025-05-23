import useGetAPIRequest from "./useGetAPIRequest";
import { GET_USER_INFORMATION } from "../queryKeys/QueryKeys";

const useAuth = () => {
  const { data: userInformation, isError } = useGetAPIRequest(
    "/getUserInfomation",
    "/login",
    GET_USER_INFORMATION("/getGroup", "/login"),
    { staleTime: 1000 * 60 * 5 }
  );

  return {
    isAuthenticated: !!userInformation?.data,
    userData: userInformation?.data,
    isError,
  };
};

export default useAuth;
