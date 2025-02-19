import client from ".";

const AlertMessageAPI = {
  GET_STATUS: async () => {
    const response = await client.get(`/api/status`);
    return response.data;
  },
};

export default AlertMessageAPI;
