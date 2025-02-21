import client from ".";

const MemberAPI = {
  GET_USER_INFO: async ({ providerId }) => {
    const response = await client.get(`/api/${providerId}/info`);
    console.log(response.data);
    return response.data;
  },
};

export default MemberAPI;
