import { Notification } from 'element-ui';
export default {
  api (code, args) {
    switch (code) {
      case 500:
        Notification.error({
          title: args.msg || '后台错误',
          duration: 5000
        });
        break;
      default:
        if (args.msg !== undefined) {
          Notification.error({
            title: errorMsg,
            duration: 5000
          });
        }
        break;
    }
  }
}
