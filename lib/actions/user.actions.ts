"use server";

export async function registerUser(requestUserDto: RequestUserDto): Promise<any> {
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
