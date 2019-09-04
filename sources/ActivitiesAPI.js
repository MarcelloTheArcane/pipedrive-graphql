require("dotenv").config()

const { RESTDataSource } = require('apollo-datasource-rest')

class ActivitiesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.pipedrive.com/v1/';
  }

  willSendRequest(request) {
    request.params.set('api_token', process.env.PIPEDRIVE_API_KEY);
  }

  // Resolvers
  async getActivities() {
    const { data } = await this.get(`activities`);
    return data;
  }
}

module.exports = ActivitiesAPI;
