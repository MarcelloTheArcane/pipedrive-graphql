require('dotenv').config()

const { RESTDataSource } = require('apollo-datasource-rest')

class ActivitiesAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://api.pipedrive.com/v1/'
  }

  willSendRequest (request) {
    request.params.set('api_token', process.env.PIPEDRIVE_API_KEY)
  }

  // Resolvers
  async getActivities (args) {
    const { data } = await this.get(`activities`, args)
    return data
  }

  async getActivity ({ id }) {
    const { data } = await this.get(`activities/${id}`)
    return data
  }

  async getActivityTypes (args) {
    const { data } = await this.get(`activityTypes`, args)
    return data
  }

  async getCurrencies (args) {
    const { data } = await this.get(`currencies`, args)
    return data
  }

  async getDeals (args) {
    const { data } = await this.get(`deals`, args)
    return data
  }

  async getFindDeals (args) {
    const { data } = await this.get(`deals/find`, args)
    return data
  }
  
  async getDealSummary (args) {
    const { data } = await this.get(`deals/summary`, args)
    return data
  }
  
  async getDealsTimeline (args) {
    const { data } = await this.get(`deals/timeline`, args)
    return data
  }

  async getDeal ({ id }) {
    const { data } = await this.get(`deal/${id}`)
    return data
  }

  async getDealActivities ({ id, ...args}) {
    const { data } = await this.get(`deal/${id}/activities`, args)
    return data
  }

  async getDealFollowers ({ id }) {
    const { data } = await this.get(`deal/${id}/followers`)
    return data
  }

  async getDealEmails ({ id, ...args}) {
    const { data } = await this.get(`deal/${id}/mailMessages`, args)
    return data
  }

  async getDealParticipants ({ id, ...args}) {
    const { data } = await this.get(`deal/${id}/participants`, args)
    return data
  }

  async getPermittedUsers ({ id, ...args}) {
    const { data } = await this.get(`deal/${id}/permittedUsers`, args)
    return data
  }

  async getAssociatedPersons ({ id, ...args}) {
    const { data } = await this.get(`deal/${id}/persons`, args)
    return data
  }

  async getFiles (args) {
    const { data } = await this.get(`files`, args)
    return data
  }

  async getFile ({ id }) {
    const { data } = await this.get(`files/${id}`)
    return data
  }

  async getFilters (args) {
    const { data } = await this.get(`filters`, args)
    return data
  }

  async getFilter ({ id }) {
    const { data } = await this.get(`filters/${id}`)
    return data
  }

  async getEmailMessage ({ id, ...args}) {
    const { data } = await this.get(`mailbox/mailMessages/${id}`, args)
    return data
  }

  async getNotes (args) {
    const { data } = await this.get(`notes`, args)
    return data
  }

  async getNote ({ id }) {
    const { data } = await this.get(`notes/${id}`)
    return data
  }

  async getOrganizations (args) {
    const { data } = await this.get(`organizations`, args)
    return data
  }

  async getOrganization ({ id }) {
    const { data } = await this.get(`organizations/${id}`)
    return data
  }

  async getPersons (args) {
    const { data } = await this.get(`persons`, args)
    return data
  }

  async getPerson ({ id }) {
    const { data } = await this.get(`persons/${id}`)
    return data
  }

  async getPipelines () {
    const { data } = await this.get(`pipelines`)
    return data
  }

  async getPipeline ({ id, ...args }) {
    const { data } = await this.get(`pipelines/${id}`, args)
    return data
  }

  async getDealsInPipeline ({ id, ...args }) {
    const { data } = await this.get(`pipelines/${id}/deals`, args)
    return data
  }

  async getStages (args) {
    const { data } = await this.get(`stages`, args)
    return data
  }

  async getStage ({ id }) {
    const { data } = await this.get(`stages/${id}`)
    return data
  }

  async getUsers () {
    const { data } = await this.get(`users`)
    return data
  }

  async getFindUser (args) {
    const { data } = await this.get(`users/find`, args)
    return data
  }

  async getUser ({ id }) {
    const { data } = await this.get(`users/${ id }`)
    return data
  }

  async getUserSettings () {
    const { data } = await this.get(``, args)
    return data
  }
}

module.exports = ActivitiesAPI
