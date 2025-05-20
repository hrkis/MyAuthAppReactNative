export const isValidName = name => {
  const nameRegex = /^[a-zA-Z\s]{2,50}$/;
  return nameRegex.test(name);
};

export const isValidEmail = email => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const isValidPassword = password => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,20}$/;
  return passwordRegex.test(password);
};

export const isValidPhone = phone => {
  const phoneRegex = /^(\+)?[0-9]{10,15}$/;
  return phoneRegex.test(phone);
};

export const isValidOtp = otp => {
  const otpRegex = /^\d{4}$/;
  return otpRegex.test(otp);
};
