export const createResetPasswordRequest = ({
  email = null,
  password = null,
  otp = null,
  password_confirmation = null,
} = {}) => {
  const request = {
    email,
    password,
    otp,
    password_confirmation,
  };

  console.log('resetPasswordRequest:', JSON.stringify(request));
  return request;
};
// To parse this JSON data, do////     final resetPasswordRequest = resetPasswordRequestFromJson(jsonString);import 'dart:convert';ResetPasswordRequest resetPasswordRequestFromJson(String str) => ResetPasswordRequest.fromJson(json.decode(str));String resetPasswordRequestToJson(ResetPasswordRequest data) => json.encode(data.toJson());class ResetPasswordRequest {  String? email;  String? otp;  String? password;  String? passwordConfirmation;  ResetPasswordRequest({    this.email,    this.otp,    this.password,    this.passwordConfirmation,  });  factory ResetPasswordRequest.fromJson(Map<String, dynamic> json) => ResetPasswordRequest(    email: json["email"],    otp: json["otp"],    password: json["password"],    passwordConfirmation: json["password_confirmation"],  );  Map<String, dynamic> toJson() => {    "email": email,    "otp": otp,    "password": password,    "password_confirmation": passwordConfirmation,  };}
