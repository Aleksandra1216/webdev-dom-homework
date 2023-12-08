/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteComment: () => (/* binding */ deleteComment),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   postApi: () => (/* binding */ postApi),\n/* harmony export */   registration: () => (/* binding */ registration),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   setUserName: () => (/* binding */ setUserName),\n/* harmony export */   toggleLike: () => (/* binding */ toggleLike),\n/* harmony export */   token: () => (/* binding */ token),\n/* harmony export */   userName: () => (/* binding */ userName)\n/* harmony export */ });\nconst baseURL = \"https://wedev-api.sky.pro/api/v2/Aleksandra1216/comments\";\r\nconst deleteURL = \"https://wedev-api.sky.pro/api/v2/Aleksandra1216/comments/\"\r\nconst authorizURL = \"https://wedev-api.sky.pro/api/user/login\";\r\nconst regURL = \"https://wedev-api.sky.pro/api/user\";\r\n\r\nlet userName;\r\nconst setUserName = (newUserName) => {\r\n  userName = newUserName;\r\n};\r\n\r\nlet token;\r\nconst setToken = (newToken) => {\r\n   token = newToken;\r\n};\r\n\r\nfunction getComments() {\r\n    return fetch(baseURL, {\r\n      method: \"GET\",\r\n      headers: {\r\n         Authorization: `Bearer ${token}`,\r\n       },\r\n    }).then((response) => {\r\n      if (response.status === 401) {\r\n         token = prompt('Введите верный пароль');\r\n         getComments();\r\n         throw new Error('Вы не авторизованы');\r\n       }\r\n       return response.json();\r\n     });\r\n}\r\n//передаем текст, дату в качестве аргумента\r\nfunction postApi({ text }) {\r\n   return fetch(baseURL, {\r\n      method: \"POST\",\r\n      headers: {\r\n         Authorization: `Bearer ${token}`,\r\n       },\r\n      body: JSON.stringify({\r\n         \r\n        text: text.replaceAll(\"&\", \"&amp;\").replaceAll(\"<\", \"&lt;\").replaceAll(\">\", \"&gt;\").replaceAll('\"', \"&quot;\"),\r\n\r\n      }),\r\n      \r\n      })\r\n      .then((response) => {\r\n          console.log(response);\r\n          if (response.status === 500) {\r\n             throw new Error(\"Сервер сломался\");\r\n          }\r\n          if (response.status === 400) {\r\n             throw new Error(\"Плохой запрос\");\r\n          }\r\n          else {\r\n          return response.json();\r\n          }\r\n        });\r\n}\r\n\r\nfunction deleteComment({ id }) {\r\n   return fetch(deleteURL + id, {\r\n      method: \"DELETE\",\r\n      headers: {\r\n         Authorization: `Bearer ${token}`,\r\n       },\r\n      \r\n      }).then((response) => {\r\n          console.log(response);\r\n          if (response.status === 500) {\r\n             throw new Error(\"Сервер сломался\");\r\n          } else {\r\n          return response.json();\r\n          }\r\n        });\r\n}\r\n\r\nfunction toggleLike({ id }) {\r\n   return fetch(`https://wedev-api.sky.pro/api/v2/Aleksandra1216/comments/${id}/toggle-like`, {\r\n      method: \"POST\",\r\n      headers: {\r\n         Authorization: `Bearer ${token}`,\r\n       },\r\n      });\r\n}\r\n\r\nfunction login({ login, password }) {\r\n   return fetch(authorizURL, {\r\n      method: \"POST\",\r\n      body: JSON.stringify({\r\n      login,\r\n      password,\r\n      }),\r\n   }).then((response) => {\r\n      console.log(response)\r\n      if (response.status === 400) {\r\n         throw new Error(\"Неправильный логин или пароль\");\r\n      } else {\r\n         return response.json();\r\n      }\r\n   });\r\n};\r\n\r\nfunction registration({ login, name, password }) {\r\n   return fetch(regURL, {\r\n      method: \"POST\",\r\n      body: JSON.stringify({\r\n      login,\r\n      name,\r\n      password,\r\n      }),\r\n   }).then((response) => {\r\n      console.log(response)\r\n      if (response.status === 400) {\r\n         throw new Error(\"Данный логин уже занят\");\r\n      } else {\r\n         return response.json();\r\n      }\r\n   });\r\n};\n\n//# sourceURL=webpack://biblioteka/./api.js?");

/***/ }),

/***/ "./lib/formatDate/formatDate.js":
/*!**************************************!*\
  !*** ./lib/formatDate/formatDate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDateToRu: () => (/* binding */ formatDateToRu),\n/* harmony export */   formatDateToUs: () => (/* binding */ formatDateToUs)\n/* harmony export */ });\n //const newDate = new Date;\r\n// export const formatDateToRo = `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`;\r\n\r\n// const date = ({ apiDate }) => {\r\n//   return new Date(apiDate).toLocaleDateString() + \" \"\r\n//     + (new Date(apiDate).getHours() < 10 ? '0' + new Date(apiDate).getHours() : new Date(apiDate).getHours()) + \":\"\r\n//     + (new Date(apiDate).getMinutes() < 10 ? '0' + new Date(apiDate).getMinutes() : new Date(apiDate).getMinutes()) + \":\"\r\n//     + (new Date(apiDate).getSeconds() < 10 ? '0' + new Date(apiDate).getSeconds() : new Date(apiDate).getSeconds())\r\n// }\r\n\r\n// const newDate = new Date;\r\n// export const formatDateToRu = (date) => {\r\n//     return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;\r\n//   };\r\n\r\n//   export const formatDateToUs = (date) => {\r\n//     return `${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;\r\n//   };\r\n\r\nconst formatDateToRu = (date) => {\r\n    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;\r\n  };\r\n\r\n  const formatDateToUs = (date) => {\r\n    return `${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;\r\n  };\n\n//# sourceURL=webpack://biblioteka/./lib/formatDate/formatDate.js?");

/***/ }),

/***/ "./like.js":
/*!*****************!*\
  !*** ./like.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLikeEventListeners: () => (/* binding */ addLikeEventListeners)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\r\n\r\n\r\nfunction addLikeEventListeners() {\r\n  const likeButtons = document.querySelectorAll(\".like-button\");\r\n  likeButtons.forEach((likeButton, index) => {\r\n    likeButton.addEventListener(\"click\", (event) => {\r\n      event.stopPropagation();\r\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.toggleLike)({ id:_main_js__WEBPACK_IMPORTED_MODULE_1__.comments[index].id }).then(() => {\r\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.getRenderComments)();\r\n      })\r\n    });\r\n  });\r\n}\r\naddLikeEventListeners();\n\n//# sourceURL=webpack://biblioteka/./like.js?");

/***/ }),

/***/ "./loginPage.js":
/*!**********************!*\
  !*** ./loginPage.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogin: () => (/* binding */ renderLogin)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\r\n\r\n// import { renderReg } from \"./renderReg.js\";\r\n\r\nconst renderLogin = () => {\r\n    const appElement = document.getElementById(\"app\");\r\n    const loginHtml = `\r\n<div class=\"container\">\r\n    <div class=\"add-form\">\r\n        <h3 class=\"login-name\">Форма входа</h3>\r\n        <input id=\"login-input\" type=\"text\" class=\"add-form-name login-form-login\" placeholder=\"Введите логин\"/>\r\n        <textarea id=\"password-input\" type=\"textarea\" class=\"add-form-text login-form-password\" placeholder=\"Введите пароль\" rows=\"4\"></textarea>\r\n        <div class=\"add-form-row add-form-row-login\">\r\n          <button id=\"login-button\" class=\"add-form-button add-form-button-login\">Войти</button>\r\n        </div>\r\n        <div class=\"login-link\">\r\n          <div id=\"registration\" class=\"login-link\" href=\"#\">Зарегистрироваться</div>\r\n        </div>\r\n    </div>\r\n</div>`;\r\n\r\n  appElement.innerHTML = loginHtml;\r\n\r\nconst logButtonElement = document.getElementById(\"login-button\");\r\nconst loginInputElement = document.querySelector(\".login-form-login\");\r\nconst passwordInputElement = document.querySelector(\".login-form-password\");\r\n\r\nconst regLink = document.getElementById(\"registration\");\r\nregLink.addEventListener(\"click\", () => {\r\n    renderReg();\r\n})\r\n\r\n\r\nlogButtonElement.addEventListener(\"click\", () => {\r\n    ;(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.login)({\r\n        login: loginInputElement.value,\r\n        password: passwordInputElement.value,\r\n    }).then((responseData) => {\r\n        console.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.token);\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setToken)(responseData.user.token);\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setUserName)(responseData.user.name);\r\n        console.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.userName);\r\n    }).then(() => {\r\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.getRenderComments)();\r\n    })\r\n});\r\n\r\n\r\n};\n\n//# sourceURL=webpack://biblioteka/./loginPage.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comments: () => (/* binding */ comments),\n/* harmony export */   getRenderComments: () => (/* binding */ getRenderComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _renderComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderComments.js */ \"./renderComments.js\");\n/* harmony import */ var _lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/formatDate/formatDate.js */ \"./lib/formatDate/formatDate.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n const newDate = new Date;\r\n// export const formatedDate = `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`;\r\n\r\n// const date = ({ apiDate }) => {\r\n//   return new Date(apiDate).toLocaleDateString() + \" \"\r\n//     + (new Date(apiDate).getHours() < 10 ? '0' + new Date(apiDate).getHours() : new Date(apiDate).getHours()) + \":\"\r\n//     + (new Date(apiDate).getMinutes() < 10 ? '0' + new Date(apiDate).getMinutes() : new Date(apiDate).getMinutes()) + \":\"\r\n//     + (new Date(apiDate).getSeconds() < 10 ? '0' + new Date(apiDate).getSeconds() : new Date(apiDate).getSeconds())\r\n// }\r\n\r\nlet comments = [];\r\n\r\nconst getRenderComments = () => {\r\nconst appHTML = document.getElementById(\"app\")\r\nconst country = \"ru\";\r\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)().then((responseData) => {\r\n    comments = responseData.comments.map((comment) => {\r\n      const apiDate = comment.date;\r\n      return {\r\n        id: comment.id,\r\n        name: comment.author.name,\r\n        //date: date({ apiDate }),\r\n        date: country === \"ru\" ? (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__.formatDateToRu)(new Date(apiDate)) : (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__.formatDateToUs)(new Date(apiDate)),\r\n        \r\n        text: comment.text,\r\n        likes: comment.likes,\r\n        isLiked: comment.isLiked,\r\n      }\r\n    });\r\n \r\n    (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_1__.renderComments)({ comments });\r\n  });\r\n};\r\ngetRenderComments();\r\n\r\n\n\n//# sourceURL=webpack://biblioteka/./main.js?");

/***/ }),

/***/ "./renderComments.js":
/*!***************************!*\
  !*** ./renderComments.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderComments: () => (/* binding */ renderComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./like.js */ \"./like.js\");\n/* harmony import */ var _loginPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginPage.js */ \"./loginPage.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n/* harmony import */ var _lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/formatDate/formatDate.js */ \"./lib/formatDate/formatDate.js\");\n\r\n\r\n\r\n//import { formatedDate, getRenderComments } from \"./main.js\";\r\n\r\n\r\n\r\n\r\nconst renderComments = ({ comments }) => {\r\n  const appHTML = document.getElementById(\"app\");\r\n  const country = \"ru\";\r\n  const commentsHtml = comments.map((comment, index) => {\r\n    return `<li class=\"comment\">\r\n        <div class=\"comment-header\">\r\n          <div>${comment.name}</div>\r\n          <div>${country === \"ru\" ? (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_4__.formatDateToRu)(new Date(comment.date)) : (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_4__.formatDateToUs)(new Date(comment.date))}</div>\r\n       \r\n        </div>\r\n        <div class=\"comment-body\"> \r\n          <div class=\"comment-text\" data-index=\"${index}\">\r\n            ${comment.text}\r\n          </div>\r\n        </div>\r\n        <div class=\"comment-footer\">\r\n          <div class=\"likes\">\r\n            <button class=\"like-button ${comment.isLiked ? 'active-like' : ''}\" data-index=\"${index}\"></button>\r\n            <span class=\"likes-counter\">${comment.likes}</span>\r\n          </div>\r\n          </div>\r\n      </li>`;\r\n  }).join('');\r\n\r\n  appHTML.innerHTML = `\r\n  <div id=\"loader-comment\" class=\"loader-comment hidden\">Комментарии загружаются...</div>\r\n    <ul id=\"list\" class=\"comments\">\r\n    ${commentsHtml}\r\n    </ul>\r\n  ${!_api_js__WEBPACK_IMPORTED_MODULE_0__.token ? `\r\n  <div class=\"login-alert\" id=\"login-alert\">Чтобы добавить комментарий, <a id=\"authorization\" href=\"#\">авторизуйтесь</a></div>\r\n  ` :\r\n      `  <ul id=\"list\" class=\"comments\"></ul>\r\n  <div id=\"add-loader-comment\" class=\"add-loader-comment\">Комментарий добавляется...</div>\r\n  <div class=\"add-form\" id=\"add-form\">\r\n    <input id=\"name-input\" type=\"text\" class=\"add-form-name\" disabled value=${_api_js__WEBPACK_IMPORTED_MODULE_0__.userName} />\r\n    <textarea id=\"text-input\" type=\"textarea\" class=\"add-form-text\" placeholder=\"Введите ваш коментарий\" rows=\"4\"></textarea>\r\n    <div class=\"add-form-row\">\r\n    <button id=\"comment-button\" class=\"add-form-button\">Написать</button>\r\n    <button id=\"${comments}\" class=\"delete-form-button\">Удалить</button>\r\n    </div>`}\r\n  `\r\n\r\n  if(_api_js__WEBPACK_IMPORTED_MODULE_0__.token) {\r\n    document.getElementById(\"add-loader-comment\").style.display = 'none';\r\n  }\r\n\r\n  if (!_api_js__WEBPACK_IMPORTED_MODULE_0__.token) {\r\n    const loginLink = document.getElementById(\"authorization\");\r\n    loginLink.addEventListener(\"click\", () => {\r\n      (0,_loginPage_js__WEBPACK_IMPORTED_MODULE_2__.renderLogin)();\r\n    })\r\n  };\r\n\r\n  const addComment = document.getElementById(\"list\");\r\n\r\n\r\n  // Добавляем новый комментарий\r\nfunction addCommentForm () {\r\n  if (!_api_js__WEBPACK_IMPORTED_MODULE_0__.token) return\r\n  const addCommentButton = document.getElementById(\"comment-button\");\r\n  const nameInput = document.getElementById(\"name-input\");\r\n  const textInput = document.getElementById(\"text-input\");\r\n  const addLoaderComment = document.getElementById('add-loader-comment');\r\n\r\n\r\n  addCommentButton.addEventListener(\"click\", () => {\r\n\r\n  document.getElementById(\"add-form\").style.display = 'none';\r\n  document.getElementById(\"add-loader-comment\").style.display = 'block';\r\n\r\n  const plusLoaderComment = document.querySelector(\".add-loader-comment\");\r\n\r\n\r\n    nameInput.classList.remove(\"error\");\r\n    textInput.classList.remove(\"error\");\r\n    if (nameInput.value === \"\") {\r\n      nameInput.classList.add(\"error\");\r\n      return;\r\n    }\r\n    if (textInput.value === \"\") {\r\n      textInput.classList.add(\"error\");\r\n      return;\r\n    }\r\n    plusLoaderComment.classList.add(\"hidden\");\r\n\r\n    // Создание нового комментария\r\n    function postTask() {\r\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postApi)({\r\n        text: textInput.value,\r\n        name: nameInput.value,\r\n        // date: formatedDate\r\n        date: country === \"ru\" ? (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_4__.formatDateToRu)(new Date( _api_js__WEBPACK_IMPORTED_MODULE_0__.postApi)) : (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_4__.formatDateToUs)(new Date( _api_js__WEBPACK_IMPORTED_MODULE_0__.postApi)),\r\n        \r\n      }).then(() => {\r\n        return (0,_main_js__WEBPACK_IMPORTED_MODULE_3__.getRenderComments)({ comments });\r\n      })\r\n        .then(() => {\r\n          (0,_main_js__WEBPACK_IMPORTED_MODULE_3__.getRenderComments)({ comments });\r\n          document.getElementById(\"add-form\").style.display = 'flex';\r\n          document.getElementById(\"add-loader-comment\").style.display = 'none';\r\n          nameInput.value = \"\"\r\n          textInput.value = \"\"\r\n        })\r\n        .catch((error) => {\r\n          document.getElementById(\"add-form\").style.display = 'flex';\r\n          document.getElementById(\"add-loader-comment\").style.display = 'none';\r\n          if (error.message === \"Сервер сломался\") {\r\n            alert('Сервер сломался, попробуйте позже');\r\n          }\r\n          if (error.message === \"Плохой запрос\") {\r\n            alert('Имя и комментарий должны быть не короче 3х символов');\r\n          }\r\n          else {\r\n            alert(\"Кажется у вас сломался интернет, попробуйте позже\")\r\n          }\r\n         \r\n          console.log(error);\r\n        });\r\n    }\r\n    postTask();\r\n  });\r\n}\r\n  // Удаление последненго комментария\r\n  function deleteCommentForm() {\r\n    if (!_api_js__WEBPACK_IMPORTED_MODULE_0__.token) return\r\n    const deleteButtonElement = document.querySelector(\".delete-form-button\");\r\n    deleteButtonElement.addEventListener(\"click\", () => {\r\n      console.log(comments[comments.length - 1])\r\n      ;(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.deleteComment)({ id:comments[comments.length - 1].id }).then(() => {\r\n       ;(0,_main_js__WEBPACK_IMPORTED_MODULE_3__.getRenderComments)({ comments });\r\n      })\r\n    });\r\n  }\r\n  deleteCommentForm();\r\naddCommentForm();\r\n\r\n\r\n  addComment.innerHTML = commentsHtml;\r\n// Ответ на комментарий\r\nfunction replayComment () {\r\n  const textInput = document.getElementById(\"text-input\");\r\n  const commentsElements = document.querySelectorAll(\".comment-text\");\r\n  for (const commentElement of commentsElements) {\r\n    commentElement.addEventListener(\"click\", () => {\r\n      const index = commentElement.dataset.index;\r\n      if (index !== null) {\r\n        const comment = comments[index];\r\n        textInput.value = `> ${comment.text}:\\n ${comment.name}.,`;\r\n      }\r\n    });\r\n  }\r\n}\r\nreplayComment();\r\n(0,_like_js__WEBPACK_IMPORTED_MODULE_1__.addLikeEventListeners)({ comments });\r\n// renderComments();\r\n};\r\n\n\n//# sourceURL=webpack://biblioteka/./renderComments.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;