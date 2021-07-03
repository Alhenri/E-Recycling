import { FormType } from './interfaces';

async function postData(data: FormType) {
  const base_url =
    process.env.REACT_APP_MOCK === 'true'
      ? 'http://localhost:3333'
      : process.env.REACT_APP_BASE_URL;
  await fetch(`${base_url}/set_location`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export default postData;
