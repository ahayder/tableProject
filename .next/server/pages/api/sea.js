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
exports.id = "pages/api/sea";
exports.ids = ["pages/api/sea"];
exports.modules = {

/***/ "opensea-scraper":
/*!**********************************!*\
  !*** external "opensea-scraper" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("opensea-scraper");

/***/ }),

/***/ "(api)/./pages/api/sea.js":
/*!**************************!*\
  !*** ./pages/api/sea.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst OpenseaScraper = __webpack_require__(/*! opensea-scraper */ \"opensea-scraper\");\nconst options = {\n    debug: false,\n    logs: false,\n    sort: true,\n    browserInstance: undefined\n};\nconst getInfoBySlug = async (slug)=>{\n    // get basic info (from the opensea API)\n    const result = await OpenseaScraper.basicInfo(slug);\n    // get offers from opensea. Each offer includes the floor price, tokenName,\n    // tokenId, tokenContractAddress and offerUrl\n    // let result = await OpenseaScraper.offers(slug, options);\n    console.log(\"result\", result); // result object contains keys `stats` and `offers`\n    return result;\n};\nfunction handler(req, res) {\n    getInfoBySlug(\"cool-cats-nft\").then((result)=>{\n        res.status(200).json(result);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyx3Q0FBaUI7QUFFaEQsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNmQyxLQUFLLEVBQUUsS0FBSztJQUNaQyxJQUFJLEVBQUUsS0FBSztJQUNYQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxlQUFlLEVBQUVDLFNBQVM7QUFDNUIsQ0FBQztBQUVELEtBQUssQ0FBQ0MsYUFBYSxVQUFVQyxJQUFJLEdBQUssQ0FBQztJQUVyQyxFQUF3QztJQUN4QyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNWLGNBQWMsQ0FBQ1csU0FBUyxDQUFDRixJQUFJO0lBRWxELEVBQTJFO0lBQzNFLEVBQTZDO0lBQzdDLEVBQTJEO0lBQzNERyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFRLFNBQUVILE1BQU0sRUFBRyxDQUFtRDtJQUVsRixNQUFNLENBQUNBLE1BQU07QUFDZixDQUFDO0FBRWMsUUFBUSxDQUFDSSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDekNSLGFBQWEsQ0FBQyxDQUFlLGdCQUFFUyxJQUFJLEVBQUNQLE1BQU0sR0FBSSxDQUFDO1FBQzdDTSxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ1QsTUFBTTtJQUM3QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9zZWEuanM/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBPcGVuc2VhU2NyYXBlciA9IHJlcXVpcmUoXCJvcGVuc2VhLXNjcmFwZXJcIik7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGRlYnVnOiBmYWxzZSxcbiAgbG9nczogZmFsc2UsXG4gIHNvcnQ6IHRydWUsXG4gIGJyb3dzZXJJbnN0YW5jZTogdW5kZWZpbmVkLFxufVxuXG5jb25zdCBnZXRJbmZvQnlTbHVnID0gYXN5bmMgKHNsdWcpID0+IHtcblxuICAvLyBnZXQgYmFzaWMgaW5mbyAoZnJvbSB0aGUgb3BlbnNlYSBBUEkpXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IE9wZW5zZWFTY3JhcGVyLmJhc2ljSW5mbyhzbHVnKTtcbiAgXG4gIC8vIGdldCBvZmZlcnMgZnJvbSBvcGVuc2VhLiBFYWNoIG9mZmVyIGluY2x1ZGVzIHRoZSBmbG9vciBwcmljZSwgdG9rZW5OYW1lLFxuICAvLyB0b2tlbklkLCB0b2tlbkNvbnRyYWN0QWRkcmVzcyBhbmQgb2ZmZXJVcmxcbiAgLy8gbGV0IHJlc3VsdCA9IGF3YWl0IE9wZW5zZWFTY3JhcGVyLm9mZmVycyhzbHVnLCBvcHRpb25zKTtcbiAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTsgLy8gcmVzdWx0IG9iamVjdCBjb250YWlucyBrZXlzIGBzdGF0c2AgYW5kIGBvZmZlcnNgXG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBnZXRJbmZvQnlTbHVnKFwiY29vbC1jYXRzLW5mdFwiKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0KVxuICB9KVxufSJdLCJuYW1lcyI6WyJPcGVuc2VhU2NyYXBlciIsInJlcXVpcmUiLCJvcHRpb25zIiwiZGVidWciLCJsb2dzIiwic29ydCIsImJyb3dzZXJJbnN0YW5jZSIsInVuZGVmaW5lZCIsImdldEluZm9CeVNsdWciLCJzbHVnIiwicmVzdWx0IiwiYmFzaWNJbmZvIiwiY29uc29sZSIsImxvZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0aGVuIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/sea.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sea.js"));
module.exports = __webpack_exports__;

})();