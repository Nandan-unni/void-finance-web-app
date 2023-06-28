import { AccountType } from "../../common/types/account";

const initialState: {
  loading: boolean;
  accounts: AccountType[] | null;
} = {
  loading: true,
  accounts: null,
};

export default initialState;
