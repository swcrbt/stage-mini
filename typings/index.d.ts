/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    theme: string,
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}