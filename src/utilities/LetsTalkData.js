 import formattedCountries from "@/components/Letstalk/CountryCode";

export const Lets_talkData = [
  {
    title: "Business Proposal",
    text: "If you go over your organisation's or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
    img: "https://cdni.iconscout.com/illustration/premium/thumb/woman-login-into-banking-app-5194430-4341049.png",
    borderColor: "#44ff00",
    stepsData: [
      {
        title: "Basic Info",
        fields: [
          {
            fieldName: "Name",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your name",
            max:6000
          },
          {
            fieldName: "Email",
            inputType: "text",
            datatype: "email",
            placeholder: "Enter your email",
            max:100
          },
          {
            fieldName: "Country Code",
            inputType: "dropdown",
            datatype: "text",
            options: formattedCountries,
            placeholder: "Select your Country Code",
          },
          {
            fieldName: "Phone No",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your phone number",
            max:10
          },
        ],
      },
      {
        title: "Org Info",
        fields: [
          {
            fieldName: "Org Name",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your organization name",
            max:6000
          },
          {
            fieldName: "Industry",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your Industry category",
            max:6000
          },
          {
            fieldName: "LinkedIn URL",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your LinkedIn URL",
            max:6000
          },
          {
            fieldName: "Description",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Enter your organization description",
            max:6000
          },
        ],
      },
      {
        title: "Business Idea",
        fields: [
          {
            fieldName: "Business Idea",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Enter your business idea",
            max:6000
          },
          {
            fieldName: "Problem",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Describe the problem you're solving",
            max:6000
          },
          {
            fieldName: "Solution",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Describe your solution",
            max:6000
          },
          {
            fieldName: "Budget",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your budget",
            max:100
          },
          {
            fieldName: "Team Size",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your team size",
            max:100
          },
        ],
      },
    ],
  },
  {
    title: "Project Proposal",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
    img: "https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png?f=webp",
    borderColor: "#ebf707",
    stepsData: [
      {
        title: "Basic Info",
        fields: [
          {
            fieldName: "Name",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your name",
            max:6000
          },
          {
            fieldName: "Email",
            inputType: "text",
            datatype: "email",
            placeholder: "Enter your email",
            max:200
          },
          {
            fieldName: "Country Code",
            inputType: "dropdown",
            datatype: "text",
           options: formattedCountries,
            placeholder: "Select your Country Code",
          },
          {
            fieldName: "Phone No",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your phone number",
            max:10
          },
        ],
      },
      {
        title: "Org Info",
        fields: [
          {
            fieldName: "Org Name",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Enter your organization name",
            max:6000
          },
          {
            fieldName: "Project Idea",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Enter your project idea",
            max:6000
          },
        ],
      },
      {
        title: "Project Details",
        fields: [
          {
            fieldName: "Idea",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Enter your project idea",
            max:6000
          },
          {
            fieldName: "Expected Budget",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your expected budget",
            max:100
          },
          {
            fieldName: "Team Size",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your team size",
            max:100
          },
          {
            fieldName: "Project Duration[In months]",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your project duration in months",
            max:100
          },
        ],
      },
    ],
  },
  {
    title: "Join Us",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
    img: "https://fiftytwodigital.com/wp-content/uploads/2022/02/joinus.png",
    borderColor: "#fa2335",
    stepsData: [
      {
        title: "Basic Info",
        fields: [
          {
            fieldName: "Name",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your name",
            max:6000
          },
          {
            fieldName: "Email",
            inputType: "text",
            datatype: "email",
            placeholder: "Enter your email",
            max:200
          },
          {
            fieldName: "Age",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your age",
            max:100
          },
          {
            fieldName: "Gender",
            inputType: "dropdown",
            datatype: "text",
            options: ["Male", "Female", "Other"],
            placeholder: "Select your gender",
          },
        ],
      },
      {
        title: "Career Info",
        fields: [
          {
            fieldName: "Qualification",
            inputType: "dropdown",
            datatype: "text",
            options: [
              "Post Graduate",
              "Graduate",
              "Under Graduate",
              "Diploma",
              "Secondary Education",
            ],
            placeholder: "Select your qualification",
          },
          {
            fieldName: "Occupation",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your occupation",
            max:6000
          },
        ],
      },
      {
        title: "Reasons",
        fields: [
          {
            fieldName: "Why Join Us",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Enter why you want to join us",
            max:6000
          },
          {
            fieldName: "Role Preference",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Enter your role preference",
            max:6000
          },
        ],
      },
    ],
  },
  {
    title: "Query",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
    img: "https://cdn-icons-png.flaticon.com/512/9821/9821130.png",
    borderColor: "#f59842",
    stepsData: [
      {
        title: "Basic Info",
        fields: [
          {
            fieldName: "Name",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your name",
            max:6000
          },
          {
            fieldName: "Email",
            inputType: "text",
            datatype: "email",
            placeholder: "Enter your email",
            max:100
          },
          {
            fieldName: "Country Code",
            inputType: "dropdown",
            datatype: "text",
           options: formattedCountries,
            placeholder: "Select your Country Code",
          },
          {
            fieldName: "Phone No",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your phone number",
            max:10
          },
        ],
      },
      {
        title: "Query",
        fields: [
          {
            fieldName: "Query Type",
            inputType: "dropdown",
            datatype: "text",
            options: ["option 1", "option 2"],
            placeholder: "Select your query type",
          },
          {
            fieldName: "Emergency Type",
            inputType: "dropdown",
            datatype: "text",
            options: ["option 1", "option 2"],
            placeholder: "Select your emergency type",
          },
          {
            fieldName: "Message",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Enter your message",
            max:6000
          },
        ],
      },
    ],
  },
  {
    title: "Event Hosting",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
    active: false,
    img: "https://png.pngtree.com/png-vector/20220811/ourmid/pngtree-radio-show-host-and-guest-flat-color-vector-faceless-characters-png-image_5844342.png",
    borderColor: "#b2f084",
    stepsData: [
      {
        title: "Basic Info",
        fields: [
          {
            fieldName: "Name",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your name",
            max:6000
          },
          {
            fieldName: "Email",
            inputType: "text",
            datatype: "email",
            placeholder: "Enter your email",
            max:200
          },
          {
            fieldName: "Country Code",
            inputType: "dropdown",
            datatype: "text",
           options: formattedCountries,
            placeholder: "Select your Country Code",
          },
          {
            fieldName: "Phone No",
            inputType: "text",
            datatype: "number",
            placeholder: "Enter your phone number",
            max:10
          },
        ],
      },
      {
        title: "Org Info",
        fields: [
          {
            fieldName: "Org Name",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your organization name",
            max:6000
          },
          {
            fieldName: "Industry",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your Industry category",
          },
          {
            fieldName: "LinkedIn URL",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your LinkedIn URL",
            max:6000
          },
          {
            fieldName: "Description",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Enter your organization description",
            max:6000
          },
        ],
      },
      {
        title: "Event Info",
        fields: [
          {
            fieldName: "Event Name",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your event name",
            max:6000
          },
          {
            fieldName: "Event Type",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your event type",
            max:6000
          },
          {
            fieldName: "Event Description",
            inputType: "textarea",
            datatype: "text",
            placeholder: "Enter your event description",
            max:6000
          },
          {
            fieldName: "Partnership Details",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your partnership details",
            max:6000
          },
          {
            fieldName: "Dates",
            inputType: "text",
            datatype: "text",
            placeholder: "Enter your event dates",
            max:6000
          },
        ],
      },
    ],
  },
];
