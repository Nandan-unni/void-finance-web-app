import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  browserLocalPersistence,
  setPersistence,
  signOut as firebaseSignOut,
} from "firebase/auth";

import config from "../../common/config";

const { FIREBASE_CONFIG } = config;

const App = initializeApp(FIREBASE_CONFIG);
const AuthProvider = new GoogleAuthProvider();
const Auth = getAuth(App);

const Database = getDatabase(App);

const signInWithGoogle = async () => {
  await setPersistence(Auth, browserLocalPersistence);
  return signInWithPopup(Auth, AuthProvider);
};

const customGet = (path: string) => get(ref(Database, path));
const customSet = (path: string, data: any) => set(ref(Database, path), data);
const DB = { get: customGet, set: customSet };
const AUTH = { signIn: signInWithGoogle, signOut: () => firebaseSignOut(Auth) };

export { DB, AUTH };
