"use server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

interface UserResponse {
  token: string;
}

export async function registerUser(
  requestUserDto: RequestUserSignupDto
): Promise<UserResponseJwt | null> {
  const userData = {
    firstname: requestUserDto.firstname,
    lastname: requestUserDto.lastname,
    username: requestUserDto.username,
    password: requestUserDto.password,
  };
  const res = await fetch("http://localhost:8080/v1/authentication/signup", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify(userData),
  });
  if (!res.ok) {
    return null;
  }
  const signupResponse: UserResponse = await res.json();
  return jwtDecode(signupResponse.token);
}

export async function loginUser(
  requestUserLoginDto: RequestUserLoginDto
): Promise<UserResponseJwt | null> {
  const userData = {
    username: requestUserLoginDto.username,
    password: requestUserLoginDto.password,
  };
  const res = await fetch("http://localhost:8080/v1/authentication/login", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify(userData),
  });
  if (!res.ok) {
    return null;
  }
  const signupResponse: UserResponse = await res.json();
  cookies().set("accessToken", signupResponse.token, {
    httpOnly: true,
    maxAge: 3600,
    sameSite: "strict",
  });

  return jwtDecode(signupResponse.token);
}
