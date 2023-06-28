import { createStore, createHook } from "react-sweet-state";
import actions from "./actions";
import initialState from "./initial-state";
import { getStoreName } from "../../common/utils";

const Store = createStore({
  name: getStoreName("demo"),
  initialState,
  actions,
});

export const useDemoStore = createHook(Store, {
  selector: (state) => state,
});
