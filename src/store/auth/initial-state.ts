import { UserType } from "../../common/types/user";

const initialState: {
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  user: UserType | null;
  isNewUser: boolean;
} = {
  isAuthenticating: false,
  isAuthenticated: false,
  user: null,
  isNewUser: false,
};

export default initialState;
