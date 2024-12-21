/*   STEP 1   */
export const leagueID = "1048396348715933696"; // your league ID
export const leagueName = "East Coast Invitational"; // your league name
export const dues = 20; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
       "managerID": "1001537252163465216",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Greg",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "New Jersey", // (optional)
       "bio": "We love Saquon Barkley",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Alex", // Can be anything (usually your rival's name)
         link: 1, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
      "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "managerID": "1004282618680025088",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Alex",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "New Jersey", // (optional)
       "bio": "All In -Jerry Jones",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Greg", // Can be anything (usually your rival's name)
         link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
      "favoritePlayer": 4031, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "All in baby",
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
      "managerID": "466670539482591232",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Zack",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pennsylvania", // (optional)
      "bio": "Nerd, perma yapping",
      "photo": "/managers/zack.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Ed", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
     "favoritePlayer": 5362, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "The Jonathan Brooks trade started my tank fr",
     "tradingScale": 9, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "1003375951054516224",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Ed",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "Dictator Edge",
     // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Greg", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
     "favoritePlayer": 5870, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Has been a dictator from a young age",
     "tradingScale": 9, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "1002061393849307136",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Darayus",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Colorado?", // (optional)
      "bio": "The champ is here",
     // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Greg", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
     "favoritePlayer": 9484, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Won the 'ship in 2023",
     "tradingScale": 7, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "1003388790389587968",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Eli",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "Original tank",
     // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Miles", // Can be anything (usually your rival's name)
        link: 11, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
     "favoritePlayer": 188, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Just has to manage better than Gettleman",
     "tradingScale": 5, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "1003427287276040192",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Lucas",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "The artist formerly known as Cohen",
     // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Alex", // Can be anything (usually your rival's name)
        link: 1, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
     "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Always have a backup plan",
     "tradingScale": 7, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "1003804124162408448",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Boo",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "His name scares you but his team doesn't...",
     // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Ed", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
     "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Will trade for midget strippers",
     "tradingScale": 9, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "f0edbf4278f53f9425db175073df6584",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Tuff",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "AFK",
     // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     //"fantasyStart": null, // (optional) when did the manager start playing fantasy football
      //"favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        //name: "Ed", // Can be anything (usually your rival's name)
        //link: 3, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
     //"favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     //"valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     //"rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Has sent a grand total of 12 messages in 2 years",
     "tradingScale": 1, // 1 - 10
     "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "1004883006722600960",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Kwesi",
     "tookOver": 2024, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "First to take over",
     // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Darayus", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
     //"favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Took over a bad team and has yet to fix it",
     "tradingScale": 5, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "1004924265243815936",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Bagels",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York", // (optional)
      "bio": "CMC or bust",
     // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        //name: "Darayus", // Can be anything (usually your rival's name)
        //link: 4, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
     //"favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "If CMC stays healthy he could win the league",
     "tradingScale": 6, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "1004954258292170752",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Miles",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "AFK",
     // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
     //"fantasyStart": null, // (optional) when did the manager start playing fantasy football
      //"favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      //"mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Eli", // Can be anything (usually your rival's name)
        link: 5, // manager array number within this array, or null to link back to all managers page
       // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
     //"favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     //"valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     //"rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
     "philosophy": "Has sent a grand total of 3 messages in 2 years",
     "tradingScale": 4, // 1 - 10
     "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    