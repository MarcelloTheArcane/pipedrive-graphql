const { gql } = require('apollo-server')

module.exports = gql`
  # Activities

  type Activity {
    active_flag: Boolean
    add_time: String
    assigned_to_user_id: Int
    busy_flag: Boolean
    company_id: Int
    created_by_user_id: Int
    deal_dropbox_bcc: String
    deal_id: Int
    deal_title: String
    done: Boolean
    due_date: String
    due_time: String
    duration: String
    id: Int!
    last_notification_time: String
    last_notification_user_id: Int
    marked_as_done_time: String
    note: String
    notification_language_id: Int
    org_id: Int
    org_name: String
    owner_name: String
    participants: [Participant]
    person_dropbox_bcc: String
    person_id: Int
    person_name: String
    public_description: String
    rec_master_activity_id: Int
    reference_id: Int
    reference_type: String
    source_timezone: String
    subject: String
    type: String
    update_time: String
    update_user_id: Int
    user_id: Int
  }

  type Participant {
    person_id: Int
    primary_flag: Boolean
  }

  # ActivityTypes

  type ActivityType {
    active_flag: Boolean
    add_time: String
    color: String
    icon_key: String
    id: Int!
    is_custom_flag: Boolean
    key_string: String
    name: String
    order_nr: Int
    update_time: String
  }

  # Currencies

  type Currency {
    active_flag: Boolean
    code: String
    decimal_points: Int
    id: Int!
    is_custom_flag: Boolean
    name: String
    symbol: String
  }

  # Deals
  type Deal {
    active: Boolean
    activities_count: Int
    add_time: String
    cc_email: String
    close_time: String
    creator_user_id: CreatorUserId
    currency: String
    deleted: Boolean
    done_activities_count: Int
    email_messages_count: Int
    expected_close_date: String
    files_count: Int
    first_won_time: String
    followers_count: Int
    formatted_value: String
    formatted_weighted_value: String
    id: Int!
    label: String
    last_activity_date: String
    last_activity_id: Int
    last_incoming_mail_time: String
    last_outgoing_mail_time: String
    lost_reason: String
    lost_time: String
    next_activity_date: String
    next_activity_duration: String
    next_activity_id: Int
    next_activity_note: String
    next_activity_subject: String
    next_activity_time: String
    next_activity_type: String
    notes_count: Int
    org_hidden: Boolean
    org_id: OrgId
    org_name: String
    owner_name: String
    participants_count: Int
    person_hidden: Boolean
    person_id: PersonId
    person_name: String
    pipeline_id: Int
    probability: Float
    products_count: Int
    reference_activities_count: Int
    rotten_time: String
    stage_change_time: String
    stage_id: Int
    stage_order_nr: Int
    status: String
    title: String
    undone_activities_count: Int
    update_time: String
    user_id: UserId
    value: Float
    visible_to: String
    weighted_value: Float
    weighted_value_currency: String
    won_time: String
  }

  type CreatorUserId {
    active_flag: Boolean
    email: String
    has_pic: Boolean
    id: Int!
    name: String
    pic_hash: String
    value: Int
  }

  type OrgId {
    active_flag: Boolean
    address: String
    cc_email: String
    name: String
    owner_id: Int
    people_count: Int
    value: Int
  }

  type PersonId {
    value: Int
      active_flag: Boolean
      email: ContactMethod
      name: String
      phone: ContactMethod
  }

  type ContactMethod {
    label: String
    primary: Boolean
    value: String
  }

  type UserId {
    active_flag: Boolean
    email: String
    has_pic: Boolean
    id: Int!
    name: String
    pic_hash: String
    value: Int
  }

  type FindDeal {
    cc_email: String
    currency: String
    formatted_value: String
    id: Int!
    organization_id: Int
    organization_name: String
    person_id: Int
    person_name: String
    status: String
    title: String
    user_id: Int
    value: Int
    visible_to: String
  }

  type DealSummary {
    total_count: Int
    total_currency_converted_value: Float
    total_currency_converted_value_formatted: String
    total_weighted_currency_converted_value: Float
    total_weighted_currency_converted_value_formatted: String
    values_total: ValuesTotal
    weighted_values_total: WeightedValuesTotal
  }

  type ValuesTotal {
    EUR: ValueTotal
    GBP: ValueTotal
  }

  type ValueTotal {
    count: Int
    value: Float
    value_converted: Float
    value_converted_formatted: String
    value_formatted: String
  }

  type WeightedValuesTotal {
    EUR: WeightedValueTotal
    GBP: WeightedValueTotal
  }

  type WeightedValueTotal {
    count: Int
    value: Int
    value_formatted: String
  }

  type DealsTimeline {
    deals: [Deal]
    period_start: String
    period_end: String
  }

  type DealDetail {
    id: Int!
    creator_user_id: CreatorUserId
    user_id: UserId
    person_id: PersonId
    org_id: OrgId
    stage_id: Int
    title: String
    value: Int
    currency: String
    add_time: String
    update_time: String
    stage_change_time: String
    active: Boolean
    deleted: Boolean
    status: String
    probability: Float
    next_activity_date: String
    next_activity_time: String
    next_activity_id: String
    last_activity_id: Int
    last_activity_date: String
    lost_reason: String
    visible_to: String
    close_time: String
    pipeline_id: Int
    won_time: String
    first_won_time: String
    lost_time: String
    products_count: Int
    files_count: Int
    notes_count: Int
    followers_count: Int
    email_messages_count: Int
    activities_count: Int
    done_activities_count: Int
    undone_activities_count: Int
    reference_activities_count: Int
    participants_count: Int
    expected_close_date: String
    last_incoming_mail_time: String
    last_outgoing_mail_time: String
    label: String
    stage_order_nr: Int
    person_name: String
    org_name: String
    next_activity_subject: String
    next_activity_type: String
    next_activity_duration: String
    next_activity_note: String
    formatted_value: String
    weighted_value: Int
    formatted_weighted_value: String
    weighted_value_currency: String
    rotten_time: String
    owner_name: String
    cc_email: String
    org_hidden: Boolean
    person_hidden: Boolean
    average_time_to_won: DealDetailSplitTime
    average_stage_progress: Float
    age: DealDetailSplitTime
    last_activity: Activity
    next_activity: Activity
  }

  type DealDetailSplitTime {
    y: Int
    m: Int
    d: Int
    h: Int
    i: Int
    s: Int
    total_seconds: Int
  }

  type Follower {
    user_id: Int
    id: Int!
    deal_id: Int
    add_time: String
  }

  type Email {
    object: String
    timestamp: String
    data: EmailData
  }

  type EmailData {
    id: Int!
    cc: [EmailParticipant]
    bcc: [EmailParticipant]
    from: [EmailParticipant!]
    to: [EmailParticipant!]
    body_url: String
    account_id: Int
    user_id: Int
    mail_thread_id: Int
    subject: String
    snippet: String
    mail_tracking_status: String
    mail_link_tracking_enabled_flag: Int
    read_flag: Int
    draft: String
    s3_bucket: String
    s3_bucket_path: String
    draft_flag: Int
    synced_flag: Int
    deleted_flag: Int
    has_body_flag: Int
    sent_flag: Int
    sent_from_pipedrive_flag: Int
    smart_bcc_flag: Int
    message_time: String
    add_time: String
    update_time: String
    has_attachments_flag: Int
    has_inline_attachments_flag: Int
    has_real_attachments_flag: Int
    mua_message_id: String
    write_flag: Boolean
    item_type: String
    timestamp: String
    company_id: Int
  }

  type EmailParticipant {
    id: Int!
    email_address: String
    name: String
    linked_person_id: Int
    linked_person_name: String
    mail_message_party_id: Int
  }

  type DealParticipantDetail {
    id: Int!
    person_id: PersonId
    add_time: String
    active_flag: Boolean
    related_item_data: RelatedItemData
    person: Person
    added_by_user_id: AddedByUserId
    related_item_type: String
    related_item_id: Int
  }

  type RelatedItemData {
    deal_id: Int
    title: String
  }

  type Person {
    id: Int!
    company_id: Int
    owner_id: OwnerId
    org_id: OrgId
    name: String
    first_name: String
    last_name: String
    open_deals_count: Int
    related_open_deals_count: Int
    closed_deals_count: Int
    related_closed_deals_count: Int
    participant_open_deals_count: Int
    participant_closed_deals_count: Int
    email_messages_count: Int
    activities_count: Int
    done_activities_count: Int
    undone_activities_count: Int
    reference_activities_count: Int
    files_count: Int
    notes_count: Int
    followers_count: Int
    won_deals_count: Int
    related_won_deals_count: Int
    lost_deals_count: Int
    related_lost_deals_count: Int
    active_flag: Boolean
    phone: ContactMethod
    email: ContactMethod
    first_char: String
    update_time: String
    add_time: String
    visible_to: String
    sync_needed: Boolean
    next_activity_date: String
    next_activity_time: String
    next_activity_id: Int
    last_activity_id: Int
    last_activity_date: String
    last_incoming_mail_time: String
    last_outgoing_mail_time: String
    label: String
    org_name: String
    owner_name: String
    cc_email: String
  }

  type OwnerId {
    id: Int!
    name: String
    email: String
    has_pic: Boolean
    pic_hash: String
    active_flag: Boolean
    value: Int
  }

  type AddedByUserId {
    id: Int!
    name: String
    email: String
    has_pic: Boolean
    pic_hash: String
    active_flag: Boolean
    value: Int
  }

  type File {
    id: Int!
    user_id: Int
    deal_id: Int
    person_id: Int
    org_id: Int
    product_id: Int
    email_message_id: Int
    activity_id: Int
    log_id: Int
    add_time: String
    update_time: String
    file_name: String
    file_type: String
    file_size: Int
    active_flag: Boolean
    inline_flag: Boolean
    remote_location: String
    remote_id: String
    cid: String
    s3_bucket: String
    mail_message_id: Int
    mail_template_id: Int
    deal_name: String
    person_name: String
    org_name: String
    product_name: String
    url: String
    name: String
    description: String
  }

  type Filter {
    id: Int!
    name: String
    active_flag: Boolean
    type: String
    temporary_flag: Boolean
    user_id: Int
    add_time: String
    update_time: String
    visible_to: String
    custom_view_id: Int
  }

  type EmailMessage {
    id: Int!
    from: [EmailParticipant]
    to: [EmailParticipant]
    cc: [EmailParticipant]
    bcc: [EmailParticipant]
    body: String
    body_url: String
    account_id: Int
    user_id: Int
    mail_thread_id: Int
    subject: String
    snippet: String
    mail_tracking_status: String
    mail_link_tracking_enabled_flag: Int
    read_flag: Int
    draft: String
    draft_flag: Int
    synced_flag: Int
    deleted_flag: Int
    has_body_flag: Int
    sent_flag: Int
    sent_from_pipedrive_flag: Int
    smart_bcc_flag: Int
    message_time: String
    add_time: String
    update_time: String
    has_attachments_flag: Int
    has_inline_attachments_flag: Int
    has_real_attachments_flag: Int
    write_flag: Boolean
  }

  type Note {
    id: Int!
    user_id: Int
    deal_id: Int
    person_id: Int
    org_id: Int
    content: String
    add_time: String
    update_time: String
    active_flag: Boolean
    pinned_to_deal_flag: Boolean
    pinned_to_person_flag: Boolean
    pinned_to_organization_flag: Boolean
    last_update_user_id: Int
    organization: NoteItem
    person: NoteItem
    deal: Int
    user: NoteUser
  }

  type NoteItem {
    name: String
  }

  type NoteUser {
    email: String
    name: String
    icon_url: String
    is_you: Boolean
  }

  type Organization {
    id: Int!
    company_id: Int
    owner_id: OrganizationOwnerId
    name: String
    open_deals_count: Int
    related_open_deals_count: Int
    closed_deals_count: Int
    related_closed_deals_count: Int
    email_messages_count: Int
    people_count: Int
    activities_count: Int
    done_activities_count: Int
    undone_activities_count: Int
    reference_activities_count: Int
    files_count: Int
    notes_count: Int
    followers_count: Int
    won_deals_count: Int
    related_won_deals_count: Int
    lost_deals_count: Int
    related_lost_deals_count: Int
    active_flag: Boolean
    category_id: Int
    picture_id: Int
    country_code: String
    first_char: String
    update_time: String
    add_time: String
    visible_to: String
    next_activity_date: String
    next_activity_time: String
    next_activity_id: Int
    last_activity_id: Int
    last_activity_date: String
    label: String
    address: String
    address_subpremise: String
    address_street_number: String
    address_route: String
    address_sublocality: String
    address_locality: String
    address_admin_area_level_1: String
    address_admin_area_level_2: String
    address_country: String
    address_postal_code: String
    address_formatted_address: String
    owner_name: String
    cc_email: String
  }

  type OrganizationOwnerId {
    id: Int!
    name: String
    email: String
    has_pic: Boolean
    pic_hash: String
    active_flag: Boolean
    value: Int
  }

  type Pipeline {
    id: Int!
    name: String
    url_title: String
    order_nr: Int
    active: Boolean
    deal_probability: Boolean
    add_time: String
    update_time: String
    selected: Boolean
  }

  type Stage {
    id: Int!
    order_nr: Int
    name: String
    active_flag: Boolean
    deal_probability: Int
    pipeline_id: Int
    rotten_flag: Boolean
    rotten_days: Int
    add_time: String
    update_time: String
    pipeline_name: String
    pipeline_deal_probability: Boolean
  }

  type User {
    id: Int
    name: String
    default_currency: String
    locale: String
    lang: Int
    email: String
    phone: String
    activated: Boolean
    last_login: String
    created: String
    modified: String
    signup_flow_variation: String
    has_created_company: Boolean
    is_admin: Int
    active_flag: Boolean
    timezone_name: String
    timezone_offset: String
    role_id: Int
    icon_url: String
    is_you: Boolean
  }

  type UserSettings {
    marketplace_allow_custom_install_url: Boolean
    marketplace_app_extensions_vendor: Boolean
    marketplace_app_extensions_panels: Boolean
    marketplace_team: Boolean
    list_limit: Int
    beta_app: Boolean
    prevent_salesphone_callto_override: Boolean
    file_upload_destination: String
    callto_link_syntax: String
    autofill_deal_expected_close_date: Boolean
    person_duplicate_condition: String
    organization_duplicate_condition: String
    add_followers_when_importing: Boolean
    search_backend: String
    billing_managed_by_sales: Boolean
    max_deal_age_in_average_progress_calculation: Int
    elastic_write_target_during_migration: String
    auto_create_new_persons_from_forwarder_emails: Boolean
    company_advanced_debug_logs: Boolean
    deal_block_order: [UserSettingsBlockOrder]
    person_block_order: [UserSettingsBlockOrder]
    organization_block_order: [UserSettingsBlockOrder]
    nylas_sync: Boolean
    onboarding_complete: Boolean
    products: Boolean
    revenue_forecast_feature: Boolean
    sso: Boolean
    superdata: Boolean
    automation_live: Boolean
    sso_login_enabled: Boolean
    enforce_sso: Boolean
    teams: Boolean
    data_police: Boolean
    advanced_permissions: Boolean
    merge_find_change: Boolean
    group_emailing_beta: Boolean
    activity_email_reminders: Boolean
    activity_email_reminders_send_type: String
    activity_email_reminders_amount_before: Int
    activity_notifications_language_id: Int
    file_convert_allowed: Boolean
    default_currency: String
    send_email_notifications: String
    selected_tax_system: String
    show_update_notifications: Boolean
    create_folder_in_google_drive: Boolean
    share_google_drive_files_with_company: Boolean
    deals_timeline_default_field: String
    deals_timeline_interval: String
    deals_timeline_arrange_by: String
    deals_timeline_column_count: Int
    deals_timeline_show_progress: Boolean
    share_incoming_emails: Boolean
    connect_threads_with_deals: Boolean
    email_signature: Boolean
    email_signature_text: String
    global_search_survey_link_clicked: Boolean
    upload_all_visible_persons_to_google: Boolean
    format_phone_numbers_enabled: Boolean
    open_email_links_in_new_tab: Boolean
    totals_convert_currency: Boolean
    email_sync_filter: String
    deal_details_open: Boolean
    person_details_open: Boolean
    organization_details_open: Boolean
    calendar_sync_activity_type: String
    calendar_sync_subject_format: String
    show_calendar_sync_reauthentication_warning: Boolean
    show_calendar_sync_activity_warning: Boolean
    calendar_sync_nylas_connection_scopes: String
    hide_email_settings_promotion_banner: Boolean
    hide_email_reconnect_warning: Boolean
    user_advanced_debug_logs: Boolean
    show_filtercolumns_tutorial: Boolean
    show_duplicates: Boolean
    show_import_tutorial: Boolean
    show_statistics_tutorial: Boolean
    has_seen_mail_welcome_inline_manual: Boolean
    show_activitycrossitem_tutorial: Boolean
    has_seen_dropbox_old_details_deprec_notice: Boolean
    has_seen_automation_welcome_screen: Boolean
    link_person_to_org: Boolean
    timezone_automatic_update: Boolean
    use_pipedrive_mailto_links: Boolean
    ab_mail_promotion1_enabled: Boolean
    promote_gs_filters: Boolean
    promote_gs_notes_and_fields: Boolean
    invitation_last_time: Int
    invitation_resent_count: Int
    expanded_calendar_allday: Boolean
    contacts_timeline_view_mode: String
    timeline_panel_open: Boolean
    timeline_panel_onboarding_done: Boolean
    has_notifications: Boolean
    has_taf_notifications: Boolean
    filters_menu_person_tab_index: Int
    filters_menu_organization_tab_index: Int
    filters_menu_deal_tab_index: Int
    filters_menu_activity_tab_index: Int
    filters_menu_product_tab_index: Int
    superdata_panel_state: SuperdataPanelState
    salesforce_iq_import_clicked: Boolean
    data_police_onboarding_dismiss: Boolean
    important_fields_onboarding_dismiss: Boolean
    scheduler_calendar_sync_message_dismissed: Boolean
    google_contacts_sync_selected: Boolean
    scheduler_ah_onboarding_dismissed: Boolean
    scheduler_default_availability_created: Boolean
    scheduler_onboarding_done: Boolean
    scheduler_manage_modal_selected_tab: String
    caller_default_country: String
    activities_view_mode: String
    current_pipeline_id: Int
    deals_view_mode: String
    filter_activities: String
    filter_deals: String
    filter_pipeline_1: String
    invited_by_user_id: Int
    user_activation_reminders_amount: Int
  }

  type UserSettingsBlockOrder {
    type: String
    visible: Boolean
  }

  type SuperdataPanelState {
    person: String
    person_org: String
    organization: String
    deal_person: String
    deal_org: String
    touched: String
    dismissed: String
  }

  # Enums

  enum DealsStageEnum {
    open
    won
    lost
    deleted
    all_not_deleted
  }
  
  enum DealSummaryStatusEnum {
    open
    won
    lost
  }

  enum DealsTimelineIntervalEnum {
    day
    week
    month
    quarter
  }

  enum FiltersTypeEnum {
    deals
    org
    people
    products
    activity
  }

  # Query

  type Query {
    activities (
      # ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets.
      user_id: Int
      # ID of the filter to use (will narrow down results if used together with user_id parameter).
      filter_id: Int
      # Type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the key_string parameter of ActivityTypes.
      type: String
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
      # Date in format of YYYY-MM-DD from which activities to fetch from.
      start_date: String
      # Date in format of YYYY-MM-DD until which activities to fetch to.
      end_date: String
      # Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done.
      done: Int
    ): [Activity]

    activity (
      # ID of the activity
      id: Int!
    ): Activity

    activityTypes: [ActivityType]

    currencies (
      # Optional search term that is searched for from currency's name and/or code.
      term: String
    ): [Currency]
    
    deals (
      # If supplied, only deals matching the given user will be returned.
      user_id: Int
      # ID of the filter to use
      filter_id: Int
      # If supplied, only deals within the given stage will be returned.
      stage_id: Int
      # Only fetch deals with specific status. If omitted, all not deleted deals are fetched.
      status: DealsStageEnum
      # Pagination start
      start: Int
      # Items shown per page. Default limit is 100, maximum limit is 500.
      limit: Int
      # Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys).
      sort: String
      # When supplied, only deals owned by you are returned. However filter_id takes precedence over owned_by_you when both are supplied.
      owned_by_you: Int
    ): [Deal]

    findDeals (
      # Search term to look for
      term: String!
      # ID of the person deal is associated with.
      person_id: Int
      # ID of the organization deal is associated with.
      org_id: Int
    ): [FindDeal]

    dealSummary (
      # Only fetch deals with specific status. open = Open, won = Won, lost = Lost
      status: DealSummaryStatusEnum
      # user_id will not be considered. Only deals matching the given filter will be returned.
      filter_id: Int
      # Only deals matching the given user will be returned. user_id will not be considered if you use filter_id.
      user_id: Int
      # Only deals within the given stage will be returned.
      stage_id: Int
    ): DealSummary

    dealsTimeline (
      # Date where first interval starts. Format: YYYY-MM-DD
      start_date: String!
      # Type of interval - day: Day, week: A full week (7 days) starting from start_date, month: A full month (depending on the number of days in given month) starting from start_date, quarter: A full quarter (3 months) starting from start_date
      interval: DealsTimelineIntervalEnum!
      # Number of given intervals, starting from start_date, to fetch. E.g. 3 (months).
      amount: Int!
      # The name of the date field by which to get deals by.
      field_key: String
      # If supplied, only deals matching the given user will be returned.
      user_id: Int
      # If supplied, only deals matching the given pipeline will be returned.
      pipeline_id: Int
      # If supplied, only deals matching the given filter will be returned.
      filter_id: Int
      # Whether to exclude deals list (1) or not (0). Note that when deals are excluded, the timeline summary (counts and values) is still returned.
      exclude_deals: Int
      # 3-letter currency code of any of the supported currencies. When supplied, totals_converted is returned per each interval which contains the currency-converted total amounts in the given currency. You may also set this parameter to 'default_currency' in which case users default currency is used.
      totals_convert_currency: String
    ): DealsTimeline

    deal (
      # ID of the deal
      id: Int!
    ): Deal

    dealActivities (
      # ID of the deal
      id: Int!
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
      # Whether to fetch done (1) or undone (0) activities. If omitted from request, both undone and done activities are fetched.
      done: Int
      # A comma-separated string of activity IDs to exclude from result
      exclude: String
    ): [Activity]

    dealFollowers (
      # ID of the deal
      id: Int!
    ): [Follower]

    dealEmails (
      # ID of the deal
      id: Int
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
    ): [Email]

    dealParticipants (
      # ID of the deal
      id: Int!
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
    ): [DealParticipantDetail]

    dealEmailData (
      # ID of the deal
      id: Int!
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
    ): EmailData

    permittedUsers (
      # ID of the deal
      id: Int!
      # If set, filter results by allowed access level. 1 = Read, 2 = Write, 3 = Read+Write
      access_level: Int
    ): [Int]

    associatedPersons (
      # ID of the deal
      id: Int!
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
    ): [Person]

    files (
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
      # When enabled, the list of files will also include deleted files. Please note that trying to download these files will not work.
      include_deleted_files: Int
      # Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, product_id, add_time, update_time, file_name, file_type, file_size, comment.
      sort: String
    ): [File]

    file (
      # ID of the file
      id: Int!
    ): File

    filters (
      # Returns data about all filters
      type: FiltersTypeEnum
    ): [Filter]

    filter (
      # ID of the filter
      id: Int!
    ): Filter

    emailMessage (
      # ID of the mail message to fetch.
      id: Int!
      # Whether to include full message body or not. 0 = Don't include, 1 = Include
      include_body: Int
    ): Email

    notes (
      # ID of the user whose notes to fetch. If omitted, notes by all users will be returned.
      user_id: Int
      # ID of the deal which notes to fetch. If omitted, notes about all deals with be returned.
      deal_id: Int
      # ID of the person whose notes to fetch. If omitted, notes about all persons with be returned.
      person_id: Int
      # ID of the organization which notes to fetch. If omitted, notes about all organizations with be returned.
      org_id: Int
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
      # Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys). Supported fields: id, user_id, deal_id, person_id, org_id, content, add_time, update_time.
      sort: String
      # Date in format of YYYY-MM-DD from which notes to fetch from.
      start_date: String
      # Date in format of YYYY-MM-DD until which notes to fetch to.
      end_date: String
      # If set, then results are filtered by note to deal pinning state.
      pinned_to_deal_flag: Int
      # If set, then results are filtered by note to organization pinning state.
      pinned_to_organization_flag: Int
      # If set, then results are filtered by note to person pinning state.
      pinned_to_person_flag: Int
    ): [Note]

    note (
      # ID of the note
      id: Int!
    ): Note

    organizations (
      # If supplied, only organizations owned by the given user will be returned.
      user_id: Int
      # ID of the filter to use
      filter_id: Int
      # If supplied, only organizations whose name starts with the specified letter will be returned (case insensitive).
      first_char: String
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
      # Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys).
      sort: String
    ): [Organization]

    organization (
      # ID of the note
      id: Int!
    ): Organization

    persons (
      # If supplied, only persons owned by the given user will be returned.
      user_id: Int
      # ID of the filter to use
      filter_id: Int
      # If supplied, only persons whose name starts with the specified letter will be returned (case insensitive).
      first_char: String
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
      # Field names and sorting mode separated by a comma (field_name_1 ASC, field_name_2 DESC). Only first-level field keys are supported (no nested keys).
      sort: String
    ): [Person]

    findPersons (
      # Search term to look for
      term: String!
      # ID of the organization person is associated with.
      org_id: Int
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
      # When enabled, term will only be matched against email addresses of people. Default: false
      search_by_email: Int
    ): [Person]

    person (
      # ID of the person
      id: Int!
    ): Person

    pipelines: [Pipeline]

    pipeline (
      # ID of the pipeline to fetch.
      id: Int!
      # 3-letter currency code of any of the supported currencies. When supplied, per_stages_converted is returned in deals_summary which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to 'default_currency' in which case users default currency is used.
      totals_convert_currency: String
    ): Pipeline

    dealsInPipeline (
      # ID of the pipeline to fetch.
      id: Int!
      # If supplied, only deals matching the given filter will be returned.
      filter_id: Int
      # If supplied, filter_id will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned.
      user_id: Int
      # If supplied, filter_id and user_id will not be considered – instead, deals owned by everyone will be returned.
      everyone: Int
      # If supplied, only deals within the given stage will be returned.
      stage_id: Int
      # Pagination start
      start: Int
      # Items shown per page
      limit: Int
      # Whether to include summary of the pipeline in the additional_data or not.
      get_summary: Int
      # 3-letter currency code of any of the supported currencies. When supplied, per_stages_converted is returned inside deals_summary inside additional_data which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to 'default_currency' in which case users default currency is used. Only works when get_summary parameter flag is enabled.
      totals_convert_currency: String
    ): [Deal]

    stages (
      # ID of the pipeline to fetch stages for. If omitted, stages for all pipelines will be fetched.
      pipeline_id: Int
    ): [Stage]

    stage (
      # ID of the stage
      id: Int!
    ): Stage

    users: [User]

    findUsers (
      # Search term to look for
      term: String
      # When enabled, term will only be matched against email addresses of users. Default: false
      search_by_email: Int
    ): [User]

    user (
      # ID of the user to fetch.
      id: Int!
    ): User

    userSettings: UserSettings
  }
`
