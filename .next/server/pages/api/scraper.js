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
exports.id = "pages/api/scraper";
exports.ids = ["pages/api/scraper"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cheerio");

/***/ }),

/***/ "cheerio-tableparser":
/*!**************************************!*\
  !*** external "cheerio-tableparser" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("cheerio-tableparser");

/***/ }),

/***/ "(api)/./pages/api/scraper.js":
/*!******************************!*\
  !*** ./pages/api/scraper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst axios = __webpack_require__(/*! axios */ \"axios\");\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\");\nconst cheerioTableparser = __webpack_require__(/*! cheerio-tableparser */ \"cheerio-tableparser\");\nconst url = \"https://icy.tools/\";\nfunction handler(req, res) {\n    return new Promise((resolve, reject)=>{\n        axios(url).then((response)=>{\n            const html = response.data;\n            const $ = cheerio.load(html);\n            const arr = [];\n            $(\"table > tbody > tr > td\").each((index, element)=>{\n                arr.push($(element).text());\n            });\n            res.status(200).json(arr);\n            resolve();\n        }).catch((error)=>{\n            res.json(error);\n            res.status(405).end();\n            resolve(); // in case something goes wrong in the catch block (as vijay commented)\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2NyYXBlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQU87QUFDN0IsS0FBSyxDQUFDQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsd0JBQVM7QUFDakMsS0FBSyxDQUFDRSxrQkFBa0IsR0FBR0YsbUJBQU8sQ0FBQyxnREFBcUI7QUFFeEQsS0FBSyxDQUFDRyxHQUFHLEdBQUcsQ0FBb0I7QUFFakIsUUFBUSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQ0MsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sR0FBSyxDQUFDO1FBQ3ZDVixLQUFLLENBQUNJLEdBQUcsRUFDTk8sSUFBSSxFQUFFQyxRQUFRLEdBQUssQ0FBQztZQUNuQixLQUFLLENBQUNDLElBQUksR0FBR0QsUUFBUSxDQUFDRSxJQUFJO1lBQzFCLEtBQUssQ0FBQ0MsQ0FBQyxHQUFHYixPQUFPLENBQUNjLElBQUksQ0FBQ0gsSUFBSTtZQUMzQixLQUFLLENBQUNJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDZEYsQ0FBQyxDQUFDLENBQXlCLDBCQUFFRyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxHQUFLLENBQUM7Z0JBQ3JESCxHQUFHLENBQUNJLElBQUksQ0FBQ04sQ0FBQyxDQUFDSyxPQUFPLEVBQUVFLElBQUk7WUFDMUIsQ0FBQztZQUNEZixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNQLEdBQUc7WUFDeEJSLE9BQU87UUFDVCxDQUFDLEVBQ0FnQixLQUFLLEVBQUVDLEtBQUssR0FBSyxDQUFDO1lBQ2pCbkIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDRSxLQUFLO1lBQ2RuQixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxFQUFFSSxHQUFHO1lBQ25CbEIsT0FBTyxHQUFJLENBQXVFO1FBQ3BGLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9zY3JhcGVyLmpzPzE2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5jb25zdCBjaGVlcmlvID0gcmVxdWlyZShcImNoZWVyaW9cIik7XG5jb25zdCBjaGVlcmlvVGFibGVwYXJzZXIgPSByZXF1aXJlKFwiY2hlZXJpby10YWJsZXBhcnNlclwiKTtcblxuY29uc3QgdXJsID0gXCJodHRwczovL2ljeS50b29scy9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zKHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBodG1sID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChodG1sKTtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgICQoXCJ0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZFwiKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGFyci5wdXNoKCQoZWxlbWVudCkudGV4dCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFycik7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlcy5qc29uKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICAgICAgICByZXNvbHZlKCk7IC8vIGluIGNhc2Ugc29tZXRoaW5nIGdvZXMgd3JvbmcgaW4gdGhlIGNhdGNoIGJsb2NrIChhcyB2aWpheSBjb21tZW50ZWQpXG4gICAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiY2hlZXJpbyIsImNoZWVyaW9UYWJsZXBhcnNlciIsInVybCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXNwb25zZSIsImh0bWwiLCJkYXRhIiwiJCIsImxvYWQiLCJhcnIiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwicHVzaCIsInRleHQiLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/scraper.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/scraper.js"));
module.exports = __webpack_exports__;

})();