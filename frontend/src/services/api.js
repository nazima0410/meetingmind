import axios from 'axios';

// Create a mock api client
const api = axios.create({
  baseURL: '/api'
});

export const getMeetings = async () => {
  return [
    { id: 1, title: 'Acme Corp Q3 Renewal', date: '2023-10-01' }
  ];
};

export const getMeeting = async (id) => {
  return { id, title: 'Acme Corp Q3 Renewal', date: '2023-10-01' };
};

export const createMeeting = async (data) => {
  return { id: 2, ...data };
};

export const getMemories = async () => {
  return [
    { id: 1, content: 'Sarah prefers email communication.' },
    { id: 2, content: 'Sarah previously raised pricing concerns.' },
    { id: 3, content: 'Revised pricing was accepted.' },
    { id: 4, content: 'API proposal is still pending.' },
    { id: 5, content: 'October integration timeline was discussed.' }
  ];
};

export const getMemory = async (id) => {
  return { id, content: 'Sarah prefers email communication.' };
};

export const prepareMeeting = async (id) => {
  return { status: 'prepared' };
};

export const sendChatMessage = async (message) => {
  return { response: 'Recalled from memory: Sarah prefers email communication.' };
};

export const getDashboardData = async () => {
  return { meetings: 3, memories: 14, commitments: 4 };
};

export default api;
