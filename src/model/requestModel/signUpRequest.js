export const createSignUpRequest = ({
  firstName = null,
  lastName = null,
  companyName = null,
  isIndividual = '0',
  email = null,
  password = null,
  fcmToken = null,
} = {}) => {
  const request = {
    firstName,
    lastName,
    companyName,
    isIndividual,
    email,
    password,
    fcmToken,
  };

  console.log('createSignUpRequest:', JSON.stringify(request));
  return request;
};
