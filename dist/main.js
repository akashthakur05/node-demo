require('source-map-support/register');
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/components/jigserv/jigserv.controller.js":
/*!******************************************************!*\
  !*** ./src/components/jigserv/jigserv.controller.js ***!
  \******************************************************/
/*! exports provided: categories, university, program, programspecific */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "university", function() { return university; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "program", function() { return program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programspecific", function() { return programspecific; });
function categories(req, res, next) {
  return res.status(200).json({
    data: [{
      id: '1',
      type: 'category',
      attributes: {
        name: 'All Categories',
        selected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--056705960737373e41047c8b54b90c63703c583c/all.svg',
        unselected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ceee8fc04eadc30e065f957cb6045a3b18b8682b/all.svg',
        sub_categories: [],
        programs_count: 467
      }
    }, {
      id: '2',
      type: 'category',
      attributes: {
        name: 'Innovation',
        selected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--10f1db9d95925515ea2060ebc5205d7b3314297c/innovation.svg',
        unselected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--24bc8a6bfe42d683487c1e1715fc2c59aeaabdde/innovation.svg',
        sub_categories: ['Innovation Management', 'Change Management', 'New Product Development', 'Design Thinking'],
        programs_count: 39
      }
    }, {
      id: '3',
      type: 'category',
      attributes: {
        name: 'Digital Transformation',
        selected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--964f1dee186e8a0115ba7727f88d591b26fabcdc/digital.svg',
        unselected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--03a71ae8199f67ff35a7ef39e50c3524f314f791/digital.svg',
        sub_categories: [],
        programs_count: 20
      }
    }, {
      id: '4',
      type: 'category',
      attributes: {
        name: 'Finance \u0026 FinTech',
        selected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f9b84cbbebcebfdf61054ce49715c96a0ea96a47/finance.svg',
        unselected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a4a3d6fc661870d7b81bc7ec5ea2257cb914259d/finance.svg',
        sub_categories: ['Risk Management', 'Financial Modelling', 'Business Taxation', 'Corporate Valuation', 'Mergers \u0026 Acquisitions', 'Derivatives', 'FinTech', 'Private Equity', 'Investments'],
        programs_count: 60
      }
    }, {
      id: '5',
      type: 'category',
      attributes: {
        name: 'Business Analytics',
        selected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBIdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8a238dfbeaecf9223e336e90d7a1ab65f2dc3ae1/analytics.svg',
        unselected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBJQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--701853d7994679c41a621275d4b4d000bc665e0c/analytics.svg',
        sub_categories: ['Artificial Intelligence', 'Machine Learning', 'Digital Analytics', 'Predictive Analytics', 'Business Analytics'],
        programs_count: 28
      }
    }, {
      id: '6',
      type: 'category',
      attributes: {
        name: 'Operations',
        selected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBKZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--466b13a870ce91153f1c54574fe320efc794fae6/operations.svg',
        unselected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBKdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--53b67611cbbc56b15cd391bc53372e4946562170/operations.svg',
        sub_categories: ['Operation Excellence', 'Supply Chain Management', 'Project Management'],
        programs_count: 11
      }
    }, {
      id: '7',
      type: 'category',
      attributes: {
        name: 'Leadership/HRM',
        selected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a433a466c66a866e504f52f3aa69a379394ca70/leadership.svg',
        unselected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--be5d022baad45a52a995912b7ddbd33c4c0ddb9a/leadership.svg',
        sub_categories: [],
        programs_count: 172
      }
    }, {
      id: '8',
      type: 'category',
      attributes: {
        name: 'Marketing',
        selected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e7c9cf1e2000100536d882dfaef79acdf35879f6/marketing.svg',
        unselected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1335c7bda79fa610ee33c798a6bc3f0d250b6501/marketing.svg',
        sub_categories: ['Digital Marketing', 'Strategic Marketing', 'Brand Management', 'Hi-Tech Marketing', 'Retail Management', 'Pricing', 'B2B Marketing'],
        programs_count: 35
      }
    }, {
      id: '9',
      type: 'category',
      attributes: {
        name: 'Strategy',
        selected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBPdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ab940644e1e0c03e1c8282259d69b70b3349ed7b/strategy.svg',
        unselected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBQQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--93623ee36abdeb623447e16ea73973228d774248/strategy.svg',
        sub_categories: [],
        programs_count: 72
      }
    }, {
      id: '10',
      type: 'category',
      attributes: {
        name: 'Technology',
        selected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBXZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6add863994f8036b6144b933a3ff988382499963/Technology-white.svg',
        unselected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBXdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e0ea1a0320f8a618c3a30ef1b5b45b980b594650/Technology.svg',
        sub_categories: ['Cyber Security', 'Cloud Computing', 'Networking'],
        programs_count: 4
      }
    }, {
      id: '11',
      type: 'category',
      attributes: {
        name: 'General Management',
        selected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlFDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--096eb75c005275d1dec1e8cf807b6b2455df5a0d/Geneal%20Management%20_white.svg',
        unselected_icon: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6f80190588ddfac7a8bec75ef1c621ad38b36ad8/Geneal%20Management%20_dark.svg',
        sub_categories: [],
        programs_count: 26
      }
    }]
  });
}
function university(req, res, next) {
  return res.status(200).json({
    data: [{
      id: 'IIMRLGMH01141',
      type: 'program',
      attributes: {
        name: 'Executive PG Diploma Programme in Management (ePGPx) Batch-04',
        apply_by: '2021-02-22T00:00:00.000Z',
        start_date: '2021-05-01T00:00:00.000Z',
        end_date: '2022-04-30T00:00:00.000Z',
        contact_days: '',
        site_url: 'https://admission.iimrohtak.ac.in/epgpx/',
        certificate_program: true,
        eligibility: 'For executives with at least 5 years of experience',
        alumini_status: true,
        placement_assistance: false,
        delivery: 'Hybrid',
        knowledge_level: 'Intermediate',
        program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTBGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a18b3082360ab831d2fa47597141fbb14d231ef/general_management_22.jpg',
        program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdThGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da81498db9a311d04ae20743a1ddf9b44a0fbf7c/general_management_22.jpg',
        program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTRGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--986a2002e7a3d5f053cc4d146a0178884155ad08/general_management_22.jpg',
        duration: '1 year',
        brochure_url: 'https://www.iimrohtak.ac.in/pdf/epgpx/prospectus.pdf',
        category_id: 11,
        university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3a38c391779d807a0ab7ae371210795bb02874fa/iim_rohatak.jpg',
        new: false,
        location: 'Rohtak',
        university_code: 'IIMR',
        university_name: 'IIM Rohtak',
        program_price: '715524 INR',
        program_fee: '715524 INR',
        category_name: 'General Management'
      },
      relationships: {}
    }, {
      id: 'IIMLSMAL01123',
      type: 'program',
      attributes: {
        name: 'Digital Marketing',
        apply_by: '2021-03-16T00:00:00.000Z',
        start_date: '2021-03-17T00:00:00.000Z',
        end_date: '2021-03-23T00:00:00.000Z',
        contact_days: '7',
        site_url: ' http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MjE5',
        certificate_program: false,
        eligibility: 'For mid level managers with 5+ years of experience',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Live Online',
        knowledge_level: 'Intermediate',
        program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcW9GIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bdc9ebc15929d72f2f9ced4c624995592ed268e5/Digital_marketing-desktop.jpg',
        program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcXdGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3713e35116d19ea036ba7a6d9a6361ef26669fbf/Digital_marketing-card.jpg',
        program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcXNGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1760ab72007786f3f949d53c456e9c23878fce55/Digital_marketing-mobile.jpg',
        duration: '7 days',
        brochure_url: 'http://14.139.245.91/ims/uploads/MDP/06-10-2020-62765.pdf',
        category_id: 8,
        university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
        new: false,
        location: 'Online',
        university_code: 'IIML',
        university_name: 'IIM Lucknow',
        program_price: '50000 INR',
        program_fee: '50000 INR + GST',
        category_name: 'Marketing'
      },
      relationships: {}
    }, {
      id: 'IIMLSDIL01122',
      type: 'program',
      attributes: {
        name: 'Digital Mindset and Design Thinking',
        apply_by: '2021-02-21T00:00:00.000Z',
        start_date: '2021-02-22T00:00:00.000Z',
        end_date: '2021-02-27T00:00:00.000Z',
        contact_days: '6',
        site_url: 'http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MTU1',
        certificate_program: false,
        eligibility: 'For managers who aspire to learn digital technologies',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Live Online',
        knowledge_level: 'Intermediate',
        program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWNGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cf5997981e496546ca64484270e19c96385d39f7/Digital-Mindset-desktop.jpg',
        program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWtGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5fcf61d70c20daec2e0c433a9e422f5ff3205c5d/Digital-Mindset-card.jpg',
        program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWdGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5985736b99b228c48164eda713aca3d4717e0ff5/Digital-Mindset-mobile.jpg',
        duration: '6 days',
        brochure_url: 'http://14.139.245.91/ims/uploads/MDP/06-10-2020-17207.pdf',
        category_id: 3,
        university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
        new: false,
        location: 'Online',
        university_code: 'IIML',
        university_name: 'IIM Lucknow',
        program_price: '40000 INR',
        program_fee: '40000 INR + GST',
        category_name: 'Digital Transformation'
      },
      relationships: {}
    }, {
      id: 'IIMLSMAL01121',
      type: 'program',
      attributes: {
        name: 'Marketing Analytics: Data Driven Marketing',
        apply_by: '2021-02-20T00:00:00.000Z',
        start_date: '2021-02-21T00:00:00.000Z',
        end_date: '2021-02-26T00:00:00.000Z',
        contact_days: '6',
        site_url: 'http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MjE2',
        certificate_program: false,
        eligibility: 'For sales \u0026 Marketing executives',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Live Online',
        knowledge_level: 'Intermediate',
        program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVFGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d10575214c9010e006c861c68b1ac60e56565695/Maketing-Analytics-desktop.jpg',
        program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3c944d237e2556424521a97d5902ead360ad29f2/Maketing-Analytics-card.jpg',
        program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--edfc23b5195bb0a3f898d84f65f97a13b1a082e0/Maketing-Analytics-mobile.jpg',
        duration: '6 days',
        brochure_url: 'http://14.139.245.91/ims/uploads/MDP/06-10-2020-53242.pdf',
        category_id: 8,
        university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
        new: false,
        location: 'Online',
        university_code: 'IIML',
        university_name: 'IIM Lucknow',
        program_price: '40000 INR',
        program_fee: '40000 INR + GST',
        category_name: 'Marketing'
      },
      relationships: {}
    }]
  });
}
function program(req, res, next) {
  return res.status(200).json({
    data: [{
      id: 'IIMRLGMH01141',
      type: 'program',
      attributes: {
        name: 'Executive PG Diploma Programme in Management (ePGPx) Batch-04',
        apply_by: '2021-02-22T00:00:00.000Z',
        start_date: '2021-05-01T00:00:00.000Z',
        end_date: '2022-04-30T00:00:00.000Z',
        contact_days: '',
        site_url: 'https://admission.iimrohtak.ac.in/epgpx/',
        certificate_program: true,
        eligibility: 'For executives with at least 5 years of experience',
        alumini_status: true,
        placement_assistance: false,
        delivery: 'Hybrid',
        knowledge_level: 'Intermediate',
        program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTBGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a18b3082360ab831d2fa47597141fbb14d231ef/general_management_22.jpg',
        program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdThGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da81498db9a311d04ae20743a1ddf9b44a0fbf7c/general_management_22.jpg',
        program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTRGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--986a2002e7a3d5f053cc4d146a0178884155ad08/general_management_22.jpg',
        duration: '1 year',
        brochure_url: 'https://www.iimrohtak.ac.in/pdf/epgpx/prospectus.pdf',
        category_id: 11,
        university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3a38c391779d807a0ab7ae371210795bb02874fa/iim_rohatak.jpg',
        new: false,
        location: 'Rohtak',
        university_code: 'IIMR',
        university_name: 'IIM Rohtak',
        program_price: '715524 INR',
        program_fee: '715524 INR',
        category_name: 'General Management'
      },
      relationships: {}
    }, {
      id: 'IIMLSMAL01123',
      type: 'program',
      attributes: {
        name: 'Digital Marketing',
        apply_by: '2021-03-16T00:00:00.000Z',
        start_date: '2021-03-17T00:00:00.000Z',
        end_date: '2021-03-23T00:00:00.000Z',
        contact_days: '7',
        site_url: ' http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MjE5',
        certificate_program: false,
        eligibility: 'For mid level managers with 5+ years of experience',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Live Online',
        knowledge_level: 'Intermediate',
        program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcW9GIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bdc9ebc15929d72f2f9ced4c624995592ed268e5/Digital_marketing-desktop.jpg',
        program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcXdGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3713e35116d19ea036ba7a6d9a6361ef26669fbf/Digital_marketing-card.jpg',
        program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcXNGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1760ab72007786f3f949d53c456e9c23878fce55/Digital_marketing-mobile.jpg',
        duration: '7 days',
        brochure_url: 'http://14.139.245.91/ims/uploads/MDP/06-10-2020-62765.pdf',
        category_id: 8,
        university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
        new: false,
        location: 'Online',
        university_code: 'IIML',
        university_name: 'IIM Lucknow',
        program_price: '50000 INR',
        program_fee: '50000 INR + GST',
        category_name: 'Marketing'
      },
      relationships: {}
    }, {
      id: 'IIMLSDIL01122',
      type: 'program',
      attributes: {
        name: 'Digital Mindset and Design Thinking',
        apply_by: '2021-02-21T00:00:00.000Z',
        start_date: '2021-02-22T00:00:00.000Z',
        end_date: '2021-02-27T00:00:00.000Z',
        contact_days: '6',
        site_url: 'http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MTU1',
        certificate_program: false,
        eligibility: 'For managers who aspire to learn digital technologies',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Live Online',
        knowledge_level: 'Intermediate',
        program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWNGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cf5997981e496546ca64484270e19c96385d39f7/Digital-Mindset-desktop.jpg',
        program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWtGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5fcf61d70c20daec2e0c433a9e422f5ff3205c5d/Digital-Mindset-card.jpg',
        program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWdGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5985736b99b228c48164eda713aca3d4717e0ff5/Digital-Mindset-mobile.jpg',
        duration: '6 days',
        brochure_url: 'http://14.139.245.91/ims/uploads/MDP/06-10-2020-17207.pdf',
        category_id: 3,
        university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
        new: false,
        location: 'Online',
        university_code: 'IIML',
        university_name: 'IIM Lucknow',
        program_price: '40000 INR',
        program_fee: '40000 INR + GST',
        category_name: 'Digital Transformation'
      },
      relationships: {}
    }, {
      id: 'IIMLSMAL01121',
      type: 'program',
      attributes: {
        name: 'Marketing Analytics: Data Driven Marketing',
        apply_by: '2021-02-20T00:00:00.000Z',
        start_date: '2021-02-21T00:00:00.000Z',
        end_date: '2021-02-26T00:00:00.000Z',
        contact_days: '6',
        site_url: 'http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MjE2',
        certificate_program: false,
        eligibility: 'For sales \u0026 Marketing executives',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Live Online',
        knowledge_level: 'Intermediate',
        program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVFGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d10575214c9010e006c861c68b1ac60e56565695/Maketing-Analytics-desktop.jpg',
        program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3c944d237e2556424521a97d5902ead360ad29f2/Maketing-Analytics-card.jpg',
        program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--edfc23b5195bb0a3f898d84f65f97a13b1a082e0/Maketing-Analytics-mobile.jpg',
        duration: '6 days',
        brochure_url: 'http://14.139.245.91/ims/uploads/MDP/06-10-2020-53242.pdf',
        category_id: 8,
        university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
        new: false,
        location: 'Online',
        university_code: 'IIML',
        university_name: 'IIM Lucknow',
        program_price: '40000 INR',
        program_fee: '40000 INR + GST',
        category_name: 'Marketing'
      },
      relationships: {}
    }]
  });
}
function programspecific(req, res, next) {
  if (p1 == req.params.id) {
    return res.status(200).json(p1);
  } else {
    return res.status(200).json(p2);
  }
}
const p1 = {
  data: [{
    id: 'LSOBLMAS01249',
    type: 'program',
    attributes: {
      name: 'Mastering Digital Marketing - Online',
      apply_by: '2021-02-11T00:00:00.000Z',
      start_date: '2021-02-11T00:00:00.000Z',
      end_date: '2021-05-06T00:00:00.000Z',
      contact_days: '24',
      site_url: 'https://www.london.edu/executive-education/online-courses/mastering-digital-marketing',
      certificate_program: true,
      eligibility: 'Early-career marketers, Non-marketing leaders, Professionals from a non-marketing field, Experienced traditional marketers',
      alumini_status: false,
      placement_assistance: false,
      delivery: 'Self-Paced Online',
      knowledge_level: 'Beginner',
      program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHNIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1174b7dfd917e636d0ab74034822bf509e8fcf3e/Marketing-22.jpg',
      program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbDBIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e016e2756d81f3f83f78ab43cfa457722a0ac46b/Marketing-22.jpg',
      program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHdIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6f12c5bd9cd6a49145d53d3efc80eb7f7d69e151/Marketing-22.jpg',
      duration: '12 weeks',
      brochure_url: '',
      category_id: 8,
      university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWHM9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2ecbe22b5603c00e9f40003348eb680c0cdb7c1b/_0001_LBS.jpg',
      new: true,
      location: 'Online',
      university_code: 'LSOB',
      university_name: 'London Business School',
      program_price: '2500 GBP',
      program_fee: '2500 GBP',
      category_name: 'Marketing'
    },
    relationships: {}
  }, {
    id: 'INSESBUL01327',
    type: 'program',
    attributes: {
      name: 'AI for Business ',
      apply_by: '2021-03-01T00:00:00.000Z',
      start_date: '2021-03-01T00:00:00.000Z',
      end_date: null,
      contact_days: '5',
      site_url: 'https://www.insead.edu/executive-education/digital-transformation-innovation/ai-business',
      certificate_program: false,
      eligibility: 'Senior Executives',
      alumini_status: false,
      placement_assistance: false,
      delivery: 'Live Online',
      knowledge_level: 'Advanced',
      program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcEVIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0ef6a7c25f00aa4209c5882dd3cdc6e6be1706c9/analytics-12.jpg',
      program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcE1IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--00c6dd1a51b04610a3446678a807afc18ef3f449/analytics-12.jpg',
      program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcElIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--907479ed62f8d73dbcfe776390b032150e4b7b53/analytics-12.jpg',
      duration: '5 Days',
      brochure_url: '',
      category_id: 5,
      university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBmZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fd4c332053b51932cd00e135b5241f7d119b2d3c/_0009_insead.jpg',
      new: true,
      location: 'Online',
      university_code: 'INSE',
      university_name: 'INSEAD',
      program_price: '6000 EUR',
      program_fee: '6000 EUR',
      category_name: 'Business Analytics'
    },
    relationships: {}
  }, {
    id: 'IIMBSSTL00614',
    type: 'program',
    attributes: {
      name: 'Strategy Consulting (Live Online Programme)',
      apply_by: '2021-02-12T00:00:00.000Z',
      start_date: '2021-02-17T00:00:00.000Z',
      end_date: '2021-02-21T00:00:00.000Z',
      contact_days: '5',
      site_url: 'https://www.iimb.ac.in/eep/product/156/Strategy_Consulting1?management=StrategyGeneralManagement\u0026addurl=S00910\u0026Ref=undefined',
      certificate_program: false,
      eligibility: 'For mid \u0026 senior level executives',
      alumini_status: false,
      placement_assistance: false,
      delivery: 'Live Online',
      knowledge_level: 'Intermediate',
      program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDhEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6dbb40260c1d25f6c6cc152f1184a8d8fd87c8e2/Strategy_1.jpg',
      program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUVEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--388b83e6d700c20be05ed3dc443837a24d13b6f7/Strategy_1.jpg',
      program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUFEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2410bc4337abb2932097b4cd5228497cbd5f619b/Strategy_1.jpg',
      duration: '5 days',
      brochure_url: 'https://www.iimb.ac.in/eep/product/downloadProgrammeBrochure/?p_id=156',
      category_id: 9,
      university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBZUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a3f0e9caa9b7f9b6e94329fcda7b11a7388f59d3/_0016__0002_IIMB.jpg',
      new: false,
      location: 'Online',
      university_code: 'IIMB',
      university_name: 'IIM Bangalore',
      program_price: '76500 INR',
      program_fee: '76500 INR + GST',
      category_name: 'Strategy'
    },
    relationships: {}
  }, {
    id: 'COLUSDIL01431',
    type: 'program',
    attributes: {
      name: 'Executive Access: Accelerating Digital Transformation for the COVID Era',
      apply_by: '2021-03-09T00:00:00.000Z',
      start_date: '2021-03-09T00:00:00.000Z',
      end_date: '2021-03-09T00:00:00.000Z',
      contact_days: '1',
      site_url: 'https://www8.gsb.columbia.edu/execed/program-page/eaadt?sourceid=finder',
      certificate_program: false,
      eligibility: 'For business leaders ',
      alumini_status: false,
      placement_assistance: false,
      delivery: 'Live Online',
      knowledge_level: 'Intermediate',
      program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbmtIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f100cf0ca9f676845e9994aeb5732758d6ea7ab1/Digital-transformation-9.jpg',
      program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbnNIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f61d307f65dc0d6d51ad9f9b42cf50c5ba2ccb61/Digital-transformation-9.jpg',
      program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbm9IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--be48decda1eeabaf6a2859957a2c7fed1b80ea53/Digital-transformation-9.jpg',
      duration: '1 day',
      brochure_url: 'http://go-execed.gsb.columbia.edu/Columbia_eaadt_Executive_Summary.pdf',
      category_id: 3,
      university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWDA9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--891f999c3e69d49eaf7599955dcb1c2a949b284a/_0011__0007_Columbia_Business_School_logo.jpg',
      new: true,
      location: 'Online',
      university_code: 'COLU',
      university_name: 'Columbia Business School',
      program_price: '450 USD',
      program_fee: '450 USD',
      category_name: 'Digital Transformation'
    },
    relationships: {}
  }],
  meta: {
    total: 465,
    page: '1',
    aggs: {}
  }
};
const p2 = {
  data: [{
    id: 'IMDBLINS00895',
    type: 'program',
    attributes: {
      name: 'Disruptive Innovation(Online)',
      apply_by: '2021-03-20T00:00:00.000Z',
      start_date: '2021-03-22T00:00:00.000Z',
      end_date: '2021-04-25T00:00:00.000Z',
      contact_days: '',
      site_url: 'https://www.imd.org/DI/disruptive-innovation-course/',
      certificate_program: true,
      eligibility: 'Mid to senior level managers',
      alumini_status: false,
      placement_assistance: false,
      delivery: 'Self-Paced Online',
      knowledge_level: 'Intermediate',
      program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1VIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--91c37a3e4b0fb1b6110a9e33bbbf5dbb547937c9/Innovation-12.jpg',
      program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2NIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3fe9e917ed4350fa690fe4b34a8adaebc8137e2f/Innovation-12.jpg',
      program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1lIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da1408e578e3cbb90d1802acee29d5040580d4c4/Innovation-12.jpg',
      duration: '5 weeks',
      brochure_url: '',
      category_id: 2,
      university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBjQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--842116080009be8202c344ddbb21c7c85da953d3/_0007_IMD_registration.jpg',
      new: true,
      location: 'Online',
      university_code: 'IMDB',
      university_name: 'IMD Business School',
      program_price: '1950 CHF',
      program_fee: '1950 CHF',
      category_name: 'Innovation'
    },
    relationships: {}
  }, {
    id: 'INSESINC01342',
    type: 'program',
    attributes: {
      name: 'Strategic R\u0026D Management ',
      apply_by: '2021-05-03T00:00:00.000Z',
      start_date: '2021-05-03T00:00:00.000Z',
      end_date: null,
      contact_days: '5',
      site_url: 'https://www.insead.edu/executive-education/research-development-operations-management/strategic-research-development-management',
      certificate_program: false,
      eligibility: 'Senior Leaders',
      alumini_status: false,
      placement_assistance: false,
      delivery: 'Class Room',
      knowledge_level: 'Advanced',
      program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0daa870fa34eebcc8e82e6c5d9f1d80a267dbe6d/innovation.jpg',
      program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dc983bafda16ac7c87d0d54e9702c10413f4dc85/innovation.jpg',
      program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1cc84ed4e9cbdd367481bc9f370f0579eb26a607/innovation.jpg',
      duration: '5 Days',
      brochure_url: '',
      category_id: 2,
      university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBmZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fd4c332053b51932cd00e135b5241f7d119b2d3c/_0009_insead.jpg',
      new: true,
      location: 'Fontainebleau ',
      university_code: 'INSE',
      university_name: 'INSEAD',
      program_price: '9,650\t EUR',
      program_fee: '9,650\t EUR',
      category_name: 'Innovation'
    },
    relationships: {}
  }, {
    id: 'HBUSLINL00280',
    type: 'program',
    attributes: {
      name: 'Disruptive Innovation—Virtual',
      apply_by: '2021-05-10T00:00:00.000Z',
      start_date: '2021-05-10T00:00:00.000Z',
      end_date: '2021-05-21T00:00:00.000Z',
      contact_days: '10',
      site_url: 'https://www.exed.hbs.edu/disruptive-innovation-virtual/',
      certificate_program: true,
      eligibility: 'For senior executives',
      alumini_status: false,
      placement_assistance: false,
      delivery: 'Live Online',
      knowledge_level: 'Intermediate',
      program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3NIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--320f397cdf559a42a5709f31803d76138f3270bf/Strategy_20.jpg',
      program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbzBIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e0252abd0ec7fddbb030d1631d106caffc12f74f/Strategy_20.jpg',
      program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3dIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e9bbf9bc52407fe97ca16c56ab1633042416f3e4/Strategy_20.jpg',
      duration: '12 days',
      brochure_url: 'https://www.exed.hbs.edu/Documents/disruptive-innovation-virtual-brochure.pdf',
      category_id: 2,
      university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBaUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4c4dd7deea45d8e1a5ed96f031afe54bf76e18fb/_0003_Harvard%20.jpg',
      new: true,
      location: 'Online',
      university_code: 'HBUS',
      university_name: 'Harvard Business School',
      program_price: '7500 USD',
      program_fee: '7500 USD',
      category_name: 'Innovation'
    },
    relationships: {}
  }, {
    id: 'LSOBLINH01241',
    type: 'program',
    attributes: {
      name: 'Exploiting Disruption in a Digital World',
      apply_by: '2021-06-18T00:00:00.000Z',
      start_date: '2021-06-20T00:00:00.000Z',
      end_date: '2021-06-25T00:00:00.000Z',
      contact_days: '5.5',
      site_url: 'https://www.london.edu/executive-education/digital-transformation-and-innovation/exploiting-disruption-in-a-digital-world',
      certificate_program: true,
      eligibility: 'Senior executives and leaders, Managing directors, regional directors and country managers.',
      alumini_status: false,
      placement_assistance: false,
      delivery: 'Hybrid',
      knowledge_level: 'Beginner',
      program_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFFIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0b61bc686dff3302929cdde59d7a2f2c53f0e6f5/Innovation-2.jpg',
      program_card_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFlIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e21c3909b9b88cdbc270c27a2320512cd2609d6c/Innovation-2.jpg',
      program_mobile_image: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFVIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b11ff7fc8a9db6e7f6218c9c3fbedf6989ea2077/Innovation-2.jpg',
      duration: '5.5 days',
      brochure_url: '',
      category_id: 2,
      university_logo: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWHM9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2ecbe22b5603c00e9f40003348eb680c0cdb7c1b/_0001_LBS.jpg',
      new: true,
      location: 'London',
      university_code: 'LSOB',
      university_name: 'London Business School',
      program_price: '8500 GBP',
      program_fee: '8500 GBP',
      category_name: 'Innovation'
    },
    relationships: {}
  }],
  meta: {
    total: 39,
    page: '1',
    aggs: {}
  }
};

/***/ }),

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _whitelist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whitelist */ "./src/config/whitelist.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



__webpack_require__(/*! dotenv */ "dotenv").config({});

const devConfig = {
  JWT_SECRET: process.env.JWT_SECRET_DEV,
  MONGO_URL: process.env.MONGO_URL_DEV,
  REDIS_HOST: process.env.REDIS_HOST_DEV,
  REDIS_PORT: process.env.REDIS_PORT_DEV,
  REDIS_PASSWORD: '',
  MAIL_API_KEY: process.env.SENDGRID_API_KEY_DEV,
  FROM_EMAIL: `"${process.env.FROM_EMAIL_NAME_DEV}" <${process.env.FROM_EMAIL_DEV}>`
};
const testConfig = {
  JWT_SECRET: process.env.JWT_SECRET_TEST,
  MONGO_URL: process.env.MONGO_URL_TEST,
  REDIS_HOST: process.env.REDIS_HOST_TEST,
  REDIS_PORT: process.env.REDIS_PORT_TEST,
  REDIS_PASSWORD: '',
  MAIL_API_KEY: process.env.SENDGRID_API_KEY_TEST,
  FROM_EMAIL: `"${process.env.FROM_EMAIL_NAME_TEST}" <${process.env.FROM_EMAIL_TEST}>`
};
const prodConfig = {
  JWT_SECRET: process.env.JWT_SECRET_PROD,
  MONGO_URL: process.env.MONGO_URL_PROD,
  REDIS_HOST: process.env.REDIS_HOST_PROD,
  REDIS_PORT: process.env.REDIS_PORT_PROD,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD_PROD,
  MAIL_API_KEY: process.env.SENDGRID_API_KEY_PROD,
  FROM_EMAIL: `"${process.env.FROM_EMAIL_NAME_PROD}" <${process.env.FROM_EMAIL_PROD}>`
};
const defaultConfig = {
  PORT: process.env.PORT || 3000,
  SENTRY_DSN: process.env.SENTRY_DSN,
  WHITELIST: _objectSpread({}, _whitelist__WEBPACK_IMPORTED_MODULE_0__["WHITELIST"])
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;

    case 'test':
      return testConfig;

    default:
      return prodConfig;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, defaultConfig), envConfig("development")));

/***/ }),

/***/ "./src/config/middlewares.js":
/*!***********************************!*\
  !*** ./src/config/middlewares.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express_winston__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-winston */ "express-winston");
/* harmony import */ var express_winston__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_winston__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! method-override */ "method-override");
/* harmony import */ var method_override__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(method_override__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _winston__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./winston */ "./src/config/winston.js");
/* harmony import */ var _whitelist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./whitelist */ "./src/config/whitelist.js");
/**
 * Configuration of the server middlewares.
 */










const isTest = "development" === 'test';
const isDev = "development" === 'development';
/* harmony default export */ __webpack_exports__["default"] = (app => {
  app.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.json());
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({
    extended: true
  }));
  app.use(passport__WEBPACK_IMPORTED_MODULE_3___default.a.initialize());
  app.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()());
  app.use(cors__WEBPACK_IMPORTED_MODULE_7___default()(_whitelist__WEBPACK_IMPORTED_MODULE_9__["corsWhiteList"]));
  app.use(method_override__WEBPACK_IMPORTED_MODULE_5___default()());

  if (isDev && !isTest) {
    app.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()('dev'));
    express_winston__WEBPACK_IMPORTED_MODULE_4___default.a.requestWhitelist.push('body');
    express_winston__WEBPACK_IMPORTED_MODULE_4___default.a.responseWhitelist.push('body');
    app.use(express_winston__WEBPACK_IMPORTED_MODULE_4___default.a.logger({
      winstonInstance: _winston__WEBPACK_IMPORTED_MODULE_8__["default"],
      meta: true,
      msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
      colorStatus: true
    }));
  }
});

/***/ }),

/***/ "./src/config/whitelist.js":
/*!*********************************!*\
  !*** ./src/config/whitelist.js ***!
  \*********************************/
/*! exports provided: corsWhiteList, WHITELIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corsWhiteList", function() { return corsWhiteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITELIST", function() { return WHITELIST; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *  CORS WHITELIST
 *
 */
__webpack_require__(/*! dotenv */ "dotenv").config({});

const env = "development";
const devWhitelistURLs = env === 'development' ? ['http://localhost:9000'] : [];
const WHITELIST_URL = [...devWhitelistURLs, process.env.WHITELIST_URL];
const corsWhiteList = function (req, callback) {
  var corsOptions;

  if (WHITELIST_URL.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {
      origin: true
    }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = {
      origin: false
    }; // disable CORS for this request
  }

  callback(null, corsOptions); // callback expects two parameters: error and options
};
/**
 *  PAYLOAD WHITELIST
 *
 */
// for users route

const USERS = {
  users: {
    create: ['email', 'password', 'phone', 'company', 'name']
  }
};
const WHITELIST = _objectSpread({}, USERS);

/***/ }),

/***/ "./src/config/winston.js":
/*!*******************************!*\
  !*** ./src/config/winston.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Create the winston logger instance
 */

const logger = winston__WEBPACK_IMPORTED_MODULE_0___default.a.createLogger({
  transports: [new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.Console({
    json: true,
    colorize: true
  })]
});
/* harmony default export */ __webpack_exports__["default"] = (logger);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/log */ "./src/services/log.js");
/* harmony import */ var _config_middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/middlewares */ "./src/config/middlewares.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/constants */ "./src/config/constants.js");
/* harmony import */ var _components_jigserv_jigserv_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/jigserv/jigserv.controller */ "./src/components/jigserv/jigserv.controller.js");
/* eslint-disable no-console */

/**
 * Server setup
 */


 // import './config/database';




const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const env = "development"; // Wrap all the middlewares with the server

Object(_config_middlewares__WEBPACK_IMPORTED_MODULE_3__["default"])(app); // The error handler must be before any other error middleware

if (env === 'production') app.use(Object(_services_log__WEBPACK_IMPORTED_MODULE_2__["SentryLog"])().Handlers.errorHandler()); // Add the apiRoutes stack to the server

app.use('/category', _components_jigserv_jigserv_controller__WEBPACK_IMPORTED_MODULE_5__["categories"]);
app.use('/univerity', _components_jigserv_jigserv_controller__WEBPACK_IMPORTED_MODULE_5__["university"]);
app.use('/program/:id', _components_jigserv_jigserv_controller__WEBPACK_IMPORTED_MODULE_5__["programspecific"]);
app.use('/programs', _components_jigserv_jigserv_controller__WEBPACK_IMPORTED_MODULE_5__["program"]); // app.use('/api', categories);
// The error handler must be before any other error middleware

if (env === 'production') app.use(Object(_services_log__WEBPACK_IMPORTED_MODULE_2__["SentryLog"])().Handlers.errorHandler()); // We need this to make sure we don't run a second instance

if (!module.parent) {
  app.listen(_config_constants__WEBPACK_IMPORTED_MODULE_4__["default"].PORT, err => {
    if (err) {
      console.log(chalk__WEBPACK_IMPORTED_MODULE_1___default.a.red('Cannot run!'));
    } else {
      console.log(chalk__WEBPACK_IMPORTED_MODULE_1___default.a.green.bold(`
        Yep this is working 🍺
        App listen on port: ${_config_constants__WEBPACK_IMPORTED_MODULE_4__["default"].PORT} 🍕
        Env: ${"development"} 🦄
      `));
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (app);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/services/error.js":
/*!*******************************!*\
  !*** ./src/services/error.js ***!
  \*******************************/
/*! exports provided: RequiredError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredError", function() { return RequiredError; });
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ "http-status");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @extends Error
 */

class ExtendableError extends Error {
  constructor(message, status, isPublic) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor.name);
  }

}
/**
 * Class representing an API error.
 *
 * @extends ExtendableError
 */


class APIError extends ExtendableError {
  /**
   * Creates an API error.
   *
   * @param {String} message - Error message.
   * @param {Number} status - HTTP status code of error.
   * @param {Boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message, status = http_status__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR, isPublic = false) {
    super(message, status, isPublic);
  }

}
/**
 * Class for required error
 *
 * @class RequiredError
 */


class RequiredError {
  /**
   * Make error pretty
   *
   * @static
   * @param {Array} errors - Array of error Object
   * @returns {Object} - errors - Pretty Object transform
   */
  static makePretty(errors) {
    return errors.reduce((obj, error) => {
      const nObj = obj;
      nObj[error.field] = error.messages[0].replace(/"/g, '');
      return nObj;
    }, {});
  }

}
/* harmony default export */ __webpack_exports__["default"] = (APIError);

/***/ }),

/***/ "./src/services/log.js":
/*!*****************************!*\
  !*** ./src/services/log.js ***!
  \*****************************/
/*! exports provided: SentryLog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryLog", function() { return SentryLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logErrorService; });
/* harmony import */ var _sentry_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/node */ "@sentry/node");
/* harmony import */ var _sentry_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pretty_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pretty-error */ "pretty-error");
/* harmony import */ var pretty_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pretty_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status */ "http-status");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/constants */ "./src/config/constants.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error */ "./src/services/error.js");
/**
 * Error handler for api routes
 */





const isProd = "development" === 'production';
const isDev = "development" === 'development';
const SentryLog = () => {
  _sentry_node__WEBPACK_IMPORTED_MODULE_0__["init"]({
    dsn: _config_constants__WEBPACK_IMPORTED_MODULE_3__["default"].SENTRY_DSN
  });
  return _sentry_node__WEBPACK_IMPORTED_MODULE_0__;
}; // eslint-disable-next-line no-unused-vars

function logErrorService(err, req, res, next) {
  if (!err) {
    return new _error__WEBPACK_IMPORTED_MODULE_4__["default"]('Error with the server!', http_status__WEBPACK_IMPORTED_MODULE_2___default.a.INTERNAL_SERVER_ERROR, true);
  }

  if (isProd) {
    SentryLog().captureException(err);
  }

  if (isDev) {
    const pe = new pretty_error__WEBPACK_IMPORTED_MODULE_1___default.a();
    pe.skipNodeFiles();
    pe.skipPackage('express'); // eslint-disable-next-line no-console

    console.log(pe.render(err));
  }

  const error = {
    message: err.message || 'Internal Server Error.'
  };

  if (err.errors) {
    error.errors = {};
    const {
      errors
    } = err;

    if (Array.isArray(errors)) {
      error.errors = _error__WEBPACK_IMPORTED_MODULE_4__["RequiredError"].makePretty(errors);
    } else {
      Object.keys(errors).forEach(key => {
        error.errors[key] = errors[key].message;
      });
    }
  }

  res.status(err.status || http_status__WEBPACK_IMPORTED_MODULE_2___default.a.INTERNAL_SERVER_ERROR).json(error);
  return next();
}

/***/ }),

/***/ "@sentry/node":
/*!*******************************!*\
  !*** external "@sentry/node" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sentry/node");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-winston":
/*!**********************************!*\
  !*** external "express-winston" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-winston");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-status");

/***/ }),

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "pretty-error":
/*!*******************************!*\
  !*** external "pretty-error" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=main.map