export const IS_PROD = process.env.NODE_ENV === 'production';
const API_PRE = IS_PROD ? '' : 'http://localhost:3344';

export const queryTest = async () => {
  try {
    const response = await fetch(`${API_PRE}/dynamic/test.json`);
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};
