module.exports = {
  /**
 * @description 标题
 */
  title: 'electron-chat',
  /**
 * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
 */
  tokenCookieExpires: 1,
  /**
 * @description 记住密码状态下的密码在Cookie中存储的天数，默认1天
 */
  passCookieExpires: 1,
  /**
 * @description token key
 */
  TokenKey: 'ELECTRON-CHAT-TOEKN',
  /**
 * @description 请求超时时间，毫秒（默认2分钟）
 */
  timeout: 1200000,
};
