/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/data_paintings/getLevel.js":
/*!***********************************************!*\
  !*** ./src/assets/data_paintings/getLevel.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _level1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level1 */ "./src/assets/data_paintings/level1.js");
/* harmony import */ var _level2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level2 */ "./src/assets/data_paintings/level2.js");
/* harmony import */ var _level3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level3 */ "./src/assets/data_paintings/level3.js");
/* harmony import */ var _level4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level4 */ "./src/assets/data_paintings/level4.js");
/* harmony import */ var _level5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./level5 */ "./src/assets/data_paintings/level5.js");
/* harmony import */ var _level6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./level6 */ "./src/assets/data_paintings/level6.js");






/* harmony default export */ __webpack_exports__["default"] = (num => {
  switch (num) {
    case 0:
      return _level1__WEBPACK_IMPORTED_MODULE_0__["default"];

    case 1:
      return _level2__WEBPACK_IMPORTED_MODULE_1__["default"];

    case 2:
      return _level3__WEBPACK_IMPORTED_MODULE_2__["default"];

    case 3:
      return _level4__WEBPACK_IMPORTED_MODULE_3__["default"];

    case 4:
      return _level5__WEBPACK_IMPORTED_MODULE_4__["default"];

    default:
      return _level6__WEBPACK_IMPORTED_MODULE_5__["default"];
  }
});

/***/ }),

/***/ "./src/assets/data_paintings/level1.js":
/*!*********************************************!*\
  !*** ./src/assets/data_paintings/level1.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: '1_01',
  name: 'Stag Hunt',
  imageSrc: 'level1/deerhunt.jpg',
  cutSrc: 'level1/cut/deerhunt.jpg',
  author: "Niccolò dell'",
  year: '1550-52'
}, {
  id: '1_02',
  name: 'Deer beside a Lake',
  imageSrc: 'level1/deerlake.jpg',
  cutSrc: 'level1/cut/deerlake.jpg',
  author: 'Carl Frederik',
  year: '1888'
}, {
  id: '1_03',
  name: 'Country Road with Cypresses',
  imageSrc: 'level1/abbati2.jpg',
  cutSrc: 'level1/cut/abbati2.jpg',
  author: 'ABBATI, Giuseppe',
  year: '1860'
}, {
  id: '1_04',
  name: 'Fireworks in Naples',
  imageSrc: 'level1/firework.jpg',
  cutSrc: 'level1/cut/firework.jpg',
  author: 'ACHENBACH, Oswald',
  year: '1875'
}, {
  id: '1_05',
  name: 'The Ninth Wave',
  imageSrc: 'level1/9th_wave.jpg',
  cutSrc: 'level1/cut/9th_wave.jpg',
  author: 'AIVAZOVSKY, Ivan Konstantinovich',
  year: '1850'
}, {
  id: '1_06',
  name: 'View of Campo Santi Giovanni e Paolo',
  imageSrc: 'level1/campo.jpg',
  cutSrc: 'level1/cut/campo.jpg',
  author: 'ALBOTTO, Francesco',
  year: '1745'
}, {
  id: '1_07',
  name: 'San Giuseppe di Castello',
  imageSrc: 'level1/giuseppe.jpg',
  cutSrc: 'level1/cut/giuseppe.jpg',
  author: 'ALBOTTO, Francesco',
  year: '1745'
}, {
  id: '1_08',
  name: 'View of St.Petersburg',
  imageSrc: 'level1/view_stp.jpg',
  cutSrc: 'level1/cut/view_stp.jpg',
  author: 'ALEKSEYEV, Fyodor Yakovlevich',
  year: '1795'
}, {
  id: '1_09',
  name: 'Landscape with the Finding of Moses',
  imageSrc: 'level1/landmose.jpg',
  cutSrc: 'level1/cut/landmose.jpg',
  author: 'ALLEGRAIN, Etienne',
  year: 'second half of XVII century'
}, {
  id: '1_10',
  name: 'River Landscape',
  imageSrc: 'level1/riverla2.jpg',
  cutSrc: 'level1/cut/riverla2.jpg',
  author: 'ALLEGRAIN, Etienne',
  year: 'second half of XVII century'
}, {
  id: '1_11',
  name: 'Extensive Wooded Landscape with Cephalus and Procris',
  imageSrc: 'level1/extensiv.jpg',
  cutSrc: 'level1/cut/extensiv.jpg',
  author: 'ALSLOOT, Denis van',
  year: 'first half of XVII century'
}, {
  id: '1_12',
  name: 'Skating during Carnival',
  imageSrc: 'level1/skating.jpg',
  cutSrc: 'level1/cut/skating.jpg',
  author: 'ALSLOOT, Denis van',
  year: '1620'
}, {
  id: '1_13',
  name: 'Winter Landscape',
  imageSrc: 'level1/winter_l.jpg',
  cutSrc: 'level1/cut/winter_l.jpg',
  author: 'ALSLOOT, Denis van',
  year: '1610'
}, {
  id: '1_14',
  name: 'Winter Landscape in the Fôret de Soignes, with the Flight Into Egypt',
  imageSrc: 'level1/winterla.jpg',
  cutSrc: 'level1/cut/winterla.jpg',
  author: 'ALSLOOT, Denis van',
  year: '1616'
}, {
  id: '1_15',
  name: 'View of Vienna from the Prater',
  imageSrc: 'level1/viewvien.jpg',
  cutSrc: 'level1/cut/viewvien.jpg',
  author: 'ALT, Rudolf von',
  year: '1834'
}, {
  id: '1_16',
  name: 'An English 3rd - Rate Ship of the Line in Three Positions',
  imageSrc: 'level1/rateship.jpg',
  cutSrc: 'level1/cut/rateship.jpg',
  author: 'ANDERSON, William',
  year: 'first half of XIX century'
}, {
  id: '1_17',
  name: 'Shipping in a Calm Sea off the Coast',
  imageSrc: 'level1/shipcalm.jpg',
  cutSrc: 'level1/cut/shipcalm.jpg',
  author: 'ANDERSON, William',
  year: '1803'
}, {
  id: '1_18',
  name: 'Shipping on the Thames off Deptford',
  imageSrc: 'level1/shipping.jpg',
  cutSrc: 'level1/cut/shipping.jpg',
  author: 'ANDERSON, William',
  year: '1825'
}, {
  id: '1_19',
  name: 'Italianate Coastal Landscape',
  imageSrc: 'level1/landsca3.jpg',
  cutSrc: 'level1/cut/landsca3.jpg',
  author: 'ANESI, Paolo',
  year: 'XVIII century'
}, {
  id: '1_20',
  name: 'Tiber Bridge in Rome',
  imageSrc: 'level1/rome.jpg',
  cutSrc: 'level1/cut/rome.jpg',
  author: 'ANESI, Paolo',
  year: 'XVIII century'
}, {
  id: '1_21',
  name: 'View of the Roman Campagna',
  imageSrc: 'level1/rome1.jpg',
  cutSrc: 'level1/cut/rome1.jpg',
  author: 'ANESI, Paolo',
  year: 'XVIII century'
}, {
  id: '1_22',
  name: 'Harbour Scene',
  imageSrc: 'level1/scene.jpg',
  cutSrc: 'level1/cut/scene.jpg',
  author: 'ANESI, Paolo',
  year: 'XVIII century'
}, {
  id: '1_23',
  name: 'View of Tivoli and the Roman Campagna',
  imageSrc: 'level1/tivoli.jpg',
  cutSrc: 'level1/cut/tivoli.jpg',
  author: 'ANESI, Paolo',
  year: 'XVIII century'
}, {
  id: '1_24',
  name: 'The Western Railway Leaving Paris',
  imageSrc: 'level1/railway.jpg',
  cutSrc: 'level1/cut/railway.jpg',
  author: 'ANGRAND, Charles',
  year: '1886'
}, {
  id: '1_25',
  name: 'Landscape with a Musician',
  imageSrc: 'level1/landscap.jpg',
  cutSrc: 'level1/cut/landscap.jpg',
  author: 'APSHOVEN, Thomas van',
  year: 'XVII century'
}, {
  id: '1_26',
  name: 'Edge of a Wood',
  imageSrc: 'level1/edgewood.jpg',
  cutSrc: 'level1/cut/edgewood.jpg',
  author: "ARTHOIS, Jacques d'",
  year: 'XVII century'
}, {
  id: '1_27',
  name: 'An Extensive Wooded Landscape with Travellers on a Path',
  imageSrc: 'level1/extensiv_1.jpg',
  cutSrc: 'level1/cut/extensiv_1.jpg',
  author: "ARTHOIS, Jacques d'",
  year: 'XVII century'
}, {
  id: '1_28',
  name: 'Wooded Landscape',
  imageSrc: 'level1/landscap_1.jpg',
  cutSrc: 'level1/cut/landscap_1.jpg',
  author: "ARTHOIS, Jacques d'",
  year: 'XVII century'
}, {
  id: '1_29',
  name: 'Wooded Landscape',
  imageSrc: 'level1/woodedla.jpg',
  cutSrc: 'level1/cut/woodedla.jpg',
  author: "ARTHOIS, Jacques d'",
  year: 'XVII century'
}, {
  id: '1_30',
  name: 'The Delft City Wall with the Houttuinen',
  imageSrc: 'level1/citywall.jpg',
  cutSrc: 'level1/cut/citywall.jpg',
  author: 'ASCH, Pieter Jansz.van',
  year: '1650'
}, {
  id: '1_31',
  name: 'River Landscape',
  imageSrc: 'level1/river_la.jpg',
  cutSrc: 'level1/cut/river_la.jpg',
  author: 'ASCH, Pieter Jansz. van',
  year: '1640'
}, {
  id: '1_32',
  name: 'View of Killarney',
  imageSrc: 'level1/kilarney.jpg',
  cutSrc: 'level1/cut/kilarney.jpg',
  author: 'ASHFORD, William',
  year: '1778'
}, {
  id: '1_33',
  name: 'Landscape with Waterfall and Farm',
  imageSrc: 'level1/waterfal.jpg',
  cutSrc: 'level1/cut/waterfal.jpg',
  author: 'ASSCHE, Henri van',
  year: '1806'
}, {
  id: '1_34',
  name: 'Winter Landscape',
  imageSrc: 'level1/winterla_1.jpg',
  cutSrc: 'level1/cut/winterla_1.jpg',
  author: 'ASSCHE, Henri van',
  year: '1814'
}, {
  id: '1_35',
  name: 'Coastal Scene with Resting Riders',
  imageSrc: 'level1/coastal.jpg',
  cutSrc: 'level1/cut/coastal.jpg',
  author: 'ASSELYN, Jan',
  year: '1652'
}, {
  id: '1_36',
  name: 'Italianate Landscape with a River and an Arched Bridge',
  imageSrc: 'level1/italiana.jpg',
  cutSrc: 'level1/cut/italiana.jpg',
  author: 'ASSELYN, Jan',
  year: '1648'
}, {
  id: '1_37',
  name: 'Italianate Landscape with Peasants and Animals Fording a River',
  imageSrc: 'level1/italianb.jpg',
  cutSrc: 'level1/cut/italianb.jpg',
  author: 'ASSELYN, Jan',
  year: '1640-45'
}, {
  id: '1_38',
  name: 'Landscape with Frozen River',
  imageSrc: 'level1/landscap_2.jpg',
  cutSrc: 'level1/cut/landscap_2.jpg',
  author: 'AVERCAMP, Barend',
  year: '1655'
}, {
  id: '1_39',
  name: 'Ice Landscape',
  imageSrc: 'level1/ice_land.jpg',
  cutSrc: 'level1/cut/ice_land.jpg',
  author: 'AVERCAMP, Hendrick',
  year: 'XVII century'
}, {
  id: '1_40',
  name: 'Arabs on Horseback',
  imageSrc: 'level1/arabs.jpg',
  cutSrc: 'level1/cut/arabs.jpg',
  author: "AZEGLIO, Massimo Taparelli, Marquis d'",
  year: '1840'
}, {
  id: '1_41',
  name: 'Ships in Distress off a Rocky Coast',
  imageSrc: 'level1/distress.jpg',
  cutSrc: 'level1/cut/distress.jpg',
  author: 'BACKHUYSEN, Ludolf',
  year: '1667'
}, {
  id: '1_42',
  name: 'A Fishing Pink',
  imageSrc: 'level1/fishing.jpg',
  cutSrc: 'level1/cut/fishing.jpg',
  author: 'BACKHUYSEN, Ludolf',
  year: '1680'
}, {
  id: '1_43',
  name: 'Shipping by the Dutch Coast',
  imageSrc: 'level1/shipping_1.jpg',
  cutSrc: 'level1/cut/shipping_1.jpg',
  author: 'BACKHUYSEN, Ludolf',
  year: 'XVII century'
}, {
  id: '1_44',
  name: 'View from the Nieuwe Maas River towards the City of Vlaardingen',
  imageSrc: 'level1/viewvlaa.jpg',
  cutSrc: 'level1/cut/viewvlaa.jpg',
  author: 'BACKHUYSEN, Ludolf',
  year: '1680s'
}, {
  id: '1_45',
  name: 'Dutch Vessels off a Coastline on a Breezy Day',
  imageSrc: 'level1/vessels1.jpg',
  cutSrc: 'level1/cut/vessels1.jpg',
  author: 'BACKHUYSEN, Ludolf',
  year: '1680'
}]);

/***/ }),

/***/ "./src/assets/data_paintings/level2.js":
/*!*********************************************!*\
  !*** ./src/assets/data_paintings/level2.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: '2_01',
  name: 'Italianate Landscape With Travellers',
  imageSrc: 'level2/2_01.jpg',
  cutSrc: 'level2/cut/2_01.jpg',
  author: 'BARKER, Thomas',
  year: '1793'
}, {
  id: '2_02',
  name: 'Landscape with a Watermill',
  imageSrc: 'level2/2_02.jpg',
  cutSrc: 'level2/cut/2_02.jpg',
  author: 'BARRET, George',
  year: '1728'
}, {
  id: '2_03',
  name: 'Winter',
  imageSrc: 'level2/2_03.jpg',
  cutSrc: 'level2/cut/2_03.jpg',
  author: 'BASSANO, Francesco',
  year: '1577-78'
}, {
  id: '2_04',
  name: 'Skating at Sloten, near Amsterdam',
  imageSrc: 'level2/2_04.jpg',
  cutSrc: 'level2/cut/2_04.jpg',
  author: 'BEERSTRATEN, Jan Abrahamsz.',
  year: '1660-65'
}, {
  id: '2_05',
  name: 'The Castle of Batavia, Seen from Kali Besar West',
  imageSrc: 'level2/2_05.jpg',
  cutSrc: 'level2/cut/2_05.jpg',
  author: 'BEECKMAN, Andries',
  year: '1656'
}, {
  id: '2_06',
  name: 'The Hague Vegetable Market in Winter',
  imageSrc: 'level2/2_06.jpg',
  cutSrc: 'level2/cut/2_06.jpg',
  author: 'BEEST, Sybrand van',
  year: '1650'
}, {
  id: '2_07',
  name: 'Seashore',
  imageSrc: 'level2/2_07.jpg',
  cutSrc: 'level2/cut/2_07.jpg',
  author: 'BEGEYN, Abraham Jansz.',
  year: '1662'
}, {
  id: '2_08',
  name: 'Banks of the Oise',
  imageSrc: 'level2/2_08.jpg',
  cutSrc: 'level2/cut/2_08.jpg',
  author: 'BÉLIARD, Edouard',
  year: '1875'
}, {
  id: '2_09',
  name: 'View of the Grand Canal at San Stae',
  imageSrc: 'level2/2_09.jpg',
  cutSrc: 'level2/cut/2_09.jpg',
  author: 'BELLOTTO, Bernardo',
  year: '1738-40'
}, {
  id: '2_10',
  name: 'The Piazza della Signoria in Florence',
  imageSrc: 'level2/2_10.jpg',
  cutSrc: 'level2/cut/2_10.jpg',
  author: 'BELLOTTO, Bernardo',
  year: '1740'
}, {
  id: '2_11',
  name: 'View of the Villa Cagnola at Gazzada near Varese',
  imageSrc: 'level2/2_11.jpg',
  cutSrc: 'level2/cut/2_11.jpg',
  author: 'BELLOTTO, Bernardo',
  year: '1744'
}, {
  id: '2_12',
  name: 'The Campagna at Lungezza near Rome',
  imageSrc: 'level2/2_12.jpg',
  cutSrc: 'level2/cut/2_12.jpg',
  author: 'BENOUVILLE, Jean-Achille',
  year: '1848'
}, {
  id: '2_13',
  name: 'A Southern Harbour Scene',
  imageSrc: 'level2/2_13.jpg',
  cutSrc: 'level2/cut/2_13.jpg',
  author: 'BERCHEM, Nicolaes',
  year: '1657-59'
}, {
  id: '2_14',
  name: 'A Harbour Scene',
  imageSrc: 'level2/2_14.jpg',
  cutSrc: 'level2/cut/2_14.jpg',
  author: 'BERCHEM, Nicolaes',
  year: '1665-70'
}, {
  id: '2_15',
  name: 'The Invalides, Paris',
  imageSrc: 'level2/2_15.jpg',
  cutSrc: 'level2/cut/2_15.jpg',
  author: 'CANELLA, Giuseppe',
  year: '1830'
}, {
  id: '2_16',
  name: 'View of Ariccia with the Sea in the Background',
  imageSrc: 'level2/2_16.jpg',
  cutSrc: 'level2/cut/2_16.jpg',
  author: 'CATEL, Franz Ludwig',
  year: '1821-25'
}, {
  id: '2_17',
  name: 'The Miracles of the Penitent St Mary',
  imageSrc: 'level2/2_17.jpg',
  cutSrc: 'level2/cut/2_17.jpg',
  author: 'CHAMPAIGNE, Philippe de',
  year: '1656'
}, {
  id: '2_18',
  name: 'Autumn',
  imageSrc: 'level2/2_18.jpg',
  cutSrc: 'level2/cut/2_18.jpg',
  author: 'CHURCH, Frederic Edwin',
  year: '1875'
}, {
  id: '2_19',
  name: 'Landscape with Merchants',
  imageSrc: 'level2/2_19.jpg',
  cutSrc: 'level2/cut/2_19.jpg',
  author: 'CLAUDE LORRAIN',
  year: '1630'
}, {
  id: '2_20',
  name: 'Landscape with Shepherds',
  imageSrc: 'level2/2_20.jpg',
  cutSrc: 'level2/cut/2_20.jpg',
  author: 'CLAUDE LORRAIN',
  year: '1645-46'
}, {
  id: '2_21',
  name: 'The Hay-Wain',
  imageSrc: 'level2/2_21.jpg',
  cutSrc: 'level2/cut/2_21.jpg',
  author: 'CONSTABLE, John',
  year: '1821'
}, {
  id: '2_22',
  name: 'The Bridge at Mantes',
  imageSrc: 'level2/2_22.jpg',
  cutSrc: 'level2/cut/2_22.jpg',
  author: 'COROT, Jean-Baptiste Camille',
  year: '1868-70'
}, {
  id: '2_23',
  name: 'View of Frankfurt am Main',
  imageSrc: 'level2/2_23.jpg',
  cutSrc: 'level2/cut/2_23.jpg',
  author: 'COURBET, Gustave',
  year: '1858'
}, {
  id: '2_24',
  name: 'The Cliff at Étretat after the Storm',
  imageSrc: 'level2/2_24.jpg',
  cutSrc: 'level2/cut/2_24.jpg',
  author: 'COURBET, Gustave',
  year: '1869-70'
}, {
  id: '2_25',
  name: 'Greenwood Lake',
  imageSrc: 'level2/2_25.jpg',
  cutSrc: 'level2/cut/2_25.jpg',
  author: 'CROPSEY, Jasper Francis',
  year: '1870'
}, {
  id: '2_26',
  name: 'The Avenue at Meerdervoort',
  imageSrc: 'level2/2_26.jpg',
  cutSrc: 'level2/cut/2_26.jpg',
  author: 'CUYP, Aelbert',
  year: '1650-52'
}, {
  id: '2_27',
  name: 'The Valkhof at Nijmegen',
  imageSrc: 'level2/2_27.jpg',
  cutSrc: 'level2/cut/2_27.jpg',
  author: 'CUYP, Aelbert',
  year: '1652-54'
}, {
  id: '2_28',
  name: 'Morning after a Stormy Night',
  imageSrc: 'level2/2_28.jpg',
  cutSrc: 'level2/cut/2_28.jpg',
  author: 'DAHL, Johan Christian Clausen',
  year: '1819'
}, {
  id: '2_29',
  name: 'Eruption of the Vesuvius',
  imageSrc: 'level2/2_29.jpg',
  cutSrc: 'level2/cut/2_29.jpg',
  author: 'DAHL, Johan Christian Clausen',
  year: '1823'
}, {
  id: '2_30',
  name: 'Landscape with Shepherds',
  imageSrc: 'level2/2_30.jpg',
  cutSrc: 'level2/cut/2_30.jpg',
  author: 'DALEM, Cornelis van',
  year: '1550-60'
}, {
  id: '2_31',
  name: 'The Barges',
  imageSrc: 'level2/2_31.jpg',
  cutSrc: 'level2/cut/2_31.jpg',
  author: 'DAUBIGNY, Charles-François',
  year: '1865'
}, {
  id: '2_32',
  name: 'The Sea from the Heights of Dieppe',
  imageSrc: 'level2/2_32.jpg',
  cutSrc: 'level2/cut/2_32.jpg',
  author: 'DELACROIX, Eugène',
  year: '1852'
}, {
  id: '2_33',
  name: 'Architectural Capriccio with Jephthah and His Daughter',
  imageSrc: 'level2/2_33.jpg',
  cutSrc: 'level2/cut/2_33.jpg',
  author: 'DELEN, Dirck van',
  year: '1633'
}, {
  id: '2_34',
  name: 'The Pont Neuf and the Quai des Orfèvres, from the Place du Pont Neuf',
  imageSrc: 'level2/2_34.jpg',
  cutSrc: 'level2/cut/2_34.jpg',
  author: 'DELPY, Hippolyte-Camille',
  year: '1875'
}, {
  id: '2_35',
  name: 'Houses at a Millrace',
  imageSrc: 'level2/2_35.jpg',
  cutSrc: 'level2/cut/2_35.jpg',
  author: 'DEPPE, Ludwig',
  year: '1820'
}, {
  id: '2_36',
  name: 'The Forest in Fontainebleau',
  imageSrc: 'level2/2_36.jpg',
  cutSrc: 'level2/cut/2_36.jpg',
  author: 'DIAZ DE LA PEÑA, Narcisse Virgile',
  year: '1867'
}, {
  id: '2_37',
  name: 'View from the Giudecca, Venice',
  imageSrc: 'level2/2_37.jpg',
  cutSrc: 'level2/cut/2_37.jpg',
  author: 'DOMENICHINI, Apollonio',
  year: '1744'
}, {
  id: '2_38',
  name: 'Landscape with Ford',
  imageSrc: 'level2/2_38.jpg',
  cutSrc: 'level2/cut/2_38.jpg',
  author: 'DOMENICHINO',
  year: '1603'
}, {
  id: '2_39',
  name: 'Gorge',
  imageSrc: 'level2/2_39.jpg',
  cutSrc: 'level2/cut/2_39.jpg',
  author: 'DORÉ, Gustave',
  year: '1878'
}, {
  id: '2_40',
  name: 'Dolmen on Brandsø',
  imageSrc: 'level2/2_40.jpg',
  cutSrc: 'level2/cut/2_40.jpg',
  author: 'DREYER, Dankvart',
  year: '1842'
}, {
  id: '2_41',
  name: 'Village Scene',
  imageSrc: 'level2/2_41.jpg',
  cutSrc: 'level2/cut/2_41.jpg',
  author: 'DROOCHSLOOT, Joost Cornelisz.',
  year: '1623'
}]);

/***/ }),

/***/ "./src/assets/data_paintings/level3.js":
/*!*********************************************!*\
  !*** ./src/assets/data_paintings/level3.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: '3_01',
  name: 'Return from the Falcon Hunt',
  imageSrc: 'level3/3_01.jpg',
  cutSrc: 'level3/cut/3_01.jpg',
  author: 'BERCHEM, Nicolaes',
  year: '1650'
}, {
  id: '3_02',
  name: 'Rocky Landscape with Antique Ruins',
  imageSrc: 'level3/3_02.jpg',
  cutSrc: 'level3/cut/3_02.jpg',
  author: 'BERCHEM, Nicolaes',
  year: '1657'
}, {
  id: '3_03',
  name: 'The Banks of the Manzanares River',
  imageSrc: 'level3/3_03.jpg',
  cutSrc: 'level3/cut/3_03.jpg',
  author: 'BERUETE, Aureliano',
  year: '1878'
}, {
  id: '3_04',
  name: 'The Augustan Bridge',
  imageSrc: 'level3/3_04.jpg',
  cutSrc: 'level3/cut/3_04.jpg',
  author: 'BIDAULD, Jean-Joseph-Xavier',
  year: '1790'
}, {
  id: '3_05',
  name: 'Landscape with Sarcophagus',
  imageSrc: 'level3/3_05.jpg',
  cutSrc: 'level3/cut/3_05.jpg',
  author: 'BLANCHET, Thomas',
  year: '1650-1652'
}, {
  id: '3_06',
  name: "Building the Devil's Bridge",
  imageSrc: 'level3/3_06.jpg',
  cutSrc: 'level3/cut/3_06.jpg',
  author: 'BLECHEN, Karl',
  year: '1833'
}, {
  id: '3_07',
  name: 'Stag Hunting in the Dunes',
  imageSrc: 'level3/3_07.jpg',
  cutSrc: 'level3/cut/3_07.jpg',
  author: 'BLEKER, Gerrit Claesz',
  year: '1625-1629'
}, {
  id: '3_08',
  name: 'Landscape with the Prophet Elijah in the Desert',
  imageSrc: 'level3/3_08.jpg',
  cutSrc: 'level3/cut/3_08.jpg',
  author: 'BLOEMAERT, Abraham',
  year: '1610'
}, {
  id: '3_09',
  name: 'River Landscape with a Town and Fortified Tower',
  imageSrc: 'level3/3_09.jpg',
  cutSrc: 'level3/cut/3_09.jpg',
  author: 'GOYEN, Jan van',
  year: '1633'
}, {
  id: '3_10',
  name: 'The Champion Single Sculls (Max Schmitt in a Single Scull)',
  imageSrc: 'level3/3_10.jpg',
  cutSrc: 'level3/cut/3_10.jpg',
  author: 'EAKINS, Thomas',
  year: '1871'
}, {
  id: '3_11',
  name: 'A Frigate, Calm Seas',
  imageSrc: 'level3/3_11.jpg',
  cutSrc: 'level3/cut/3_11.jpg',
  author: 'ECKARDT, Christian Frederik Emil',
  year: '1867'
}, {
  id: '3_12',
  name: 'A Brig under Sail in Fair Weather',
  imageSrc: 'level3/3_12.jpg',
  cutSrc: 'level3/cut/3_12.jpg',
  author: 'ECKERSBERG, Christoffer Wilhelm',
  year: '1844-1845'
}, {
  id: '3_13',
  name: 'The Cloisters, San Lorenzo fuori le mura',
  imageSrc: 'level3/3_13.jpg',
  cutSrc: 'level3/cut/3_13.jpg',
  author: 'ECKERSBERG, Christoffer Wilhelm',
  year: '1824'
}, {
  id: '3_14',
  name: 'View of Amsterdam',
  imageSrc: 'level3/3_14.jpg',
  cutSrc: 'level3/cut/3_14.jpg',
  author: 'EKELS, Jan the Elder',
  year: '1750-1780'
}, {
  id: '3_15',
  name: 'View of the Zuidsingel, Amersfoort',
  imageSrc: 'level3/3_15.jpg',
  cutSrc: 'level3/cut/3_15.jpg',
  author: 'EKELS, Jan the Elder',
  year: '1760-1780'
}, {
  id: '3_16',
  name: 'Seascape',
  imageSrc: 'level3/3_16.jpg',
  cutSrc: 'level3/cut/3_16.jpg',
  author: 'EYCK, Gaspard van',
  year: '1650'
}, {
  id: '3_17',
  name: 'Southern Pastoral',
  imageSrc: 'level3/3_17.jpg',
  cutSrc: 'level3/cut/3_17.jpg',
  author: 'BERCHEM, Nicolaes',
  year: '1658'
}, {
  id: '3_18',
  name: 'Winter Landscape',
  imageSrc: 'level3/3_18.jpg',
  cutSrc: 'level3/cut/3_18.jpg',
  author: 'BERGHE, Christoffel van den',
  year: '1615-1620'
}, {
  id: '3_19',
  name: 'The Silver Seascape',
  imageSrc: 'level3/3_19.jpg',
  cutSrc: 'level3/cut/3_19.jpg',
  author: 'BEYEREN, Abraham van',
  year: '1640-1650'
}, {
  id: '3_20',
  name: 'View of the Isle of Sora',
  imageSrc: 'level3/3_20.jpg',
  cutSrc: 'level3/cut/3_20.jpg',
  author: 'BIDAULD, Jean-Joseph-Xavier',
  year: '1793'
}, {
  id: '3_21',
  name: 'Cavalry Battle Scene',
  imageSrc: 'level3/3_21.jpg',
  cutSrc: 'level3/cut/3_21.jpg',
  author: 'BLEKER, Gerrit Claesz',
  year: '1656'
}, {
  id: '3_22',
  name: 'Landscape with the Parable of the Tares among the Wheat',
  imageSrc: 'level3/3_22.jpg',
  cutSrc: 'level3/cut/3_22.jpg',
  author: 'BLOEMAERT, Abraham',
  year: '1624'
}, {
  id: '3_23',
  name: 'A Scene in the Roman Campagna',
  imageSrc: 'level3/3_23.jpg',
  cutSrc: 'level3/cut/3_23.jpg',
  author: 'BLOEMEN, Jan Frans van',
  year: '1736'
}, {
  id: '3_24',
  name: 'Naples, a View of Mergellina',
  imageSrc: 'level3/3_24.jpg',
  cutSrc: 'level3/cut/3_24.jpg',
  author: 'BLOEMEN, Jan Frans van',
  year: '1777'
}, {
  id: '3_25',
  name: 'River Landscape',
  imageSrc: 'level3/3_25.jpg',
  cutSrc: 'level3/cut/3_25.jpg',
  author: 'GAINSBOROUGH, Thomas',
  year: '1768-1770'
}, {
  id: '3_26',
  name: "The Seine in Paris between the Pont d'Iéna and Pont de Grenelle",
  imageSrc: 'level3/3_26.jpg',
  cutSrc: 'level3/cut/3_26.jpg',
  author: 'GAUGUIN, Paul',
  year: '1875'
}, {
  id: '3_27',
  name: "A Corroboree in Van Diemen's Land",
  imageSrc: 'level3/3_27.jpg',
  cutSrc: 'level3/cut/3_27.jpg',
  author: 'GLOVER, John',
  year: '1840'
}, {
  id: '3_28',
  name: 'Beach at Scheveningen in Stormy Weather',
  imageSrc: 'level3/3_28.jpg',
  cutSrc: 'level3/cut/3_28.jpg',
  author: 'GOGH, Vincent van',
  year: '1882'
}, {
  id: '3_29',
  name: 'Farmhouses among Trees',
  imageSrc: 'level3/3_29.jpg',
  cutSrc: 'level3/cut/3_29.jpg',
  author: 'GOGH, Vincent van',
  year: '1883'
}, {
  id: '3_30',
  name: 'Two Peasant Women in the Peat Field',
  imageSrc: 'level3/3_30.jpg',
  cutSrc: 'level3/cut/3_30.jpg',
  author: 'GOGH, Vincent van',
  year: '1883'
}, {
  id: '3_31',
  name: 'The Parsonage Garden at Nuenen in Spring',
  imageSrc: 'level3/3_31.jpg',
  cutSrc: 'level3/cut/3_31.jpg',
  author: 'GOGH, Vincent van',
  year: '1884'
}, {
  id: '3_32',
  name: 'In the Jardin du Luxembourg',
  imageSrc: 'level3/3_32.jpg',
  cutSrc: 'level3/cut/3_32.jpg',
  author: 'GOGH, Vincent van',
  year: '1886'
}, {
  id: '3_33',
  name: 'View of Paris from Montmartre',
  imageSrc: 'level3/3_33.jpg',
  cutSrc: 'level3/cut/3_33.jpg',
  author: 'GOGH, Vincent van',
  year: '1886'
}, {
  id: '3_34',
  name: 'Olive Picking',
  imageSrc: 'level3/3_34.jpg',
  cutSrc: 'level3/cut/3_34.jpg',
  author: 'GOGH, Vincent van',
  year: '1889'
}, {
  id: '3_35',
  name: 'Landscape with Carriage and Train in the Background',
  imageSrc: 'level3/3_35.jpg',
  cutSrc: 'level3/cut/3_35.jpg',
  author: 'GOGH, Vincent van',
  year: '1890'
}, {
  id: '3_36',
  name: 'Wheat Field under Clouded Sky',
  imageSrc: 'level3/3_36.jpg',
  cutSrc: 'level3/cut/3_36.jpg',
  author: 'GOGH, Vincent van',
  year: '1890'
}, {
  id: '3_37',
  name: 'Wheat Field with Crows',
  imageSrc: 'level3/3_37.jpg',
  cutSrc: 'level3/cut/3_37.jpg',
  author: 'GOGH, Vincent van',
  year: '1890'
}, {
  id: '3_38',
  name: 'The Meadow of San Isidro on his Feast Day',
  imageSrc: 'level3/3_38.jpg',
  cutSrc: 'level3/cut/3_38.jpg',
  author: 'GOYA Y LUCIENTES, Francisco de',
  year: '1788'
}, {
  id: '3_39',
  name: 'Dune Landscape',
  imageSrc: 'level3/3_39.jpg',
  cutSrc: 'level3/cut/3_39.jpg',
  author: 'GOYEN, Jan van',
  year: '1631'
}, {
  id: '3_40',
  name: 'Haymaking',
  imageSrc: 'level3/3_40.jpg',
  cutSrc: 'level3/cut/3_40.jpg',
  author: 'GOYEN, Jan van',
  year: '1630'
}]);

/***/ }),

/***/ "./src/assets/data_paintings/level4.js":
/*!*********************************************!*\
  !*** ./src/assets/data_paintings/level4.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: '4_01',
  name: 'The Korte Vijverberg at The Hague Seen from the Tournooiveld',
  imageSrc: 'level4/4_01.jpg',
  cutSrc: 'level4/cut/4_01.jpg',
  author: 'FARGUE, Jacob Elias La',
  year: '1761'
}, {
  id: '4_02',
  name: 'Ideal Landscape near Rocca Canterana',
  imageSrc: 'level4/4_02.jpg',
  cutSrc: 'level4/cut/4_02.jpg',
  author: 'FOHR, Carl Philipp',
  year: '1818'
}, {
  id: '4_03',
  name: 'Young Woman and a Herdsman in a Landscape',
  imageSrc: 'level4/4_03.jpg',
  cutSrc: 'level4/cut/4_03.jpg',
  author: 'FRAGONARD, Jean-Honore',
  year: '1765'
}, {
  id: '4_04',
  name: 'View of the Falls at Tivoli',
  imageSrc: 'level4/4_04.jpg',
  cutSrc: 'level4/cut/4_04.jpg',
  author: 'FREY, Johannes Jakob',
  year: '1840s'
}, {
  id: '4_05',
  name: 'Village Landscape in Morning Light (The Lone Tree)',
  imageSrc: 'level4/4_05.jpg',
  cutSrc: 'level4/cut/4_05.jpg',
  author: 'FRIEDRICH, Caspar David',
  year: '1822'
}, {
  id: '4_06',
  name: 'Dolmen in the Snow',
  imageSrc: 'level4/4_06.jpg',
  cutSrc: 'level4/cut/4_06.jpg',
  author: 'FRIEDRICH, Caspar David',
  year: '1807'
}, {
  id: '4_07',
  name: 'The Liris Waterfalls near Isola di Sora',
  imageSrc: 'level4/4_07.jpg',
  cutSrc: 'level4/cut/4_07.jpg',
  author: 'FRIES, Ernst',
  year: '1830'
}, {
  id: '4_08',
  name: 'River Landscape',
  imageSrc: 'level4/4_08.jpg',
  cutSrc: 'level4/cut/4_08.jpg',
  author: 'GAINSBOROUGH, Thomas',
  year: '1770'
}, {
  id: '4_09',
  name: 'Marine View (Seascape with Porpoises)',
  imageSrc: 'level4/4_09.jpg',
  cutSrc: 'level4/cut/4_09.jpg',
  author: 'MANET, Edouard',
  year: '1864'
}, {
  id: '4_10',
  name: 'Country House in Rueil',
  imageSrc: 'level4/4_10.jpg',
  cutSrc: 'level4/cut/4_10.jpg',
  author: 'MANET, Edouard',
  year: '1882'
}, {
  id: '4_11',
  name: 'The Rialto Bridge from the Riva del Vin',
  imageSrc: 'level4/4_11.jpg',
  cutSrc: 'level4/cut/4_11.jpg',
  author: 'MARIESCHI, Michele',
  year: '1740s'
}, {
  id: '4_12',
  name: 'Santa Maria della Salute, Venice',
  imageSrc: 'level4/4_12.jpg',
  cutSrc: 'level4/cut/4_12.jpg',
  author: 'MARIESCHI, Michele',
  year: '1740'
}, {
  id: '4_13',
  name: 'Landscape with Charcoal Burners',
  imageSrc: 'level4/4_13.jpg',
  cutSrc: 'level4/cut/4_13.jpg',
  author: 'MARKÓ, András',
  year: '1861'
}, {
  id: '4_14',
  name: 'Italian Landscape with Viaduct and Rainbow',
  imageSrc: 'level4/4_14.jpg',
  cutSrc: 'level4/cut/4_14.jpg',
  author: 'MARKÓ, Károly the Elder',
  year: '1838'
}, {
  id: '4_15',
  name: 'In the Vicinity of Pisa',
  imageSrc: 'level4/4_15.jpg',
  cutSrc: 'level4/cut/4_15.jpg',
  author: 'MARKÓ, Károly the Younger',
  year: '1878'
}, {
  id: '4_16',
  name: 'Ile de Bréhat',
  imageSrc: 'level4/4_16.jpg',
  cutSrc: 'level4/cut/4_16.jpg',
  author: 'MAUFRA, Maxime',
  year: '1892'
}, {
  id: '4_17',
  name: 'Kilchurn Castle, Loch Awe',
  imageSrc: 'level4/4_17.jpg',
  cutSrc: 'level4/cut/4_17.jpg',
  author: 'MCCULLOCH, Horatio',
  year: '1854'
}, {
  id: '4_18',
  name: 'Under the Cross',
  imageSrc: 'level4/4_18.jpg',
  cutSrc: 'level4/cut/4_18.jpg',
  author: 'MEDNYÁNSZKY, László',
  year: '1892'
}, {
  id: '4_19',
  name: 'Landscape Inspired by the View of Frascati',
  imageSrc: 'level4/4_19.jpg',
  cutSrc: 'level4/cut/4_19.jpg',
  author: 'MICHALLON, Achille-Etna',
  year: '1822'
}, {
  id: '4_20',
  name: 'The Handelskom at Bruges',
  imageSrc: 'level4/4_20.jpg',
  cutSrc: 'level4/cut/4_20.jpg',
  author: 'MINDERHOUT, Hendrik van',
  year: '1665'
}, {
  id: '4_21',
  name: 'Extensive Rhenish Landscape',
  imageSrc: 'level4/4_21.jpg',
  cutSrc: 'level4/cut/4_21.jpg',
  author: 'MINDERHOUT, Hendrik van',
  year: '1653'
}, {
  id: '4_22',
  name: 'River Landscape',
  imageSrc: 'level4/4_22.jpg',
  cutSrc: 'level4/cut/4_22.jpg',
  author: 'MIROU, Anton',
  year: '1610s'
}, {
  id: '4_23',
  name: 'Woman in the Garden',
  imageSrc: 'level4/4_23.jpg',
  cutSrc: 'level4/cut/4_23.jpg',
  author: 'MONET, Claude',
  year: '1866'
}, {
  id: '4_24',
  name: 'On the Bank of the Seine, Bennecourt',
  imageSrc: 'level4/4_24.jpg',
  cutSrc: 'level4/cut/4_24.jpg',
  author: 'MONET, Claude',
  year: '1868'
}, {
  id: '4_25',
  name: "Monet's Garden at Argenteuil",
  imageSrc: 'level4/4_25.jpg',
  cutSrc: 'level4/cut/4_25.jpg',
  author: 'MONET, Claude',
  year: '1873'
}, {
  id: '4_26',
  name: 'Three Fishing Boats',
  imageSrc: 'level4/4_26.jpg',
  cutSrc: 'level4/cut/4_26.jpg',
  author: 'MONET, Claude',
  year: '1886'
}, {
  id: '4_27',
  name: 'Haystacks at Giverny',
  imageSrc: 'level4/4_27.jpg',
  cutSrc: 'level4/cut/4_27.jpg',
  author: 'MONET, Claude',
  year: '1886'
}, {
  id: '4_28',
  name: 'Water Lily Pond, Harmony in Rose',
  imageSrc: 'level4/4_28.jpg',
  cutSrc: 'level4/cut/4_28.jpg',
  author: 'MONET, Claude',
  year: '1900'
}, {
  id: '4_29',
  name: 'Water Lilies',
  imageSrc: 'level4/4_29.jpg',
  cutSrc: 'level4/cut/4_29.jpg',
  author: 'MONET, Claude',
  year: '1914'
}, {
  id: '3_40',
  name: 'Haymaking',
  imageSrc: 'level3/3_40.jpg',
  cutSrc: 'level3/cut/3_40.jpg',
  author: 'GOYEN, Jan van',
  year: '1630'
}]);

/***/ }),

/***/ "./src/assets/data_paintings/level5.js":
/*!*********************************************!*\
  !*** ./src/assets/data_paintings/level5.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: '5_01',
  name: 'A Garden Party',
  imageSrc: 'level5/5_01.jpg',
  cutSrc: 'level5/cut/5_01.jpg',
  author: 'HALS, Dirck',
  year: '1627'
}, {
  id: '5_02',
  name: 'Family Group in a Landscape',
  imageSrc: 'level5/5_02.jpg',
  cutSrc: 'level5/cut/5_02.jpg',
  author: 'HALS, Frans',
  year: 'c. 1648'
}, {
  id: '5_03',
  name: 'View of the Island of Capri',
  imageSrc: 'level5/5_03.jpg',
  cutSrc: 'level5/cut/5_03.jpg',
  author: 'HARPIGNIES, Henri-Joseph',
  year: '1853'
}, {
  id: '5_04',
  name: 'The Return from the War',
  imageSrc: 'level5/5_04.jpg',
  cutSrc: 'level5/cut/5_04.jpg',
  author: 'HARPIGNIES, Henri-Joseph',
  year: '1859'
}, {
  id: '5_05',
  name: 'River Landscape with a Village in the Background',
  imageSrc: 'level5/5_05.jpg',
  cutSrc: 'level5/cut/5_05.jpg',
  author: 'HARPIGNIES, Henri-Joseph',
  year: '1877'
}, {
  id: '5_06',
  name: 'River Banks, Auvergne',
  imageSrc: 'level5/5_06.jpg',
  cutSrc: 'level5/cut/5_06.jpg',
  author: 'HARPIGNIES, Henri-Joseph',
  year: '1860'
}, {
  id: '5_07',
  name: 'On Riviera',
  imageSrc: 'level5/5_07.jpg',
  cutSrc: 'level5/cut/5_07.jpg',
  author: 'HARPIGNIES, Henri-Joseph',
  year: '1891'
}, {
  id: '5_08',
  name: 'The Courtyard of the Customs House',
  imageSrc: 'level5/5_08.jpg',
  cutSrc: 'level5/cut/5_08.jpg',
  author: 'LÉPICIÉ, Nicolas-Bernard',
  year: '1775'
}, {
  id: '5_09',
  name: 'Still-Life',
  imageSrc: 'level5/5_09.jpg',
  cutSrc: 'level5/cut/5_09.jpg',
  author: 'HEEM, Jan Davidsz. de',
  year: '1653'
}, {
  id: '5_10',
  name: 'View from the Prater towards the Suburbs of Vienna',
  imageSrc: 'level5/5_10.jpg',
  cutSrc: 'level5/cut/5_10.jpg',
  author: 'HEIDELOFF, Josef',
  year: '1781'
}, {
  id: '5_11',
  name: 'The Bull Hunt in Campo San Polo',
  imageSrc: 'level5/5_11.jpg',
  cutSrc: 'level5/cut/5_11.jpg',
  author: 'HEINTZ, Joseph the Younger',
  year: '1648'
}, {
  id: '5_12',
  name: 'The Steeplechase',
  imageSrc: 'level5/5_12.jpg',
  cutSrc: 'level5/cut/5_12.jpg',
  author: 'HERRING, Benjamin Jr.',
  year: '1869'
}, {
  id: '5_13',
  name: 'The Entry of King Othon of Greece in Athens',
  imageSrc: 'level5/5_13.jpg',
  cutSrc: 'level5/cut/5_13.jpg',
  author: 'HESS, Peter von',
  year: '1839'
}, {
  id: '5_14',
  name: 'Landscape',
  imageSrc: 'level5/5_14.jpg',
  cutSrc: 'level5/cut/5_14.jpg',
  author: "HONDECOETER, Gillis Claesz. d'",
  year: '1620-22'
}, {
  id: '5_15',
  name: 'View of the Monastery of El Escorial',
  imageSrc: 'level5/5_15.jpg',
  cutSrc: 'level5/cut/5_15.jpg',
  author: 'HOUASSE, Michel-Ange',
  year: '1723'
}, {
  id: '5_16',
  name: 'The Grand Odalisque',
  imageSrc: 'level5/5_16.jpg',
  cutSrc: 'level5/cut/5_16.jpg',
  author: 'INGRES, Jean-Auguste-Dominique',
  year: '1814'
}, {
  id: '5_17',
  name: 'After a Storm',
  imageSrc: 'level5/5_17.jpg',
  cutSrc: 'level5/cut/5_17.jpg',
  author: 'ISABEY, Eugène',
  year: '1869'
}, {
  id: '5_18',
  name: 'View of La Iglesia y la Plaza de San Antonio, Aranjuez',
  imageSrc: 'level5/5_18.jpg',
  cutSrc: 'level5/cut/5_18.jpg',
  author: 'JOLI, Antonio',
  year: '1753-54'
}, {
  id: '5_19',
  name: 'Washington Crossing the Delaware',
  imageSrc: 'level5/5_19.jpg',
  cutSrc: 'level5/cut/5_19.jpg',
  author: 'LEUTZE, Emanuel Gottlieb',
  year: '1851'
}, {
  id: '5_20',
  name: 'The Royal Procession to the Church of Santa Maria di Piedigrotta',
  imageSrc: 'level5/5_20.jpg',
  cutSrc: 'level5/cut/5_20.jpg',
  author: 'JOLI, Antonio',
  year: 'c. 1770'
}, {
  id: '5_21',
  name: 'Landscape with Cephalus and Procris',
  imageSrc: 'level5/5_21.jpg',
  cutSrc: 'level5/cut/5_21.jpg',
  author: 'KEIRINCKX, Alexander',
  year: 'c. 1620'
}, {
  id: '5_22',
  name: 'Under the Birch Trees',
  imageSrc: 'level5/5_22.jpg',
  cutSrc: 'level5/cut/5_22.jpg',
  author: 'KLODT, Mikhail Konstantinovich',
  year: '1874'
}, {
  id: '5_23',
  name: "The Musicians' Brawl",
  imageSrc: 'level5/5_23.jpg',
  cutSrc: 'level5/cut/5_23.jpg',
  author: 'LA TOUR, Georges de',
  year: '1625-30'
}, {
  id: '5_24',
  name: 'Engagement between Sir George Brydges Rodney and the Spanish Squadron',
  imageSrc: 'level5/5_24.jpg',
  cutSrc: 'level5/cut/5_24.jpg',
  author: 'LUNY, Thomas',
  year: '1782'
}, {
  id: '5_25',
  name: "Rinaldo's Farewell to Armida",
  imageSrc: 'level5/5_25.jpg',
  cutSrc: 'level5/cut/5_25.jpg',
  author: 'LANFRANCO, Giovanni',
  year: '1614'
}, {
  id: '5_26',
  name: 'The Excommunication of Robert the Pious',
  imageSrc: 'level5/5_26.jpg',
  cutSrc: 'level5/cut/5_26.jpg',
  author: 'LAURENS, Jean-Paul',
  year: '1875'
}, {
  id: '5_27',
  name: 'Bacchanal',
  imageSrc: 'level5/5_27.jpg',
  cutSrc: 'level5/cut/5_27.jpg',
  author: 'LAURI, Filippo',
  year: '1675'
}, {
  id: '5_28',
  name: 'Venus and Adonis',
  imageSrc: 'level5/5_28.jpg',
  cutSrc: 'level5/cut/5_28.jpg',
  author: 'LAURI, Filippo',
  year: '1650s'
}, {
  id: '5_29',
  name: 'View of Florence from Villa San Firenze, near San Miniato',
  imageSrc: 'level5/5_29.jpg',
  cutSrc: 'level5/cut/5_29.jpg',
  author: 'LEAR, Edward',
  year: '1864'
}, {
  id: '2_41',
  name: 'Village Scene',
  imageSrc: 'level2/2_41.jpg',
  cutSrc: 'level2/cut/2_41.jpg',
  author: 'DROOCHSLOOT, Joost Cornelisz.',
  year: '1623'
}]);

/***/ }),

/***/ "./src/assets/data_paintings/level6.js":
/*!*********************************************!*\
  !*** ./src/assets/data_paintings/level6.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: '6_01',
  name: 'River in Winter',
  imageSrc: 'level6/6_01.jpg',
  cutSrc: 'level6/cut/6_01.jpg',
  author: 'NEER, Aert van der',
  year: 'c. 1645'
}, {
  id: '6_02',
  name: 'Card-Sharpers',
  imageSrc: 'level6/6_02.jpg',
  cutSrc: 'level6/cut/6_02.jpg',
  author: 'OOST, Jacob van, the Elder',
  year: '1634'
}, {
  id: '6_03',
  name: 'Farmhouse',
  imageSrc: 'level6/6_03.jpg',
  cutSrc: 'level6/cut/6_03.jpg',
  author: 'OUDRY, Jean-Baptiste',
  year: '1750'
}, {
  id: '6_04',
  name: 'An Elegant Company in an Interior',
  imageSrc: 'level6/6_04.jpg',
  cutSrc: 'level6/cut/6_04.jpg',
  author: 'PALAMEDESZ., Anthonie',
  year: '1632-34'
}, {
  id: '6_05',
  name: 'View of the Forum Looking towards the Capitol',
  imageSrc: 'level6/6_05.jpg',
  cutSrc: 'level6/cut/6_05.jpg',
  author: 'PANNINI, Giovanni Paolo',
  year: '1751'
}, {
  id: '6_06',
  name: 'Allegory of Life and Death',
  imageSrc: 'level6/6_06.jpg',
  cutSrc: 'level6/cut/6_06.jpg',
  author: 'PAOLINI, Pietro',
  year: '1628-32'
}, {
  id: '6_07',
  name: 'View of a Southern Coast',
  imageSrc: 'level6/6_07.jpg',
  cutSrc: 'level6/cut/6_07.jpg',
  author: 'PEETERS, Bonaventura',
  year: '1652'
}, {
  id: '6_08',
  name: 'A Cowherd at Pontoise',
  imageSrc: 'level6/6_08.jpg',
  cutSrc: 'level6/cut/6_08.jpg',
  author: 'PISSARRO, Camille',
  year: '1874'
}, {
  id: '6_09',
  name: 'Lordship Lane Station, Dulwich',
  imageSrc: 'level6/6_09.jpg',
  cutSrc: 'level6/cut/6_09.jpg',
  author: 'PISSARRO, Camille',
  year: '1871'
}, {
  id: '6_10',
  name: 'Children of Frederick V Prince Elector of Pfalz and King of Bohemia',
  imageSrc: 'level6/6_10.jpg',
  cutSrc: 'level6/cut/6_10.jpg',
  author: 'POELENBURGH, Cornelis van',
  year: '1628'
}, {
  id: '6_11',
  name: 'Capriccio View of Rome with the Martyrdom of St Lawrence',
  imageSrc: 'level6/6_11.jpg',
  cutSrc: 'level6/cut/6_11.jpg',
  author: 'POELENBURGH, Cornelis van',
  year: '1622-25'
}, {
  id: '6_12',
  name: 'Landscape with Shepherdess and Shepherd Playing Flute',
  imageSrc: 'level6/6_12.jpg',
  cutSrc: 'level6/cut/6_12.jpg',
  author: 'POTTER, Paulus',
  year: 'c. 1643'
}, {
  id: '6_13',
  name: 'Fisherwomen by the Shore',
  imageSrc: 'level6/6_13.jpg',
  cutSrc: 'level6/cut/6_13.jpg',
  author: 'RASMUSSEN, Georg Anton',
  year: '1883'
}, {
  id: '6_14',
  name: 'Fjord in Norway',
  imageSrc: 'level6/6_14.jpg',
  cutSrc: 'level6/cut/6_14.jpg',
  author: 'RASMUSSEN, Georg Anton',
  year: '1891'
}, {
  id: '6_15',
  name: 'The Pont des Arts, Paris',
  imageSrc: 'level6/6_15.jpg',
  cutSrc: 'level6/cut/6_15.jpg',
  author: 'RENOIR, Pierre-Auguste',
  year: '1867'
}, {
  id: '6_16',
  name: 'A Capriccio Landscape with a Domed Church',
  imageSrc: 'level6/6_16.jpg',
  cutSrc: 'level6/cut/6_16.jpg',
  author: 'RICCI, Marco',
  year: '1710s'
}, {
  id: '6_17',
  name: 'Architectural Capriccio',
  imageSrc: 'level6/6_17.jpg',
  cutSrc: 'level6/cut/6_17.jpg',
  author: 'RICCI, Marco',
  year: 'c. 1725'
}, {
  id: '6_18',
  name: 'Bridal Procession in a Spring Landscape',
  imageSrc: 'level6/6_18.jpg',
  cutSrc: 'level6/cut/6_18.jpg',
  author: 'RICHTER, Adrian Ludwig',
  year: '1847'
}, {
  id: '6_19',
  name: 'Venice, Approach to the Grand Canal',
  imageSrc: 'level6/6_19.jpg',
  cutSrc: 'level6/cut/6_19.jpg',
  author: 'ROBERTS, David',
  year: '1855'
}, {
  id: '6_20',
  name: 'A Battle Scene',
  imageSrc: 'level6/6_20.jpg',
  cutSrc: 'level6/cut/6_20.jpg',
  author: 'ROSA, Salvator',
  year: '1640s'
}, {
  id: '6_21',
  name: 'Heroic Battle',
  imageSrc: 'level6/6_21.jpg',
  cutSrc: 'level6/cut/6_21.jpg',
  author: 'ROSA, Salvator',
  year: '1652-64'
}, {
  id: '6_22',
  name: 'An Autumn Landscape with a View of Het Steen',
  imageSrc: 'level6/6_22.jpg',
  cutSrc: 'level6/cut/6_22.jpg',
  author: 'RUBENS, Peter Paul',
  year: 'c. 1635'
}, {
  id: '6_23',
  name: 'Landscape with a Rainbow',
  imageSrc: 'level6/6_23.jpg',
  cutSrc: 'level6/cut/6_23.jpg',
  author: 'RUBENS, Peter Paul',
  year: 'c. 1638'
}, {
  id: '6_24',
  name: 'View of the Town of Alkmaar',
  imageSrc: 'level6/6_24.jpg',
  cutSrc: 'level6/cut/6_24.jpg',
  author: 'RUYSDAEL, Salomon van',
  year: '1645-50'
}, {
  id: '6_25',
  name: "Painter's Studio",
  imageSrc: 'level6/6_25.jpg',
  cutSrc: 'level6/cut/6_25.jpg',
  author: 'RYCKAERT, David the Younger',
  year: '1638'
}, {
  id: '1_41',
  name: 'Ships in Distress off a Rocky Coast',
  imageSrc: 'level1/distress.jpg',
  cutSrc: 'level1/cut/distress.jpg',
  author: 'BACKHUYSEN, Ludolf',
  year: '1667'
}, {
  id: '1_42',
  name: 'A Fishing Pink',
  imageSrc: 'level1/fishing.jpg',
  cutSrc: 'level1/cut/fishing.jpg',
  author: 'BACKHUYSEN, Ludolf',
  year: '1680'
}, {
  id: '1_43',
  name: 'Shipping by the Dutch Coast',
  imageSrc: 'level1/shipping_1.jpg',
  cutSrc: 'level1/cut/shipping_1.jpg',
  author: 'BACKHUYSEN, Ludolf',
  year: 'XVII century'
}, {
  id: '1_44',
  name: 'View from the Nieuwe Maas River towards the City of Vlaardingen',
  imageSrc: 'level1/viewvlaa.jpg',
  cutSrc: 'level1/cut/viewvlaa.jpg',
  author: 'BACKHUYSEN, Ludolf',
  year: '1680s'
}, {
  id: '1_45',
  name: 'Dutch Vessels off a Coastline on a Breezy Day',
  imageSrc: 'level1/vessels1.jpg',
  cutSrc: 'level1/cut/vessels1.jpg',
  author: 'BACKHUYSEN, Ludolf',
  year: '1680'
}]);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/create */ "./src/js/create.js");
/* harmony import */ var _js_dragHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/dragHandler */ "./src/js/dragHandler.js");
/* harmony import */ var _js_dragHandler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_dragHandler__WEBPACK_IMPORTED_MODULE_1__);



window.onload = () => {
  // signIN({ email: 'o@user.com', password: 'Gfhjkm_123' });
  var token = localStorage.getItem('token');

  if (token) {
    Object(_js_create__WEBPACK_IMPORTED_MODULE_0__["createStartPage"])();
  } else {
    Object(_js_create__WEBPACK_IMPORTED_MODULE_0__["createSignPage"])('IN');
  }
};

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");
/* harmony import */ var _existRemove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./existRemove */ "./src/js/existRemove.js");
/* harmony import */ var _api_translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.translate */ "./src/js/api.translate.js");
/* harmony import */ var _createPuzzle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPuzzle */ "./src/js/createPuzzle.js");
/* harmony import */ var _assets_data_paintings_getLevel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/data_paintings/getLevel */ "./src/assets/data_paintings/getLevel.js");
/* harmony import */ var _api_phrase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.phrase */ "./src/js/api.phrase.js");
/* harmony import */ var _statisticsGame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statisticsGame */ "./src/js/statisticsGame.js");
/* harmony import */ var _getDateTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getDateTime */ "./src/js/getDateTime.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










class Game {
  constructor(data) {
    this.data = data;
    this.level = data[0].group;
    this.page = data[0].page;
    this.nextLevel = this.page === 29 ? (this.level + 1) % 6 : this.level;
    this.nextPage = (this.page + 1) % 30;
    this.levelImages = Object(_assets_data_paintings_getLevel__WEBPACK_IMPORTED_MODULE_4__["default"])(this.level);
    this.pageImage = this.levelImages[this.page];
    var sentences = [];
    data.sort(() => Math.random() - 0.5);
    data.forEach(value => {
      var sentenceNode = {};
      var sentenceText = value.textExample.replace(/<b>|<\/b>/g, '');
      var sentence = sentenceText.split(' ');

      if (sentence.length < 11 && sentences.length < 10) {
        var path = "./src/assets/".concat(value.audioExample.replace('files', 'data'));
        sentenceNode.sentenceText = sentenceText;
        sentenceNode.words = sentence;
        sentenceNode.path = path;
        sentenceNode.audio = new Audio(path);
        sentenceNode.sentenceAudio = value.audioExample;
        sentences.push(sentenceNode);
      }
    });
    this.sentences = sentences;
  }

  runGame(sentenceNumber) {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.sentenceNumber = sentenceNumber;
      var game = document.querySelector('.wrapper-game');
      var nav = document.querySelector('.main-page-nav');
      var assembledGamePuzzle = document.querySelector('.wrapper-assembled-game-puzzle');
      var text = yield Object(_api_translate__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.sentences[sentenceNumber].sentenceText);
      Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.wrapper-auto-pronunciation');
      Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.wrapper-game-round');
      [...assembledGamePuzzle.children].forEach(sentence => {
        sentence.classList.remove('opacity-full', 'event-none-opacity-full');
      });
      var wrapperAutoPronunciation = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['wrapper-auto-pronunciation']
      });
      var pronunciationAudio = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['pronunciation-audio', 'prompt'],
        title: 'pronunciation audio'
      });

      pronunciationAudio.onclick = () => {
        _this.sentences[sentenceNumber].audio.play();
      };

      var isDisabledAudio = document.querySelector('.audio-prompt').classList.contains('disabled');

      if (isDisabledAudio) {
        pronunciationAudio.classList.add('opacity-clear-zero');
      }

      var pronunciationText = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['pronunciation-text'],
        title: 'pronunciation text',
        innerText: "".concat(text)
      });
      var isDisabledText = document.querySelector('.translate-prompt').classList.contains('disabled');

      if (isDisabledText) {
        pronunciationText.classList.add('opacity-clear-zero');
      }

      wrapperAutoPronunciation.append(pronunciationAudio, pronunciationText);
      nav.after(wrapperAutoPronunciation);
      var wrapperGameRound = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['wrapper-game-round']
      });
      var gameRoundWords = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['game-round-words']
      });
      var gameRoundControls = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['game-round-controls']
      });
      var dontKnowBotton = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('botton', {
        classList: ['btn', 'game-round-btn', 'dont-know-botton'],
        innerText: 'I don\'t know'
      });
      var checkBotton = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('botton', {
        classList: ['btn', 'game-round-btn', 'check-botton', 'hidden'],
        innerText: 'Check'
      });
      var continueBotton = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('botton', {
        classList: ['btn', 'game-round-btn', 'continue-botton', 'hidden'],
        innerText: 'Continue'
      });
      var resultsBotton = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('botton', {
        classList: ['btn', 'game-round-btn', 'results-botton', 'hidden'],
        innerText: 'Results'
      });

      dontKnowBotton.onclick = () => {
        var isDisabled = document.querySelector('.volume-prompt').classList.contains('disabled');

        if (!isDisabled) {
          _this.sentences[sentenceNumber].audio.play();
        }

        var currentSentence = assembledGamePuzzle.children[sentenceNumber];
        currentSentence.setAttribute('data-is-correct', false);
        currentSentence.classList.remove('opacity-full');
        currentSentence.classList.add('event-none-opacity-full');
        [...currentSentence.children].forEach(nest => {
          if (nest.children.length) {
            gameRoundWords.append(nest.children[0]);
          }
        });
        [...currentSentence.children].forEach(nest => {
          var key = nest.getAttribute('data-key-word');
          var wordPuzzle = [...gameRoundWords.children].find(node => node.getAttribute('data-key-word') === key);
          wordPuzzle.classList.add('absolute');
          wordPuzzle.style.left = '0px';
          wordPuzzle.style.top = '0px';
          nest.append(wordPuzzle);
        });
        checkBotton.classList.add('hidden');
        dontKnowBotton.classList.add('hidden');
        continueBotton.classList.remove('hidden');
      };

      checkBotton.onclick = () => {
        var countCorrectSentence = 0;
        var currentSentence = assembledGamePuzzle.children[sentenceNumber];
        var lengthSentence = currentSentence.children.length;
        [...currentSentence.children].forEach(puzzle => {
          var keyNest = puzzle.getAttribute('data-key-word');
          var keyPuzzle = puzzle.children[0].getAttribute('data-key-word');
          puzzle.children[0].classList.remove('correct-word', 'incorrect-word');

          if (keyNest === keyPuzzle) {
            countCorrectSentence += 1;
            puzzle.children[0].classList.add('correct-word');
          } else {
            puzzle.children[0].classList.add('incorrect-word');
          }
        });
        var isCorrectSentence = countCorrectSentence === lengthSentence;
        currentSentence.setAttribute('data-is-correct', "".concat(isCorrectSentence));

        if (isCorrectSentence) {
          var isDisabled = document.querySelector('.volume-prompt').classList.contains('disabled');

          if (!isDisabled) {
            _this.sentences[sentenceNumber].audio.play();
          }

          checkBotton.classList.add('hidden');
          continueBotton.classList.remove('hidden');
        } else {
          dontKnowBotton.classList.remove('hidden');
        }
      };

      continueBotton.onclick = () => {
        if (_this.sentenceNumber < 9) {
          _this.runGame(_this.sentenceNumber + 1);
        } else if (_this.sentenceNumber === 9) {
          var currentGame = _this.statisticsСollection();

          Object(_storage__WEBPACK_IMPORTED_MODULE_8__["default"])(currentGame.innerHTML);
          resultsBotton.classList.remove('hidden');
          var wrapperGame = document.querySelector('.wrapper-game');
          var imageSentencesGame = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', {
            classList: ['image-sentences-game'],
            src: "./src/assets/data_paintings/".concat(_this.pageImage.imageSrc)
          }, {
            zIndex: 50,
            position: 'absolute'
          });
          wrapperGame.append(imageSentencesGame);
          _this.sentenceNumber += 1;
        } else {
          Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.results-page');
          document.querySelector('.main-page').classList.remove('hidden');
          document.querySelector('.select-level').value = _this.nextLevel;
          document.querySelector('.select-level-page').value = _this.nextPage;
          Object(_api_phrase__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.nextLevel, _this.nextPage).then(nodes => {
            new Game(nodes).prepareForMakePuzzle();
          });
        }
      };

      resultsBotton.onclick = () => {
        Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.results-page');
        document.querySelector('.main-page').classList.add('hidden');
        var resultsPage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
          classList: ['results-page']
        });
        var wrapperResults = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
          classList: ['wrapper-results']
        });
        var wrapperResultsImage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
          classList: ['wrapper-results-image']
        });
        var resultImage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', {
          classList: ['result-image'],
          src: "./src/assets/data_paintings/".concat(_this.pageImage.imageSrc)
        }, {
          width: '300px'
        });
        var resultAuthor = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h4', {
          innerText: "".concat(_this.pageImage.author)
        }, {
          color: 'darkslategray'
        });
        var resultNameImage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h4', {
          innerText: "".concat(_this.pageImage.name, "(").concat(_this.pageImage.year, ")")
        }, {
          color: 'darkslategray'
        });
        wrapperResultsImage.append(resultImage, resultAuthor, resultNameImage);
        var wrapperResultsSentences = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
          classList: ['wrapper-results-sentences']
        });
        var resultKnow = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
          classList: ['result-know']
        });
        var resultDontKnow = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
          classList: ['result-dont-know']
        });
        wrapperResultsSentences.append(resultKnow, resultDontKnow);
        [...assembledGamePuzzle.children].forEach((sentence, index) => {
          var wrapperResult = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
            classList: ['wrapper-result'],
            'data-result-number-sentence': index
          });
          var resultAudio = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
            classList: ['result-audio']
          });

          resultAudio.onclick = () => {
            _this.sentences[index].audio.play();
          };

          var resultSentence = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
            classList: ['result-sentence'],
            innerText: "".concat(_this.sentences[index].sentenceText)
          });
          wrapperResult.append(resultAudio, resultSentence);
          var isCorrect = sentence.getAttribute('data-is-correct');

          if (isCorrect === 'true') {
            resultKnow.append(wrapperResult);
          } else {
            resultDontKnow.append(wrapperResult);
          }
        });
        var titleKnow = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', {
          innerText: "I know ".concat(resultKnow.children.length)
        }, {
          color: 'white',
          background: '#98d33c',
          borderRadius: '6px',
          marginBottom: '5px'
        });
        resultKnow.prepend(titleKnow);
        var titleDontKnow = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', {
          innerText: "I don't know ".concat(resultDontKnow.children.length)
        }, {
          color: 'white',
          background: '#bd3737',
          borderRadius: '6px',
          marginBottom: '5px'
        });
        resultDontKnow.prepend(titleDontKnow);
        var wrapperResultsBotton = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
          classList: ['wrapper-results-botton']
        }, {
          display: 'flex'
        });
        var statisticBotton = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('botton', {
          classList: ['btn', 'game-round-btn', 'statistic-botton'],
          innerText: 'Statistic'
        });

        statisticBotton.onclick = () => {
          document.querySelector('.results-page').classList.add('hidden');
          var games = window.localStorage.getItem('english-puzzle-statistics');

          if (games) {
            var arr = JSON.parse(games);
            Object(_statisticsGame__WEBPACK_IMPORTED_MODULE_6__["default"])(arr);
          }
        };

        wrapperResultsBotton.append(continueBotton, statisticBotton);
        wrapperResults.append(wrapperResultsImage, wrapperResultsSentences, wrapperResultsBotton);
        resultsPage.append(wrapperResults);
        document.querySelector('body').append(resultsPage);
      };

      gameRoundControls.append(dontKnowBotton, checkBotton, continueBotton, resultsBotton);
      wrapperGameRound.append(gameRoundWords, gameRoundControls);

      if (sentenceNumber === 0) {
        window.scrollTo({
          top: 0
        });
      }

      assembledGamePuzzle.children[sentenceNumber].classList.add('opacity-full');
      var bounding = assembledGamePuzzle.children[sentenceNumber].getBoundingClientRect();

      if (sentenceNumber === 0) {
        _this.gameY = Math.abs(bounding.bottom - 35);
      } else {
        _this.gameY += bounding.height;
      }

      wrapperGameRound.setAttribute('style', "top: ".concat(_this.gameY, "px"));
      var shuffle = [..._this.puzzle.children[sentenceNumber].children].sort(() => Math.random() - 0.5);
      var prompImgCardBotton = document.querySelector('.image-card-prompt');
      shuffle.forEach(puzzle => {
        if (prompImgCardBotton.classList.contains('disabled')) {
          var currentStyle = puzzle.getAttribute('style');
          puzzle.setAttribute('style', "".concat(currentStyle, "background: darkslategray;"));
        }

        gameRoundWords.append(puzzle);
      });
      game.after(wrapperGameRound);
    })();
  }

  statisticsСollection() {
    var gameStatistics = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['game-statistics']
    });
    var dateStatistics = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['date-statistics'],
      innerText: "".concat(Object(_getDateTime__WEBPACK_IMPORTED_MODULE_7__["default"])())
    });
    var levelAndPage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['levelAndPage'],
      innerText: "Level: ".concat(this.level + 1, ". Page: ").concat(this.page + 1)
    });
    var statisticsImage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['wrapper-results-image']
    });
    var resultImage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', {
      classList: ['result-image'],
      src: "./src/assets/data_paintings/".concat(this.pageImage.imageSrc)
    }, {
      width: '300px'
    });
    var resultAuthor = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h4', {
      innerText: "".concat(this.pageImage.author)
    }, {
      color: 'darkslategray'
    });
    var resultNameImage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h4', {
      innerText: "".concat(this.pageImage.name, "(").concat(this.pageImage.year, ")")
    }, {
      color: 'darkslategray'
    });
    statisticsImage.append(resultImage, resultAuthor, resultNameImage);
    var know = [...document.querySelector('.wrapper-assembled-game-puzzle').children].filter(sentence => sentence.getAttribute('data-is-correct') === 'true');
    var titleKnow = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      innerText: "I know ".concat(know.length)
    });
    var titleDontKnow = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      innerText: "I don't know ".concat(10 - know.length)
    });
    gameStatistics.append(statisticsImage, dateStatistics, levelAndPage);
    gameStatistics.append(titleKnow, titleDontKnow);
    return gameStatistics;
  }

  prepareForMakePuzzle() {
    Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.wrapper-game');
    window.scrollTo({
      top: 0
    });
    var wrapperGame = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['wrapper-game']
    });
    var wrapperSentencesGame = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['wrapper-sentences-game']
    });
    var imageSentencesGame = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', {
      classList: ['image-sentences-game'],
      src: "./src/assets/data_paintings/".concat(this.pageImage.imageSrc)
    });

    imageSentencesGame.onload = () => {
      this.puzzle = Object(_createPuzzle__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
      this.runGame(0);
    };

    this.sentences.forEach((sentenceNode, index) => {
      var sentenceGame = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['sentence-game', "sentence-".concat(index)]
      });
      sentenceNode.words.forEach(word => {
        var wordGame = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
          classList: ['word-game'],
          innerText: "".concat(word),
          'data-key-word': "".concat(word),
          'data-key-sentence': "".concat(index)
        });
        sentenceGame.append(wordGame);
      });
      wrapperSentencesGame.append(sentenceGame);
    });
    wrapperGame.append(wrapperSentencesGame, imageSentencesGame);
    document.querySelector('.main-page').append(wrapperGame);
  }

}

/***/ }),

/***/ "./src/js/api.phrase.js":
/*!******************************!*\
  !*** ./src/js/api.phrase.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator(function* (group, page) {
    var url = "https://afternoon-falls-25894.herokuapp.com/words?group=".concat(group, "&page=").concat(page);
    var response = yield fetch(url);
    var data = yield response.json();
    return data;
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/js/api.translate.js":
/*!*********************************!*\
  !*** ./src/js/api.translate.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var API_KEY = 'trnsl.1.1.20191212T163559Z.5976e236f00df928.df3aab73e789795377c7f6b4f57195e585fb0e53';
var URL_API = 'https://translate.yandex.net/';
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator(function* (text) {
    var url = "".concat(URL_API, "api/v1.5/tr.json/translate?lang=ru&key=").concat(API_KEY, "&text=").concat(text);
    var response = yield fetch(url);
    var data = yield response.json();
    return data.text;
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/js/create.js":
/*!**************************!*\
  !*** ./src/js/create.js ***!
  \**************************/
/*! exports provided: createSignPage, createStartPage, createMainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSignPage", function() { return createSignPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStartPage", function() { return createStartPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainPage", function() { return createMainPage; });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");
/* harmony import */ var _existRemove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./existRemove */ "./src/js/existRemove.js");
/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration */ "./src/js/registration.js");
/* harmony import */ var _api_phrase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.phrase */ "./src/js/api.phrase.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Game */ "./src/js/Game.js");
/* harmony import */ var _signIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signIn */ "./src/js/signIn.js");
/* harmony import */ var _signUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signUp */ "./src/js/signUp.js");








function createSignPage(mode) {
  Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.sign-page');
  Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.start-page');
  Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-page');

  if (mode === 'UP') {
    var signPage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['sign-page'],
      innerHTML: '<h1 class="sign-page__title">Sign up</h1>'
    });
    var signUpForm = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('form', {
      classList: ['sign-up-form'],
      name: 'signUp'
    });
    var wrapperEmail = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['wrapper-email']
    });
    var labelEmail = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
      for: 'email',
      innerText: 'Email: '
    });
    var inputEmail = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
      classList: ['sign-up-email'],
      type: 'email',
      name: 'email',
      required: 'required'
    });
    wrapperEmail.append(labelEmail, inputEmail);
    var wrapperPassword = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['wrapper-password']
    });
    var labelPassword = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
      for: 'password',
      innerText: 'Password: '
    });
    var inputPassword = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
      classList: ['sign-up-password'],
      type: 'password',
      name: 'password',
      pattern: '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W|_])[a-zA-Z0-9_\\W]{8,}$',
      required: 'required'
    });
    wrapperPassword.append(labelPassword, inputPassword);
    var inputSubmit = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
      classList: ['sign-up', 'btn'],
      type: 'submit',
      value: 'sign up'
    });

    inputSubmit.onclick = e => {
      var {
        signUp
      } = document.forms;
      var emailValue = signUp.elements.email.value;
      var passwordValue = signUp.elements.password.value;

      if (emailValue && passwordValue) {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_])[a-zA-Z0-9_\W]{8,}$/.test(passwordValue)) {
          e.preventDefault();
          Object(_signUp__WEBPACK_IMPORTED_MODULE_6__["default"])({
            email: emailValue,
            password: passwordValue
          });
        }
      }
    };

    signUpForm.append(wrapperEmail, wrapperPassword, inputSubmit);
    signPage.append(signUpForm);
    document.querySelector('body').append(signPage);
  }

  if (mode === 'IN') {
    var _signPage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['sign-page'],
      innerHTML: '<h1 class="sign-page__title">Sign in</h1>'
    });

    var _signUpForm = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('form', {
      classList: ['sign-in-form'],
      name: 'signIn'
    });

    var _wrapperEmail = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['wrapper-email']
    });

    var _labelEmail = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
      for: 'email',
      innerText: 'Email: '
    });

    var _inputEmail = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
      classList: ['sign-in-email'],
      type: 'email',
      name: 'email',
      required: 'required'
    });

    _wrapperEmail.append(_labelEmail, _inputEmail);

    var _wrapperPassword = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['wrapper-password']
    });

    var _labelPassword = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
      for: 'password',
      innerText: 'Password: '
    });

    var _inputPassword = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
      classList: ['sign-in-password'],
      type: 'password',
      name: 'password',
      required: 'required'
    });

    _wrapperPassword.append(_labelPassword, _inputPassword);

    var _inputSubmit = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
      classList: ['sign-in', 'btn'],
      type: 'submit',
      value: 'sign in'
    });

    _inputSubmit.onclick = e => {
      var {
        signIn
      } = document.forms;
      var emailValue = signIn.elements.email.value;
      var passwordValue = signIn.elements.password.value;

      if (emailValue && passwordValue) {
        e.preventDefault();
        Object(_signIn__WEBPACK_IMPORTED_MODULE_5__["default"])({
          email: emailValue,
          password: passwordValue
        });
      }
    };

    _signUpForm.append(_wrapperEmail, _wrapperPassword, _inputSubmit);

    _signPage.append(_signUpForm);

    document.querySelector('body').append(_signPage);
  }
}

function createMainPage() {
  var mainPage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['main-page']
  });
  var mainPageNav = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('nav', {
    classList: ['main-page-nav']
  });
  var wrapperLevel = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['wrapper-level']
  });
  var labelLevel = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
    for: 'level',
    innerText: 'Level: '
  });
  var selectLevel = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('select', {
    classList: ['select-level'],
    name: 'level',
    innerHTML: "\n      <option value=\"0\">1</option>\n      <option value=\"1\">2</option>\n      <option value=\"2\">3</option>\n      <option value=\"3\">4</option>\n      <option value=\"4\">5</option>\n      <option value=\"5\">6</option>\n    "
  });
  wrapperLevel.append(labelLevel, selectLevel);
  var wrapperLevelPage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['wrapper-level-page']
  });
  var labelLevelPage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
    for: 'level-page',
    innerText: 'level page: '
  });
  var selectLevelPage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('select', {
    classList: ['select-level-page'],
    name: 'level-page'
  });

  for (var i = 0; i < 30; i += 1) {
    var option = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
      value: "".concat(i),
      innerText: "".concat(i + 1)
    });
    selectLevelPage.append(option);
  }

  selectLevel.onchange = () => {
    Object(_api_phrase__WEBPACK_IMPORTED_MODULE_3__["default"])(selectLevel.value, selectLevelPage.value).then(nodes => {
      new _Game__WEBPACK_IMPORTED_MODULE_4__["default"](nodes).prepareForMakePuzzle();
    });
  };

  selectLevelPage.onchange = () => {
    Object(_api_phrase__WEBPACK_IMPORTED_MODULE_3__["default"])(selectLevel.value, selectLevelPage.value).then(nodes => {
      new _Game__WEBPACK_IMPORTED_MODULE_4__["default"](nodes).prepareForMakePuzzle();
    });
  };

  wrapperLevelPage.append(labelLevelPage, selectLevelPage);
  var wrapperPrompt = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['wrapper-prompt']
  });
  var audioPrompt = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['audio-prompt', 'prompt'],
    title: 'on / off audio prompt'
  });

  audioPrompt.onclick = () => {
    if (audioPrompt.classList.contains('disabled')) {
      audioPrompt.classList.remove('disabled');
      document.querySelector('.pronunciation-audio').classList.remove('opacity-clear-zero');
    } else {
      audioPrompt.classList.add('disabled');
      document.querySelector('.pronunciation-audio').classList.add('opacity-clear-zero');
    }
  };

  var translatePrompt = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['translate-prompt', 'prompt'],
    title: 'on / off translate prompt'
  });

  translatePrompt.onclick = () => {
    if (translatePrompt.classList.contains('disabled')) {
      translatePrompt.classList.remove('disabled');
      document.querySelector('.pronunciation-text').classList.remove('opacity-clear-zero');
    } else {
      translatePrompt.classList.add('disabled');
      document.querySelector('.pronunciation-text').classList.add('opacity-clear-zero');
    }
  };

  var volumePrompt = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['volume-prompt', 'prompt'],
    title: 'on / off volume prompt'
  });

  volumePrompt.onclick = () => {
    if (volumePrompt.classList.contains('disabled')) {
      volumePrompt.classList.remove('disabled');
    } else {
      volumePrompt.classList.add('disabled');
    }
  };

  var imageCardPrompt = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['image-card-prompt', 'prompt'],
    title: 'on / off card image prompt'
  });

  imageCardPrompt.onclick = () => {
    var puzzleCards = document.querySelectorAll('.assembled-word-game-puzzle');

    if (imageCardPrompt.classList.contains('disabled')) {
      imageCardPrompt.classList.remove('disabled');
      puzzleCards.forEach(puzzle => {
        var currentStyle = puzzle.getAttribute('style');
        puzzle.setAttribute('style', "".concat(currentStyle.replace('background: darkslategray;', '')));
      });
    } else {
      imageCardPrompt.classList.add('disabled');
      puzzleCards.forEach(puzzle => {
        var currentStyle = puzzle.getAttribute('style');
        puzzle.setAttribute('style', "".concat(currentStyle, "background: darkslategray;"));
      });
    }
  };

  var imageAllPrompt = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['image-all-prompt', 'prompt'],
    title: 'on / off cell image prompt'
  });

  imageAllPrompt.onclick = () => {
    var cellNests = document.querySelectorAll('.word-game-puzzle');

    if (imageAllPrompt.classList.contains('disabled')) {
      imageAllPrompt.classList.remove('disabled');
      [...cellNests].forEach(puzzle => {
        var currentStyle = puzzle.getAttribute('style');
        puzzle.setAttribute('style', "".concat(currentStyle.replace('background: #6bc1b0;', '')));
      });
    } else {
      imageAllPrompt.classList.add('disabled');
      [...cellNests].forEach(puzzle => {
        var currentStyle = puzzle.getAttribute('style');
        puzzle.setAttribute('style', "".concat(currentStyle, "background: #6bc1b0;"));
      });
    }
  };

  wrapperPrompt.append(audioPrompt, translatePrompt, volumePrompt, imageCardPrompt, imageAllPrompt);
  mainPageNav.append(wrapperLevel, wrapperLevelPage, wrapperPrompt);
  mainPage.append(mainPageNav);
  document.querySelector('body').append(mainPage);
  Object(_api_phrase__WEBPACK_IMPORTED_MODULE_3__["default"])(selectLevel.value, selectLevelPage.value).then(nodes => {
    new _Game__WEBPACK_IMPORTED_MODULE_4__["default"](nodes).prepareForMakePuzzle();
  });
}

function createStartPage() {
  Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.sign-page');
  Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.start-page');
  Object(_registration__WEBPACK_IMPORTED_MODULE_2__["default"])('logged');
  var startPage = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['start-page']
  });
  var startPageTitle = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', {
    classList: ['start-page__title'],
    innerText: 'ENGLISH PUZZLE'
  });
  var startPageText = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', {
    classList: ['start-page__text'],
    innerHTML: "Click on words, collect phrases.<br>\n  Words can be drag and drop. Select tooltips in the menu."
  });
  var startPageButton = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
    classList: ['start-page__button', 'btn'],
    innerText: 'Start'
  });

  startPageButton.onclick = () => {
    startPage.remove();
    createMainPage();
  };

  startPage.append(startPageTitle, startPageText, startPageButton);
  document.querySelector('body').append(startPage);
}

var header = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('header', {
  classList: ['header']
});
var logout = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
  classList: ['logout', 'event-none', 'btn-small'],
  innerText: 'Logout'
});

logout.onclick = () => {
  localStorage.removeItem('token');
  Object(_registration__WEBPACK_IMPORTED_MODULE_2__["default"])('not logged');
  createSignPage('IN');
};

var pageSignIn = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
  classList: ['page-sign-in', 'btn-small'],
  innerText: 'sign in'
});

pageSignIn.onclick = () => {
  createSignPage('IN');
};

var pageSignUp = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
  classList: ['page-sign-up', 'btn-small'],
  innerText: 'sign up'
});

pageSignUp.onclick = () => {
  createSignPage('UP');
};

header.append(logout, pageSignIn, pageSignUp);
document.querySelector('body').append(header);


/***/ }),

/***/ "./src/js/createElement.js":
/*!*********************************!*\
  !*** ./src/js/createElement.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createElement; });
function createElement(type) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var element = document.createElement(type);
  Object.keys(attributes).forEach(key => {
    if (key === 'classList') {
      element.classList.add(...attributes[key]);
    } else if (/data-/.test(key)) {
      element.setAttribute(key, attributes[key]);
    } else {
      element[key] = attributes[key];
    }
  });
  Object.keys(styles).forEach(key => {
    element.style[key] = styles[key];
  });
  return element;
}

/***/ }),

/***/ "./src/js/createPuzzle.js":
/*!********************************!*\
  !*** ./src/js/createPuzzle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");

/* harmony default export */ __webpack_exports__["default"] = (data => {
  var wrapperGame = document.querySelector('.wrapper-game');
  var bounding = wrapperGame.getBoundingClientRect();
  var game = document.querySelector('.wrapper-sentences-game').children;
  var puzzleGame = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['wrapper-game-puzzle']
  });
  var assembledPuzzleGame = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['wrapper-assembled-game-puzzle']
  });
  [...game].forEach((sentence, heightIndex) => {
    var assembledSentencePuzzle = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['assembled-sentence-game-puzzle', "sentence-".concat(heightIndex)]
    });
    assembledPuzzleGame.append(assembledSentencePuzzle);
    var sentencePuzzle = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['sentence-game-puzzle', "sentence-".concat(heightIndex)]
    });
    puzzleGame.append(sentencePuzzle);
    var widthPuzzle = 0;
    [...sentence.children].forEach((word, index) => {
      var bound = word.getBoundingClientRect();
      var width = Number(bound.width);

      if (sentence.children.length - 1 > index) {
        width += 10;
      }

      var wordPuzzle = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
        classList: ['word-game-puzzle', 'assembled-word-game-puzzle'],
        innerText: "".concat(word.textContent),
        'data-key-word': "".concat(word.textContent),
        'data-key-sentence': "".concat(heightIndex)
      }, {
        width: "".concat(width, "px"),
        height: "".concat(bound.height, "px"),
        background: "url(./src/assets/data_paintings/".concat(data.pageImage.imageSrc, ")"),
        backgroundSize: "".concat(bounding.width, "px"),
        backgroundPositionX: "-".concat(widthPuzzle, "px"),
        backgroundPositionY: "-".concat(bound.height * heightIndex, "px")
      });

      if (index === 0) {
        wordPuzzle.classList.add('first-puzzle');
      }

      if (index > 0 && sentence.children.length - 1 > index) {
        wordPuzzle.classList.add('center-puzzle');
      }

      if (sentence.children.length - 1 === index) {
        wordPuzzle.classList.add('last-puzzle');
      }

      widthPuzzle += Number(bound.width);
      var assembledWordPuzzle = wordPuzzle.cloneNode(true);
      assembledWordPuzzle.classList.remove('assembled-word-game-puzzle');
      assembledWordPuzzle.textContent = '';
      wordPuzzle.classList.remove('word-game-puzzle');

      if (!assembledWordPuzzle.classList.contains('last-puzzle')) {
        assembledWordPuzzle.classList.add('assembled-puzzle');
      }

      assembledSentencePuzzle.append(assembledWordPuzzle);
      sentencePuzzle.append(wordPuzzle);
    });
  });
  [...wrapperGame.children].forEach(node => node.remove());
  wrapperGame.append(assembledPuzzleGame);
  return puzzleGame;
});

/***/ }),

/***/ "./src/js/dragHandler.js":
/*!*******************************!*\
  !*** ./src/js/dragHandler.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var drag = {};
document.addEventListener('mousedown', e => {
  if (e.target.classList.contains('assembled-word-game-puzzle')) {
    drag.element = e.target;
    drag.parent = drag.element.parentNode;
    drag.bound = drag.element.getBoundingClientRect();
    drag.xPosition = e.clientX - drag.bound.x;
    drag.yPosition = e.clientY - drag.bound.y;
    drag.x = e.clientX;
    drag.y = e.clientY;
    drag.element.style.left = "".concat(e.clientX - drag.xPosition, "px");
    drag.element.style.top = "".concat(e.clientY - drag.yPosition, "px");
    e.target.classList.remove('absolute');
    e.target.classList.add('fixed', 'grabbing');
  }
});
document.addEventListener('mousemove', e => {
  if (drag.element) {
    if (e.target.parentNode.classList.contains('word-game-puzzle')) {
      document.querySelector('.game-round-words').append(drag.element);
    }

    drag.element.style.left = "".concat(e.clientX - drag.xPosition, "px");
    drag.element.style.top = "".concat(e.clientY - drag.yPosition, "px");
    drag.element.classList.add('event-none');
  }
});
document.addEventListener('mouseup', e => {
  if (drag.element) {
    var isDrop = e.target.classList.contains('word-game-puzzle');
    var isKeyDrag = e.target.getAttribute('data-key-sentence');
    var isKeyDrop = drag.element.getAttribute('data-key-sentence');
    var roundElements = drag.element.parentNode.classList.contains('game-round-words');
    var isDropPuzzle = e.target.classList.contains('assembled-word-game-puzzle');

    if (isDropPuzzle) {
      e.target.parentNode.append(drag.element);
      drag.parent.append(e.target);
    }

    if (drag.x === e.clientX && drag.y === e.clientY) {
      if (roundElements) {
        var empty = [...document.querySelector('.opacity-full').children].find(word => !word.children.length);
        empty.append(drag.element);
        drag.element.classList.add('absolute');
      } else {
        document.querySelector('.game-round-words').append(drag.element);
      }
    }

    if (isKeyDrag === isKeyDrop && isDrop && !e.target.children.length) {
      e.target.append(drag.element);
    }

    drag.element.classList.remove('fixed', 'grabbing', 'event-none');
    drag.element.style.left = '0px';
    drag.element.style.top = '0px';
    drag.element = undefined;
    [...document.querySelector('.game-round-words').children].forEach(el => {
      el.classList.remove('absolute');
    });
    var countFillRound = 0;
    var currentSentence = document.querySelector('.opacity-full');
    [...currentSentence.children].forEach(el => {
      if (el.children.length) {
        countFillRound += 1;
        el.children[0].classList.add('absolute');
        el.children[0].style.left = '0px';
        el.children[0].style.top = '0px';
      }
    });

    if (countFillRound === currentSentence.children.length) {
      currentSentence.classList.remove('opacity-full');
      currentSentence.classList.add('event-none-opacity-full');
      document.querySelector('.dont-know-botton').classList.add('hidden');
      document.querySelector('.check-botton').classList.remove('hidden');
    }
  }
});

/***/ }),

/***/ "./src/js/existRemove.js":
/*!*******************************!*\
  !*** ./src/js/existRemove.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (className => {
  var el = document.querySelector(className);

  if (el) {
    el.remove();
  }
});

/***/ }),

/***/ "./src/js/getDateTime.js":
/*!*******************************!*\
  !*** ./src/js/getDateTime.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var date = new Date();
  var currentDate = "".concat(date.getDate(), " ").concat(months[date.getMonth()], " ").concat(date.getFullYear());
  var hour = "".concat(date.getHours());
  var minute = "".concat(Number(date.getMinutes()) >= 10 ? date.getMinutes() : 0 + String(date.getMinutes()));
  var second = "".concat(Number(date.getSeconds()) >= 10 ? date.getSeconds() : 0 + String(date.getSeconds()));
  return "".concat(currentDate, " ").concat(hour, ":").concat(minute, ":").concat(second);
});

/***/ }),

/***/ "./src/js/registration.js":
/*!********************************!*\
  !*** ./src/js/registration.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (status => {
  if (status === 'logged') {
    document.querySelector('.logout').classList.remove('event-none');
    document.querySelector('.page-sign-in').classList.add('event-none');
    document.querySelector('.page-sign-up').classList.add('event-none');
  }

  if (status === 'not logged') {
    document.querySelector('.logout').classList.add('event-none');
    document.querySelector('.page-sign-in').classList.remove('event-none');
    document.querySelector('.page-sign-up').classList.remove('event-none');
  }
});

/***/ }),

/***/ "./src/js/signIn.js":
/*!**************************!*\
  !*** ./src/js/signIn.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");
/* harmony import */ var _existRemove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./existRemove */ "./src/js/existRemove.js");


/* harmony default export */ __webpack_exports__["default"] = (user => {
  fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(data => {
    var {
      ok
    } = data;

    if (ok) {
      return data.json();
    }

    return data.text();
  }).then(data => {
    Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.message-error-sign-in');

    if (typeof data === 'string') {
      var message = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
        classList: ['message-error-sign-in'],
        innerText: "".concat(data)
      }, {
        color: 'darkred'
      });
      document.querySelector('.sign-in').before(message);
    } else {
      localStorage.setItem('token', data.token);
      window.location.reload();
    }
  });
});

/***/ }),

/***/ "./src/js/signUp.js":
/*!**************************!*\
  !*** ./src/js/signUp.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");
/* harmony import */ var _existRemove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./existRemove */ "./src/js/existRemove.js");


/* harmony default export */ __webpack_exports__["default"] = (user => {
  fetch('https://afternoon-falls-25894.herokuapp.com/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(data => {
    var {
      ok
    } = data;

    if (ok) {
      return data.json();
    }

    return data.text();
  }).then(data => {
    Object(_existRemove__WEBPACK_IMPORTED_MODULE_1__["default"])('.message-error-sign-up');
    var message = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
      classList: ['message-error-sign-up']
    }, {
      color: 'darkred'
    });
    document.querySelector('.sign-up').before(message);

    if (typeof data === 'string') {
      message.innerText = "".concat(data);
    } else {
      console.log('new user:', data);
      message.innerText = 'User was created.';
    }
  });
});

/***/ }),

/***/ "./src/js/statisticsGame.js":
/*!**********************************!*\
  !*** ./src/js/statisticsGame.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");

/* harmony default export */ __webpack_exports__["default"] = (results => {
  var pageStatistics = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['page-statistics']
  });
  var wrapperStatistics = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    classList: ['wrapper-statistics']
  });
  var returnFromStatistics = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('botton', {
    classList: ['btn', 'game-round-btn'],
    innerText: 'return'
  });

  returnFromStatistics.onclick = () => {
    pageStatistics.remove();
    document.querySelector('.results-page').classList.remove('hidden');
  };

  results.forEach(game => {
    var div = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      classList: ['game-statistics'],
      innerHTML: "".concat(game)
    });
    wrapperStatistics.append(div);
  });
  pageStatistics.append(wrapperStatistics, returnFromStatistics);
  document.querySelector('body').append(pageStatistics);
});

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (storage => {
  var games = window.localStorage.getItem('english-puzzle-statistics');

  if (games) {
    var arr = JSON.parse(games);
    arr.push(storage);
    window.localStorage.setItem('english-puzzle-statistics', JSON.stringify(arr));
  } else {
    window.localStorage.setItem('english-puzzle-statistics', JSON.stringify([storage]));
  }
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/scss/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map