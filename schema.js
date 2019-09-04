const { gql } = require('apollo-server')

module.exports = gql`
  type Activity {
    active_flag: Boolean
    add_time: String
    assigned_to_user_id: Int
    busy_flag: Boolean
    company_id: Int
    created_by_user_id: Int
    deal_dropbox_bcc: String
    deal_id: Int!
    deal_title: String
    done: Boolean!
    due_date: String
    due_time: String
    duration: String
    participants: [Participant]!
  }

  type Participant {
    person_id: Int
    primary_flag: Boolean
  }

  type Query {
    activities: [Activity]
  }
`
