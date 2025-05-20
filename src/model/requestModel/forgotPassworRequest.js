export const createForgotPasswordRequest = ({email = null} = {}) => {
  const request = {
    email,
  };

  console.log('forgotPasswordRequest:', JSON.stringify(request));
  return request;
};
