import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useGoogleAuth = (url) => {
  const navigator = useNavigate();
  // Google Authentication

  const googleAuth = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch(`${url}/google`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tokenResponse: tokenResponse.access_token,
          }),
          credentials: "include",
        });
        const json = await response.json();
        if (json.status) {
          toast.success(json?.message);
          navigator("/");
        } else {
          toast.error(json?.message);
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  return googleAuth;
};

export default useGoogleAuth;
