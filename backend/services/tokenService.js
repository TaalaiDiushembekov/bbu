import jwt from 'jsonwebtoken'

const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } = process.env;

class TokenService {
  static generateTokens = (data) => {
    const accessToken = jwt.sign(data, ACCESS_TOKEN_KEY, { expiresIn: '24h' });
    const refreshToken = jwt.sign(data, REFRESH_TOKEN_KEY, { expiresIn: '72h' });
    return {
      accessToken,
      refreshToken,
    };
  };

  static validateAccessToken = (token) => {
    try {
      const userData = jwt.verify(token, ACCESS_TOKEN_KEY);
      return userData;
    } catch (e) {
      return null;
    }
  };

  static validateRefreshToken = (token) => {
    try {
      const userData = jwt.verify(token, REFRESH_TOKEN_KEY);
      return userData;
    } catch (e) {
      return null;
    }
  };
}

export default TokenService;
