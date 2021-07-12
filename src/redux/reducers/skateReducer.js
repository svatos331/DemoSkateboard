import { ADD_TRACK } from "../actions/skateboard/tracksActions";
import { SET_LOGIN } from "../actions/skateboard/loginActions";
const initialState = {
  tracks: [
    {
      track: 1,
      name: "All This Is - Joe L.'s Studio",
      duration: "2:46",
      file: "JLS_ATI",
    },
    {
      track: 2,
      name: "The Forsaken - Broadwing Studio (Final Mix)",
      duration: "8:30",
      file: "BS_TF",
    },
    {
      track: 3,
      name: "All The King's Men - Broadwing Studio (Final Mix)",
      duration: "5:01",
      file: "BS_ATKM",
    },
    {
      track: 4,
      name: "The Forsaken - Broadwing Studio (First Mix)",
      duration: "8:31",
      file: "BSFM_TF",
    },
    {
      track: 5,
      name: "All The King's Men - Broadwing Studio (First Mix)",
      duration: "5:05",
      file: "BSFM_ATKM",
    },
    {
      track: 6,
      name: "All This Is - Alternate Cuts",
      duration: "2:48",
      file: "AC_ATI",
    },
    {
      track: 7,
      name: "All The King's Men (Take 1) - Alternate Cuts",
      duration: "5:44",
      file: "AC_ATKMTake_1",
    },
    {
      track: 8,
      name: "All The King's Men (Take 2) - Alternate Cuts",
      duration: "5:26",
      file: "AC_ATKMTake_2",
    },
    {
      track: 9,
      name: "Magus - Alternate Cuts",
      duration: "5:46",
      file: "AC_M",
    },
    {
      track: 10,
      name: "The State Of Wearing Address (fucked up) - Alternate Cuts",
      duration: "5:25",
      file: "AC_TSOWAfucked_up",
    },
    {
      track: 11,
      name: "Magus - Popeye's (New Years '04 - '05)",
      duration: "5:53",
      file: "PNY04-05_M",
    },
    {
      track: 12,
      name: "On The Waterfront - Popeye's (New Years '04 - '05)",
      duration: "4:40",
      file: "PNY04-05_OTW",
    },
    {
      track: 13,
      name: "Trance - Popeye's (New Years '04 - '05)",
      duration: "13:15",
      file: "PNY04-05_T",
    },
    {
      track: 14,
      name: "The Forsaken - Popeye's (New Years '04 - '05)",
      duration: "8:12",
      file: "PNY04-05_TF",
    },
    {
      track: 15,
      name: "The State Of Wearing Address - Popeye's (New Years '04 - '05)",
      duration: "7:02",
      file: "PNY04-05_TSOWA",
    },
    {
      track: 16,
      name: "Magus - Popeye's (Valentine's Day '05)",
      duration: "5:43",
      file: "PVD_M",
    },
    {
      track: 17,
      name: "Trance - Popeye's (Valentine's Day '05)",
      duration: "10:45",
      file: "PVD_T",
    },
    {
      track: 18,
      name: "The State Of Wearing Address - Popeye's (Valentine's Day '05)",
      duration: "5:36",
      file: "PVD_TSOWA",
    },
    {
      track: 19,
      name: "All This Is - Smith St. Basement (01/08/04)",
      duration: "2:48",
      file: "SSB01_08_04_ATI",
    },
    {
      track: 20,
      name: "Magus - Smith St. Basement (01/08/04)",
      duration: "5:46",
      file: "SSB01_08_04_M",
    },
    {
      track: 21,
      name: "Beneath The Painted Eye - Smith St. Basement (06/06/03)",
      duration: "13:07",
      file: "SSB06_06_03_BTPE",
    },
    {
      track: 22,
      name: "Innocence - Smith St. Basement (06/06/03)",
      duration: "5:16",
      file: "SSB06_06_03_I",
    },
    {
      track: 23,
      name: "Magus - Smith St. Basement (06/06/03)",
      duration: "5:46",
      file: "SSB06_06_03_M",
    },
    {
      track: 24,
      name: "Madness Explored - Smith St. Basement (06/06/03)",
      duration: "4:51",
      file: "SSB06_06_03_ME",
    },
    {
      track: 25,
      name: "The Forsaken - Smith St. Basement (06/06/03)",
      duration: "8:43",
      file: "SSB06_06_03_TF",
    },
    {
      track: 26,
      name: "All This Is - Smith St. Basement (12/28/03)",
      duration: "3:00",
      file: "SSB12_28_03_ATI",
    },
    {
      track: 27,
      name: "Magus - Smith St. Basement (12/28/03)",
      duration: "6:09",
      file: "SSB12_28_03_M",
    },
    {
      track: 28,
      name: "Madness Explored - Smith St. Basement (12/28/03)",
      duration: "5:05",
      file: "SSB12_28_03_ME",
    },
    {
      track: 29,
      name: "Trance - Smith St. Basement (12/28/03)",
      duration: "12:32",
      file: "SSB12_28_03_T",
    },
    {
      track: 30,
      name: "The Forsaken - Smith St. Basement (12/28/03)",
      duration: "8:56",
      file: "SSB12_28_03_TF",
    },
    {
      track: 31,
      name: "All This Is (Take 1) - Smith St. Basement (Nov. '03)",
      duration: "4:55",
      file: "SSB___11_03_ATITake_1",
    },
    {
      track: 32,
      name: "All This Is (Take 2) - Smith St. Basement (Nov. '03)",
      duration: "5:45",
      file: "SSB___11_03_ATITake_2",
    },
    {
      track: 33,
      name: "Beneath The Painted Eye (Take 1) - Smith St. Basement (Nov. '03)",
      duration: "14:05",
      file: "SSB___11_03_BTPETake_1",
    },
    {
      track: 34,
      name: "Beneath The Painted Eye (Take 2) - Smith St. Basement (Nov. '03)",
      duration: "13:25",
      file: "SSB___11_03_BTPETake_2",
    },
    {
      track: 35,
      name: "The Forsaken (Take 1) - Smith St. Basement (Nov. '03)",
      duration: "8:37",
      file: "SSB___11_03_TFTake_1",
    },
    {
      track: 36,
      name: "The Forsaken (Take 2) - Smith St. Basement (Nov. '03)",
      duration: "8:36",
      file: "SSB___11_03_TFTake_2",
    },
  ],
  bookmark: [
    {
      id: 1,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "23k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 4,
    },
    {
      id: 2,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Sergo William",
      completed: true,
      views: "3k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 3,
    },
    {
      id: 3,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "13k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 2,
    },
    {
      id: 4,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "59k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 8,
    },
    {
      id: 5,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "59k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 8,
    },
    {
      id: 6,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "59k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 8,
    },
    {
      id: 7,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "59k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 8,
    },
    {
      id: 8,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "59k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 8,
    },
    {
      id: 9,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "59k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 8,
    },
    {
      id: 10,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "59k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 8,
    },
  ],
  lists: [
    {
      id: 1,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "23k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 4,
    },
    {
      id: 2,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Sergo William",
      completed: true,
      views: "3k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 3,
    },
    {
      id: 3,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "13k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 2,
    },
    {
      id: 4,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "59k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 8,
    },
  ],
  channelLists: [
    {
      id: 1,
      blackImg: "https://assets.codepen.io/3364143/skate-removebg-preview.png",
      userImg:
        "https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      userName: "Andy William",
      completed: true,
      views: "23k",
      ago: 1,
      desc: "How to do Basic Jumping and how to landing safely",
      timeMach: 4,
    },
    {
      id: 2,
      blackImg:
        "https://c0.anyrgb.com/images/1020/945/venice-beach-2018-outdoors-sport-men-jumping-desert-sunset-extreme-sports-one-person-action.jpg",
      userImg:
        "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      userName: "Tony Andrew",
      completed: true,
      views: "23k",
      ago: 1,
      desc: "Skateboard Tips You need to know",
      timeMach: 4,
    },
  ],
  userData: {
    email: "",
    fio: "",
  },
  profile: {
    name: "Quan Ha",
    avatar:
      "https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg",
    friends: [
      {
        id: 0,
        image:
          "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0f",
        name: "Chandelio",
      },
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=d5849d81af587a09dbcf3f11f6fa122f",
        name: "Janet Jolie",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Patrick Watsons",
      },
    ],
    introduction: {
      designAt: "Bravebist",
      liveIn: "Hanoi, Vietnam",
    },
    album: {
      type: "album",
      time: "6 hours ago",
      text: "When the bass drops, so do my problems.",
      images: [
        {
          id: 0,
          src:
            "https://images.unsplash.com/photo-1508179719682-dbc62681c355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80",
          main: true,
        },
        {
          id: 1,
          src:
            "https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
          main: false,
        },
        {
          id: 2,
          src:
            "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          main: false,
        },
      ],
      likes: 87,
      comments: 20,
      reposts: 13,
    },
  },
};
export const skateReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TRACK: {
      const oldState = state.tracks;
      const { value } = actions;
      oldState.push(value);
      return { ...state, tracks: oldState };
      break;
    }
    case SET_LOGIN: {
      const { value } = actions;
      const data = {
        email: value.email,
        fio: value.fio,
      };
      // debugger;
      return { ...state, userData: data };
      break;
    }
    default:
      return state;
  }
};
