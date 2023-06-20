const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID;
const ENV = process.env.NODE_ENV;

const development = {
  ENV: "development",
};

const test = {
  ...development,
  ENV: "test",
};

const production = {
  ...development,
  ENV: "production",
};

const configs = { development, production, test };
const currentConfig = configs[ENV];

const config = {
  ENV: currentConfig.ENV,
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
