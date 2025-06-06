import { useContext, useMemo, useCallback } from "react";
import { UserContext } from "../contexts/Context";
import request from "../utils/request";

export default function useAuthHook() {
  const { accessToken, ...authData } = useContext(UserContext);
  const isAdmin = authData.email === "admin@abv.bg";
  const username = authData.username

  const requestWrapper = useCallback(
    (method, url, data, options = {}) => {
      const authOptions = {
        ...options,
        headers: {
          "X-Authorization": accessToken,
          ...options.headers,
        },
      };

      return request.baseRequest(
        method,
        url,
        data,
        accessToken ? authOptions : options
      );
    },
    [accessToken]
  );

  const requestObject = useMemo(
    () => ({
      get: requestWrapper.bind(null, "GET"),
      post: requestWrapper.bind(null, "POST"),
      put: requestWrapper.bind(null, "PUT"),
      delete: requestWrapper.bind(null, "DELETE"),
    }),
    [requestWrapper]
  );

  return {
    ...authData,
    accessToken,
    isAdmin,
    username,
    userId: authData._id,
    isAuthenticated: !!accessToken,
    request: requestObject,
  };
}
