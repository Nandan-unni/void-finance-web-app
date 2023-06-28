import { StoreActionApi } from "react-sweet-state";
import initialState from "./initial-state";
import { AccountType } from "../../common/types/account";
import { listAccounts } from "../../network/accounts";
import { logger } from "../../common/utils/logger";
import { message } from "antd";

const actions = {
  setLoading:
    (loading: boolean) =>
    ({ setState }: StoreActionApi<typeof initialState>) => {
      setState({ loading });
    },

  setAccounts:
    (accounts: AccountType[]) =>
    ({ setState }: StoreActionApi<typeof initialState>) => {
      setState({ accounts });
    },

  handleListAccounts:
    () =>
    async ({ dispatch }: StoreActionApi<typeof initialState>) => {
      dispatch(actions.setLoading(true));
      try {
        const res = await listAccounts();
        if (res?.success) {
          dispatch(actions.setAccounts(res?.data));
        } else {
          message.error(res?.message ?? "Some error occured!");
        }
      } catch (error) {
        logger.error(error, "handleListAccounts()");
        message.error("Some error occured!");
      } finally {
        dispatch(actions.setLoading(false));
      }
    },
};

export default actions;
