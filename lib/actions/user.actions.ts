"use server";

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

import {
  RequestUserLoginDto,
  RequestUserSignupDto,
  UserResponseJwt,
} from "@/types";

interface UserResponse {
  token: string;
}

const backendUrl = process.env.BACKEND_ENDPOINT_URL;

export async function registerUser(
  requestUserDto: RequestUserSignupDto
): Promise<UserResponseJwt | null> {
  const userData = {
    firstname: requestUserDto.firstname,
    lastname: requestUserDto.lastname,
    username: requestUserDto.username,
    password: requestUserDto.password,
  };
  const res = await fetch(`${backendUrl}v1/authentication/signup`, {
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

  try {
    const res = await fetch(`${backendUrl}v1/authentication/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      return null;
    }
    const signupResponse: UserResponse = await res.json();
    const decodedJwt: UserResponseJwt = jwtDecode(signupResponse.token);
    decodedJwt.jwt = signupResponse.token;
    return decodedJwt;
  } catch (error) {
    return null;
  }
}

export async function clearAccessToken() {
  await fetch(`${backendUrl}v1/authentication/logout`, {
    method: "post",
    headers: new Headers({
      Authorization: "Bearer " + cookies().get("accessToken")?.value,
    }),
    mode: "cors",
  });

  cookies().delete("accessToken");
}
