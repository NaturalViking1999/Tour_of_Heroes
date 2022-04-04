export interface User {
    password: string,
    email: string,
    username?: string,
}

export interface Tokens {
    token: string,
    refreshToken?: string
}