// signInRequest.js
export const createSignInRequest = ({
  email = null,
  password = null,
  fcmToken = null,
} = {}) => {
  const request = {
    email,
    password,
    fcmToken,
  };

  console.log('createSignInRequest:', JSON.stringify(request));
  return request;
};
