import { IFrameHelper } from '@/helpers/utils';

export const playNewMessageNotificationInWidget = () => {
  IFrameHelper.sendMessage({ event: 'playAudio' });
};
