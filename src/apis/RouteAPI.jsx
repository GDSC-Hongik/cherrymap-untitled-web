import client from ".";

const RouteAPI = {
  ADD_ROUTE: async ({ providerId, data }) => {
    // routeName, mode, (start, end)(Name, Lat, Lng)
    const response = await client.post(`/api/${providerId}/routes`, data);
    return response.data;
  },

  GET_ROUTE_ONE: async ({ providerId, routeId }) => {
    const response = await client.get(`/api/${providerId}/routes/${routeId}`);
    return response.data;
  },

  GET_ROUTE_ALL: async ({ providerId, routeId }) => {
    const response = await client.get(`/api/${providerId}/routes/${routeId}`);
    return response.data;
  },

  DELETE_ROUTE: async ({ providerId, routeId }) => {
    await client.delete(`/api/${providerId}/routes/${routeId}`);
    return;
  },
};

export default RouteAPI;
