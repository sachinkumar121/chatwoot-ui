import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import conversations from '@/mock-data/conversation.js';

const state = {
  conversations,
  // conversations: {}, // uncomment this to get clear conversations
  meta: {
    userLastSeenAt: undefined,
  },
  uiFlags: {
    allMessagesLoaded: false,
    isFetchingList: false,
    isAgentTyping: false,
    isCreating: false,
  },
  lastMessageId: null,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
