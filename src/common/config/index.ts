const ENV = import.meta.env.DEV
  ? "development"
  : import.meta.env.PROD
  ? "production"
  : "test";

const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const FIREBASE_MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;
const FIREBASE_MESSAGING_SENDER_ID = import.meta.env
  .VITE_FIREBASE_MESSAGING_SENDER_ID;

const development = {
  ENV: "development",
  API_URL: "http://localhost:8000/",
};

const test = {
  ...development,
  API_URL: "https://void-finance-api.up.railway.app/",
  ENV: "test",
};

const production = {
  ...development,
  ENV: "production",
  API_URL: "https://void-finance-api.up.railway.app/",
};

const configs = { development, production, test };
const currentConfig = configs[ENV];

const config = {
  ENV: currentConfig.ENV,
  API_URL: currentConfig.API_URL,
  FIREBASE_CONFIG: {
    apiKey: FIREBASE_API_KEY,
    authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: `${FIREBASE_PROJECT_ID}`,
    storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: `1:${FIREBASE_MESSAGING_SENDER_ID}:web:17a19d9fe267e142136dfd`,
    measurementId: FIREBASE_MEASUREMENT_ID,
  },
};

export default config;
