import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import {axiosApi} from "@/app/pages/api/axiosApi";

interface AxiosApiResponse {
    data: {
        accessToken: string;
        accessTokenExpiry: number;
        refreshToken: string;
    };
}

// Определение типа для объекта токенов
interface TokenObject {
    accessToken?: string;
    accessTokenExpiry?: number;
    refreshToken?: string;
    error?: string;
}

interface User {
    accessToken: string;
    accessTokenExpiry: number;
    refreshToken: string;
}

async function refreshAccessToken(tokenObject: TokenObject): Promise<TokenObject> {
    try {
        const tokenResponse: AxiosApiResponse = await axiosApi.post('auth/refresh', {
            token: tokenObject.refreshToken,
        });

        return {
            ...tokenObject,
            accessToken: tokenResponse.data.accessToken,
            accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
            refreshToken: tokenResponse.data.refreshToken,
        };
    } catch (error) {
        return {
            ...tokenObject,
            error: "RefreshAccessTokenError",
        };
    }
}



const providers = [
    CredentialsProvider({
        credentials: {
            email: {label: 'Email', type: 'email', required: true},
            password: {label: 'Пароль', type: 'password', required: true}
        },
        // @ts-ignore
        authorize: async (credentials) => {
            try {
                const user: AxiosApiResponse = await axiosApi.post('/auth/login', {
                    password: credentials.password,
                    email: credentials.email
                });

                if (user.data.accessToken) {
                    // Возвращаем данные в формате, соответствующем интерфейсу User
                    return {
                        accessToken: user.data.accessToken,
                        accessTokenExpiry: user.data.accessTokenExpiry,
                        refreshToken: user.data.refreshToken,
                    };
                }

                return null;
            } catch (e: any) {
                throw new Error(e);
            }

        }
    })
]

const callbacks = {
    // @ts-ignore
    jwt: async ({token, user}) => {
        if (user) {
            // This will only be executed at login. Each next invocation will skip this part.
            token.accessToken = user.data.accessToken;
            token.accessTokenExpiry = user.data.accessTokenExpiry;
            token.refreshToken = user.data.refreshToken;
        }

        // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
        const shouldRefreshTime = Math.round((token.accessTokenExpiry - 60 * 60 * 1000) - Date.now());

        // If the token is still valid, just return it.
        if (shouldRefreshTime > 0) {
            return Promise.resolve(token);
        }

        // If the call arrives after 23 hours have passed, we allow to refresh the token.
        token = refreshAccessToken(token);
        return Promise.resolve(token);
    },
    // @ts-ignore
    session: async ({session, token}) => {
        // Here we pass accessToken to the client to be used in authentication with your API
        session.accessToken = token.accessToken;
        session.accessTokenExpiry = token.accessTokenExpiry;
        session.error = token.error;

        return Promise.resolve(session);
    },
}

export const options = {
    providers,
    callbacks,
    pages: {},
    secret: 'your_secret'
}
// @ts-ignore
const Auth = (req, res) => NextAuth(req, res, options)
export default Auth;


