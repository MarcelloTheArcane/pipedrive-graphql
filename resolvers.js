module.exports = {
  Query: {
    activities: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getActivities(args)
    },
    activity: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getActivity(args)
    },
    activityTypes: async (_source, _args, { dataSources }) => {
      return dataSources.DataSource.getActivityTypes()
    },
    currencies: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getCurrencies(args)
    },
    deals: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getDeals(args)
    },
    findDeals: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getFindDeals(args)
    },
    dealSummary: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getDealSummary(args)
    },
    dealsTimeline: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getDealsTimeline(args)
    },
    deal: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getDeal(args)
    },
    dealActivities: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getDealActivities(args)
    },
    dealFollowers: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getDealFollowers(args)
    },
    dealEmails: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getDealEmails(args)
    },
    dealParticipants: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getDealParticipants(args)
    },
    dealEmailData: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getDealEmailData(args)
    },
    permittedUsers: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getPermittedUsers(args)
    },
    associatedPersons: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getAssociatedPersons(args)
    },
    files: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getFiles(args)
    },
    file: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getFile(args)
    },
    filters: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getFilters(args)
    },
    filter: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getFilter(args)
    },
    emailMessage: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getEmailMessage(args)
    },
    notes: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getNotes(args)
    },
    note: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getNote(args)
    },
    organizations: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getOrganizations(args)
    },
    organization: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getOrganization(args)
    },
    persons: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getPersons(args)
    },
    person: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getPerson(args)
    },
    pipelines: async (_source, _args, { dataSources }) => {
      return dataSources.DataSource.getPipelines()
    },
    pipeline: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getPipeline(args)
    },
    dealsInPipeline: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getDealsInPipeline(args)
    },
    stages: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getStages(args)
    },
    stage: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getStage(args)
    },
    users: async (_source, _args, { dataSources }) => {
      return dataSources.DataSource.getUsers()
    },
    findUsers: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getFindUser(args)
    },
    user: async (_source, args, { dataSources }) => {
      return dataSources.DataSource.getUser(args)
    },
    userSettings: async (_source, _args, { dataSources }) => {
      return dataSources.DataSource.getUserSettings()
    },
  }
}
