"use server";
import { cookies } from 'next/headers'
export async function registerUser(requestUserDto: RequestUserSignupDto): Promise<any> {
    const userData = {username: requestUserDto.username, password: requestUserDto.password};
    const res = await fetch('http://localhost:8080/v1/authentication/signup', {
        method: "post",
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify(userData)
    })
    if (!res.ok) {
        return null;
    }
    return res.json();
}

export async function loginUser(requestUserLoginDto: RequestUserLoginDto): Promise<{userUuid:string} | null>{
    const userData = {username: requestUserLoginDto.username, password: requestUserLoginDto.password};
    const res = await fetch('http://localhost:8080/v1/authentication/login', {
        method: "post",
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify(userData)
    })
    if (!res.ok) {
        return null;
    }
    const resJson = await res.json();
    cookies().set("accessToken", resJson.token, {
        httpOnly: true,
        maxAge: 3600,
        sameSite: "strict"
    });
    console.log(resJson);
    // cookies().set("userUuid", resJson.token, {
    //     httpOnly: true,
    //     maxAge: 3600,
    //     sameSite: "strict"
    // });

    return {userUuid: resJson.userUuid};
}
