import { createStore, createHook, defaults } from "react-sweet-state";
import actions from "./actions";
import initialState from "./initial-state";
import { getStoreName } from "../../common/utils";

defaults.devtools = true;

const Store = createStore({
  name: getStoreName("auth"),
  initialState,
  actions,
});

export const useAuthStore = createHook(Store, {
  selector: (state) => state,
});
