const { BAD_REQUEST } = require("../core/error.response");
const { getInfoData } = require("../utils");

const UserService = require("./user.service");
const KeyService = require("./key.service");
const {
  createTokens,
  accessTokenVerify,
  refreshTokenVerify,
} = require("../auth/auth.util");

class AccessService {
  static signUp = async ({ email, password, name }) => {
    //Kiểm tra email đăng ký
    const isUser = await UserService.findUserByEmail(email);
    if (isUser) {
      throw new BAD_REQUEST("Địa chỉ email đã tồn tại!");
    }
    //Tạo user mới
    const user = await UserService.createUser({
      email,
      password,
      name,
    });
    //Tạo user thành công
    if (user) {
      //Tạo publicKey, privateKey cho user
      const { publicKey, privateKey } = await KeyService.createdUserKey(
        user.id
      );
      //Kiểm tra publicKey, privateKey
      if (!publicKey && privateKey) {
        throw new BAD_REQUEST("Tạo key không thành công!");
      }
      //Tạo publicKey, privateKey cho user
      const { accessToken, refreshToken } = await createTokens(
        {
          i: user.id,
          e: user.email,
          n: user.name,
          r: user.roles,
        },
        publicKey,
        privateKey
      );
      //kiểm tra refreshToken, accessToken
      const decodeAccessToken = await accessTokenVerify(accessToken, publicKey);
      const decodeRefreshToken = await refreshTokenVerify(
        refreshToken,
        privateKey
      );
      if (!decodeAccessToken || !decodeRefreshToken) {
        throw new BAD_REQUEST("Tạo người dùng không thành công!");
      }
      console.log(":::::::::::::: Access Token Verify ::::::::::::::");
      console.log(decodeAccessToken);
      console.log("::::::::::::: Refresh Token Verify ::::::::::::::");
      console.log(decodeRefreshToken);
      console.log(":::::::::::::::::::::::::::::::::::::::::::::::::");
      //Trả lại user, accessToken, refreshToken
      return {
        user: getInfoData({
          fileds: ["_id", "name", "email"],
          object: user,
        }),
        token: { accessToken, refreshToken },
      };
    }
    throw new BAD_REQUEST("Tạo người dùng không thành công!");
  };
}

module.exports = AccessService;
