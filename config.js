// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Mai 🐼 !",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning",
  greetingAfternoon: "Good afternoon",
  greetingEvening: "Good evening",
  greetingNight: "Go to Sleep",

  // Weather
  weatherKey: "91e2dc7636f95acddb41f5b7e93b8b8d",
  weatherIcons: "Nord", // 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "48.856613",
  defaultLongitude: "2.352222",

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: "1",
      name: "Notion",
      icon: "book",
      link: "https://www.notion.so/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      id: "3",
      name: "Twitter",
      icon: "twitter",
      link: "https://twitter.com/home",
    },
    {
      id: "4",
      name: "Twitch",
      icon: "twitch",
      link: "https://www.twitch.tv/",
    },
    {
      id: "5",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "6",
      name: "Youtube",
      icon: "youtube",
      link: "https://www.youtube.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: "music",
  secondListIcon: "coffee",

  // Links
  lists: {
    firstList: [
      {
        name: "Inspirational",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        name: "Classic",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        name: "Oldies",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        name: "Rock",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
    secondList: [
      {
        name: "Outlook",
        link: "https://mail.insee.net/owa/",
      },
      {
        name: "Drive",
        link: "https://drive.google.com/drive/u/0/my-drive",
      },
      {
        name: "Reddit",
        link: "https://www.reddit.com/",
      },
      {
        name: "Github",
        link: "https://github.com/",
      },
    ],
  },
};
