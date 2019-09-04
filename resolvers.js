module.exports = {
  Query: {
    activities: async (_source, _args, { dataSources }) => {
      return dataSources.ActivitiesAPI.getActivities()
    }
  }
}
