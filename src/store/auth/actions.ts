import { StoreActionApi } from "react-sweet-state";
import initialState from "./initial-state";
import { CACHE } from "../../network/common";
import { authenticate, signIn } from "../../network/auth";
import { UserType } from "../../common/types/user";
import { message } from "antd";
import { logger } from "../../common/utils/logger";

const actions = {
  setUser:
    (user: UserType) =>
    ({ setState }: StoreActionApi<typeof initialState>) => {
      setState({ user });
    },

  setIsNewUser:
    (isNewUser: boolean) =>
    ({ setState }: StoreActionApi<typeof initialState>) => {
      setState({ isNewUser });
    },

  setIsAuthenticating:
    (isAuthenticating: boolean) =>
    ({ setState }: StoreActionApi<typeof initialState>) => {
      setState({ isAuthenticating });
    },

  setIsAuthenticated:
    (isAuthenticated: boolean) =>
    ({ setState }: StoreActionApi<typeof initialState>) => {
      setState({ isAuthenticated });
    },

  handleSignIn:
    () =>
    async ({ dispatch }: StoreActionApi<typeof initialState>) => {
      dispatch(actions.setIsAuthenticating(true));
      try {
        const googleRes = await signIn();
        const user: UserType = {
          name: googleRes.user.displayName ?? "",
          uid: googleRes.user.uid,
          email: googleRes.user.email ?? "",
        };
        const res = await authenticate(user);
        const { data } = res;
        if (res.success) {
          CACHE.setItem(user);
          CACHE.setItem({ "vf-accessToken": data?.accessToken });
          dispatch(actions.setUser(user));
          dispatch(actions.setIsNewUser(data?.isNewUser));
          dispatch(actions.setIsAuthenticated(true));
        } else {
          message.error(
            data?.message ?? "Authentication failed! Some error occured"
          );
        }
      } catch (error) {
        logger.error(error, "handleSignIn()");
        message.error("Authentication failed! Some error occured");
      } finally {
        dispatch(actions.setIsAuthenticating(false));
      }
    },
};

export default actions;
