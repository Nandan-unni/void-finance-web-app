import { createStore, createHook } from "react-sweet-state";
import actions from "./actions";
import initialState from "./initial-state";
import { getStoreName } from "../../common/utils";

const Store = createStore({
  name: getStoreName("account"),
  initialState,
  actions,
});

export const useAccountStore = createHook(Store, {
  selector: (state) => state,
});
