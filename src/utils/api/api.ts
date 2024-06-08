/* eslint-disable @typescript-eslint/no-unused-vars */
interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  status: string;
  message: string;
  data: {
    user: never; // Sesuaikan tipe data pengguna dengan kebutuhan Anda
  };
}

interface LoginParams {
  email: string;
  password: string;
}

// interface LoginResponse {
//   status: string;
//   message: string;
//   data: {
//     token: string;
//   };
// }

const api = (() => {
  const base_url = import.meta.env.API_BASE_URL || 'http://localhost:3000/v1';
  const putAccessToken: (token: string) => void = (token: string) =>
    localStorage.setItem('token', token);

  const getAccessToken = () => localStorage.getItem('token');

  const _fetchWithAuth = async (
    url: string,
    options: RequestInit = {}
  ): Promise<Response> => {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  };

  const register = async ({
    name,
    email,
    password,
  }: RegisterParams): Promise<RegisterResponse> => {
    const response = await fetch(`${base_url}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const responseData: RegisterResponse = await response.json();
    const { status, message } = responseData;

    if (status !== 'success') {
      throw new Error(message);
    }

    const { user } = responseData.data;
    return user;
  };

  const login = async ({ email, password }: LoginParams) => {
    const response = await fetch(`${base_url}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json();
    const { status, message } = responseData;
    if (status !== 'success') throw new Error(message);
    const {
      data: { token },
    } = responseData;

    return token;
  };

  const getOwnProfile = async () => {
    const response = await _fetchWithAuth(`${base_url}/users/me`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { user },
    } = responseJson;

    return user;
  };

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
  };
})();

export default api;
