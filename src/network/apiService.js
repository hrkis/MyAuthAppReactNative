// https://machinerylist.com/api/sign-in

export const baseUrlLive = 'https://machinerylist.com/api/';

export const makeApiCall = async ({endpoint, method = 'POST', body = null}) => {
  try {
    const response = await fetch(`${baseUrlLive}${endpoint}`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    });

    const jsonResponse = await response.json();
    console.log('API Response:', JSON.stringify(jsonResponse));
    return jsonResponse;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
