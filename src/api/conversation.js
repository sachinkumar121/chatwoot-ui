import endPoints from '@/api/endPoints';
import { API } from '@/helpers/axios';

const createConversationAPI = async content => {
  const urlData = endPoints.createConversation(content);
  return API.post(urlData.url, urlData.params);
};

const sendMessageAPI = async (content, replyTo = null) => {
  return Promise.resolve({data: {"id": 16,"content": "Hi there,","inbox_id": 1,"conversation_id": 3,"message_type": 0,"created_at": 1741842440,"private": false,"source_id": null,"content_attributes": {"in_reply_to": null},"sender": {"additional_attributes": {},"custom_attributes": {},"email": null,"id": 6,"identifier": null,"name": "fragrant-log-439","phone_number": null,"thumbnail": "","type": "contact"}}});
  const urlData = endPoints.sendMessage(content, replyTo);
  return API.post(urlData.url, urlData.params);
};

const sendAttachmentAPI = async (attachment, replyTo = null) => {
  const urlData = endPoints.sendAttachment(attachment, replyTo);
  return API.post(urlData.url, urlData.params);
};

const getMessagesAPI = async ({ before, after }) => {
  const urlData = endPoints.getConversation({ before, after });
  // TODO: Should return from our API.
  return Promise.resolve({data: {payload: []}});
  return API.get(urlData.url, { params: urlData.params });
};

const getConversationAPI = async () => {
  // TODO: Should return from our API.
  return Promise.resolve({data: {}});
  return API.get(`/api/v1/widget/conversations${window.location.search}`);
};

const toggleTyping = async ({ typingStatus }) => {
  return API.post(
    `/api/v1/widget/conversations/toggle_typing${window.location.search}`,
    { typing_status: typingStatus }
  );
};

const setUserLastSeenAt = async ({ lastSeen }) => {
  return API.post(
    `/api/v1/widget/conversations/update_last_seen${window.location.search}`,
    { contact_last_seen_at: lastSeen }
  );
};
const sendEmailTranscript = async () => {
  return API.post(
    `/api/v1/widget/conversations/transcript${window.location.search}`
  );
};
const toggleStatus = async () => {
  return API.get(
    `/api/v1/widget/conversations/toggle_status${window.location.search}`
  );
};

const setCustomAttributes = async customAttributes => {
  return API.post(
    `/api/v1/widget/conversations/set_custom_attributes${window.location.search}`,
    {
      custom_attributes: customAttributes,
    }
  );
};

const deleteCustomAttribute = async customAttribute => {
  return API.post(
    `/api/v1/widget/conversations/destroy_custom_attributes${window.location.search}`,
    {
      custom_attribute: [customAttribute],
    }
  );
};

export {
  createConversationAPI,
  sendMessageAPI,
  getConversationAPI,
  getMessagesAPI,
  sendAttachmentAPI,
  toggleTyping,
  setUserLastSeenAt,
  sendEmailTranscript,
  toggleStatus,
  setCustomAttributes,
  deleteCustomAttribute,
};
