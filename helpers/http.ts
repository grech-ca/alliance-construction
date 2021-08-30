import axios from 'axios';
import cookie from 'js-cookie';

axios.interceptors.request.use(
  config => config,
  error => {
    console.log(error);
  },
);

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export const login = async (password: string): Promise<void> => {
  const {
    data: { accessToken },
  } = await axios.post<AuthResponse>('/api/auth', { password });

  cookie.set('authorization', accessToken);
};

// export const login = async (password: string): Promise<void> => {
//   const {
//     data: { accessToken, refreshToken },
//   } = await axios.post<AuthResponse>('/api/auth', { password });

//   const { exp: accessExp } = jwt.decode(accessToken) as JwtPayload;
//   const { exp: refreshExp } = jwt.decode(refreshToken) as JwtPayload;

//   const accessExpires = new Date(accessExp * 1000);
//   const refreshExpires = new Date(refreshExp * 1000);

//   document.cookie = cookie.serialize('authorization', accessToken, { httpOnly: true, expires: accessExpires });
//   document.cookie = cookie.serialize('tokenExpirationDate', accessExpires.toISOString());

//   document.cookie = cookie.serialize('refresh', refreshToken, { httpOnly: true, expires: accessExpires });
//   document.cookie = cookie.serialize('refreshExpirationDate', refreshExpires.toISOString());
// };

// export const refresh = async (): Promise<void> => {
//   const {
//     data: { accessToken, refreshToken },
//   } = await axios.post<AuthResponse>('/api/auth/refresh');

//   const { exp: accessExp } = jwt.decode(accessToken) as JwtPayload;
//   const { exp: refreshExp } = jwt.decode(refreshToken) as JwtPayload;

//   const accessExpires = new Date(accessExp * 1000);
//   const refreshExpires = new Date(refreshExp * 1000);

//   document.cookie = cookie.serialize('authorization', accessToken, { httpOnly: true, expires: accessExpires });
//   document.cookie = cookie.serialize('tokenExprationDate', accessExpires.toISOString());

//   document.cookie = cookie.serialize('refresh', refreshToken, { httpOnly: true, expires: accessExpires });
//   document.cookie = cookie.serialize('refreshExprationDate', refreshExpires.toISOString());
// };
