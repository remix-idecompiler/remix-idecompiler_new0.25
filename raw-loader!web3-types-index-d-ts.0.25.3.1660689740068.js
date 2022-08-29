(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ 2935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n    This file is part of web3.js.\n    web3.js is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n    web3.js is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n    You should have received a copy of the GNU Lesser General Public License\n    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\n/**\n * @file index.d.ts\n * @author Josh Stevens <joshstevens19@hotmail.co.uk>, Samuel Furter <samuel@ethereum.org>\n * @date 2018\n */\n\nimport * as net from 'net';\nimport { Bzz } from 'web3-bzz';\nimport { BatchRequest, provider, Providers, Extension } from 'web3-core';\nimport { Eth } from 'web3-eth';\nimport { Personal } from 'web3-eth-personal';\nimport { Network } from 'web3-net';\nimport { Shh } from 'web3-shh';\nimport { Utils } from 'web3-utils';\n\nexport default class Web3 {\n    constructor();\n    constructor(provider: provider);\n    constructor(provider: provider, net: net.Socket);\n\n    static modules: Modules;\n    readonly givenProvider: any;\n    static readonly givenProvider: any;\n    defaultAccount: string | null;\n    defaultBlock: string | number;\n    readonly currentProvider: provider;\n    setProvider(provider: provider): boolean;\n    BatchRequest: new () => BatchRequest;\n    static readonly providers: Providers;\n\n    utils: Utils;\n    eth: Eth;\n    shh: Shh;\n    bzz: Bzz;\n    version: string;\n    static readonly version: string;\n    static readonly utils: Utils;\n    extend(extension: Extension): any;\n}\n\nexport interface Modules {\n    Eth: new (provider: provider, net: net.Socket) => Eth;\n    Net: new (provider: provider, net: net.Socket) => Network;\n    Personal: new (provider: provider, net: net.Socket) => Personal;\n    Shh: new (provider: provider, net: net.Socket) => Shh;\n    Bzz: new (provider: provider) => Bzz;\n}\n");

/***/ })

}]);
//# sourceMappingURL=raw-loader!web3-types-index-d-ts.0.25.3.1660689740068.js.map
//# sourceMappingURL=raw-loader!web3-types-index-d-ts.0.25.3.1660689740068.js.map