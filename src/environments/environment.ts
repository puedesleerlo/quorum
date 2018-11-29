// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDnK2_LePlHprge2-jmR7zWQWOhFOc1D9g",
    authDomain: "quorum-d30f8.firebaseapp.com",
    databaseURL: "https://quorum-d30f8.firebaseio.com",
    projectId: "quorum-d30f8",
    storageBucket: "quorum-d30f8.appspot.com",
    messagingSenderId: "670435662677"
  },
  apiBlog: 'https://public-api.wordpress.com/rest/v1.1/sites/corporacionquorum.wordpress.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
