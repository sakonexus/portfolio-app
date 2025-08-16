const DEV_URL = import.meta.env.VITE_DEV_URL;
const PROD_URL = import.meta.env.VITE_PROD_URL;

export const baseUrl = () => {
  return import.meta.env.DEV ? DEV_URL : PROD_URL;
};
