import { createStore } from 'vuex';

import agent from '@/store/modules/agent';
import appConfig from '@/store/modules/appConfig';
import contacts from '@/store/modules/contacts';
import conversation from '@/store/modules/conversation';
import conversationAttributes from '@/store/modules/conversationAttributes';
import conversationLabels from '@/store/modules/conversationLabels';
import events from '@/store/modules/events';
import globalConfig from '@/shared/store/globalConfig';
import message from '@/store/modules/message';
import campaign from '@/store/modules/campaign';
import article from '@/store/modules/articles';

export default createStore({
  modules: {
    agent,
    appConfig,
    contacts,
    conversation,
    conversationAttributes,
    conversationLabels,
    events,
    globalConfig,
    message,
    campaign,
    article,
  },
});
