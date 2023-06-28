import { StoreActionApi } from "react-sweet-state";
import initialState from "./initial-state";

const actions = {
  setLoading:
    (loading: boolean) =>
    ({ setState }: StoreActionApi<typeof initialState>) => {
      setState({ loading });
    },
};

export default actions;
