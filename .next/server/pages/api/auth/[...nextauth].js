"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/auth0":
/*!********************************************!*\
  !*** external "next-auth/providers/auth0" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/auth0");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/auth0 */ \"next-auth/providers/auth0\");\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// import AppleProvider from \"next-auth/providers/apple\"\n// import EmailProvider from \"next-auth/providers/email\"\n// For more information on each option (and a full list of options) go to\n// https://next-auth.js.org/configuration/options\nconst authOptions = {\n    // https://next-auth.js.org/configuration/providers/oauth\n    providers: [\n        /* EmailProvider({\n         server: process.env.EMAIL_SERVER,\n         from: process.env.EMAIL_FROM,\n       }),\n    // Temporarily removing the Apple provider from the demo site as the\n    // callback URL for it needs updating due to Vercel changing domains\n\n    Providers.Apple({\n      clientId: process.env.APPLE_ID,\n      clientSecret: {\n        appleId: process.env.APPLE_ID,\n        teamId: process.env.APPLE_TEAM_ID,\n        privateKey: process.env.APPLE_PRIVATE_KEY,\n        keyId: process.env.APPLE_KEY_ID,\n      },\n    }),\n    */ next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.FACEBOOK_ID,\n            clientSecret: process.env.FACEBOOK_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.TWITTER_ID,\n            clientSecret: process.env.TWITTER_SECRET\n        }),\n        next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.AUTH0_ID,\n            clientSecret: process.env.AUTH0_SECRET,\n            issuer: process.env.AUTH0_ISSUER\n        })\n    ],\n    theme: {\n        colorScheme: \"light\"\n    },\n    callbacks: {\n        async jwt ({ token  }) {\n            token.userRole = \"admin\";\n            return token;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ0U7QUFDSTtBQUNKO0FBQ0U7QUFDSjtBQUNyRCx3REFBd0Q7QUFDeEQsd0RBQXdEO0FBRXhELHlFQUF5RTtBQUN6RSxpREFBaUQ7QUFDMUMsTUFBTU0sY0FBK0I7SUFDMUMseURBQXlEO0lBQ3pEQyxXQUFXO1FBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkEsR0FDQUwsbUVBQWdCQSxDQUFDO1lBQ2ZNLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztZQUNqQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxlQUFlO1FBQzNDO1FBQ0FWLGlFQUFjQSxDQUFDO1lBQ2JLLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkYsY0FBY0gsUUFBUUMsR0FBRyxDQUFDSyxhQUFhO1FBQ3pDO1FBQ0FkLGlFQUFjQSxDQUFDO1lBQ2JPLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ00sU0FBUztZQUMvQkosY0FBY0gsUUFBUUMsR0FBRyxDQUFDTyxhQUFhO1FBQ3pDO1FBQ0FiLGtFQUFlQSxDQUFDO1lBQ2RJLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ1EsVUFBVTtZQUNoQ04sY0FBY0gsUUFBUUMsR0FBRyxDQUFDUyxjQUFjO1FBQzFDO1FBQ0FkLGdFQUFhQSxDQUFDO1lBQ1pHLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ1UsUUFBUTtZQUM5QlIsY0FBY0gsUUFBUUMsR0FBRyxDQUFDVyxZQUFZO1lBQ3RDQyxRQUFRYixRQUFRQyxHQUFHLENBQUNhLFlBQVk7UUFDbEM7S0FDRDtJQUNEQyxPQUFPO1FBQ0xDLGFBQWE7SUFDZjtJQUNBQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsRUFBRTtZQUNuQkEsTUFBTUMsUUFBUSxHQUFHO1lBQ2pCLE9BQU9EO1FBQ1Q7SUFDRjtBQUNGLEVBQUM7QUFFRCxpRUFBZTVCLGdEQUFRQSxDQUFDTSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxuaW1wb3J0IEZhY2Vib29rUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZmFjZWJvb2tcIlxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5pbXBvcnQgVHdpdHRlclByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL3R3aXR0ZXJcIlxuaW1wb3J0IEF1dGgwUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvYXV0aDBcIlxuLy8gaW1wb3J0IEFwcGxlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvYXBwbGVcIlxuLy8gaW1wb3J0IEVtYWlsUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZW1haWxcIlxuXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBlYWNoIG9wdGlvbiAoYW5kIGEgZnVsbCBsaXN0IG9mIG9wdGlvbnMpIGdvIHRvXG4vLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vcHJvdmlkZXJzL29hdXRoXG4gIHByb3ZpZGVyczogW1xuICAgIC8qIEVtYWlsUHJvdmlkZXIoe1xuICAgICAgICAgc2VydmVyOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVIsXG4gICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgICAgIH0pLFxuICAgIC8vIFRlbXBvcmFyaWx5IHJlbW92aW5nIHRoZSBBcHBsZSBwcm92aWRlciBmcm9tIHRoZSBkZW1vIHNpdGUgYXMgdGhlXG4gICAgLy8gY2FsbGJhY2sgVVJMIGZvciBpdCBuZWVkcyB1cGRhdGluZyBkdWUgdG8gVmVyY2VsIGNoYW5naW5nIGRvbWFpbnNcblxuICAgIFByb3ZpZGVycy5BcHBsZSh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVBQTEVfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHtcbiAgICAgICAgYXBwbGVJZDogcHJvY2Vzcy5lbnYuQVBQTEVfSUQsXG4gICAgICAgIHRlYW1JZDogcHJvY2Vzcy5lbnYuQVBQTEVfVEVBTV9JRCxcbiAgICAgICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuQVBQTEVfUFJJVkFURV9LRVksXG4gICAgICAgIGtleUlkOiBwcm9jZXNzLmVudi5BUFBMRV9LRVlfSUQsXG4gICAgICB9LFxuICAgIH0pLFxuICAgICovXG4gICAgRmFjZWJvb2tQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBHaXRodWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXG4gICAgfSksXG4gICAgVHdpdHRlclByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5UV0lUVEVSX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5UV0lUVEVSX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBBdXRoMFByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5BVVRIMF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfU0VDUkVULFxuICAgICAgaXNzdWVyOiBwcm9jZXNzLmVudi5BVVRIMF9JU1NVRVIsXG4gICAgfSksXG4gIF0sXG4gIHRoZW1lOiB7XG4gICAgY29sb3JTY2hlbWU6IFwibGlnaHRcIixcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4gfSkge1xuICAgICAgdG9rZW4udXNlclJvbGUgPSBcImFkbWluXCJcbiAgICAgIHJldHVybiB0b2tlblxuICAgIH0sXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJGYWNlYm9va1Byb3ZpZGVyIiwiR2l0aHViUHJvdmlkZXIiLCJUd2l0dGVyUHJvdmlkZXIiLCJBdXRoMFByb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJGQUNFQk9PS19JRCIsImNsaWVudFNlY3JldCIsIkZBQ0VCT09LX1NFQ1JFVCIsIkdJVEhVQl9JRCIsIkdJVEhVQl9TRUNSRVQiLCJHT09HTEVfSUQiLCJHT09HTEVfU0VDUkVUIiwiVFdJVFRFUl9JRCIsIlRXSVRURVJfU0VDUkVUIiwiQVVUSDBfSUQiLCJBVVRIMF9TRUNSRVQiLCJpc3N1ZXIiLCJBVVRIMF9JU1NVRVIiLCJ0aGVtZSIsImNvbG9yU2NoZW1lIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyUm9sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();