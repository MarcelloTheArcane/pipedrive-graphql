module.exports = {
  Query: {
    activities: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getActivities(args)
    },
    activity: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getActivity(args)
    },
    activityTypes: async (_source, _args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getActivityTypes()
    },
    currencies: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getCurrencies(args)
    },
    deals: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getDeals(args)
    },
    findDeals: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getFindDeals(args)
    },
    dealSummary: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getDealSummary(args)
    },
    dealsTimeline: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getDealsTimeline(args)
    },
    deal: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getDeal(args)
    },
    dealActivities: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getDealActivities(args)
    },
    dealFollowers: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getDealFollowers(args)
    },
    dealEmails: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getDealEmails(args)
    },
    dealParticipants: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getDealParticipants(args)
    },
    dealEmailData: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getDealEmailData(args)
    },
    permittedUsers: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getPermittedUsers(args)
    },
    associatedPersons: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getAssociatedPersons(args)
    },
    files: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getFiles(args)
    },
    file: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getFile(args)
    },
    filters: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getFilters(args)
    },
    filter: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getFilter(args)
    },
    emailMessage: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getEmailMessage(args)
    },
    notes: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getNotes(args)
    },
    note: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getNote(args)
    },
    organizations: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getOrganizations(args)
    },
    organization: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getOrganization(args)
    },
    persons: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getPersons(args)
    },
    person: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getPerson(args)
    },
    pipelines: async (_source, _args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getPipelines()
    },
    pipeline: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getPipeline(args)
    },
    dealsInPipeline: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getDealsInPipeline(args)
    },
    stages: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getStages(args)
    },
    stage: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getStage(args)
    },
    users: async (_source, _args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getUsers()
    },
    findUsers: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getFindUser(args)
    },
    user: async (_source, args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getUser(args)
    },
    userSettings: async (_source, _args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getUserSettings()
    },
  }
}
