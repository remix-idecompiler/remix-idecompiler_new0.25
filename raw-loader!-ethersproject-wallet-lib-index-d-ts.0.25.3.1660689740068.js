(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 2928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Provider, TransactionRequest } from \"@ethersproject/abstract-provider\";\nimport { ExternallyOwnedAccount, Signer, TypedDataDomain, TypedDataField, TypedDataSigner } from \"@ethersproject/abstract-signer\";\nimport { Bytes, BytesLike, SignatureLike } from \"@ethersproject/bytes\";\nimport { Mnemonic } from \"@ethersproject/hdnode\";\nimport { SigningKey } from \"@ethersproject/signing-key\";\nimport { ProgressCallback } from \"@ethersproject/json-wallets\";\nimport { Wordlist } from \"@ethersproject/wordlists\";\nexport declare class Wallet extends Signer implements ExternallyOwnedAccount, TypedDataSigner {\n    readonly address: string;\n    readonly provider: Provider;\n    readonly _signingKey: () => SigningKey;\n    readonly _mnemonic: () => Mnemonic;\n    constructor(privateKey: BytesLike | ExternallyOwnedAccount | SigningKey, provider?: Provider);\n    get mnemonic(): Mnemonic;\n    get privateKey(): string;\n    get publicKey(): string;\n    getAddress(): Promise<string>;\n    connect(provider: Provider): Wallet;\n    signTransaction(transaction: TransactionRequest): Promise<string>;\n    signMessage(message: Bytes | string): Promise<string>;\n    _signTypedData(domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, value: Record<string, any>): Promise<string>;\n    encrypt(password: Bytes | string, options?: any, progressCallback?: ProgressCallback): Promise<string>;\n    /**\n     *  Static methods to create Wallet instances.\n     */\n    static createRandom(options?: any): Wallet;\n    static fromEncryptedJson(json: string, password: Bytes | string, progressCallback?: ProgressCallback): Promise<Wallet>;\n    static fromEncryptedJsonSync(json: string, password: Bytes | string): Wallet;\n    static fromMnemonic(mnemonic: string, path?: string, wordlist?: Wordlist): Wallet;\n}\nexport declare function verifyMessage(message: Bytes | string, signature: SignatureLike): string;\nexport declare function verifyTypedData(domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, value: Record<string, any>, signature: SignatureLike): string;\n//# sourceMappingURL=index.d.ts.map");

/***/ })

}]);
//# sourceMappingURL=raw-loader!-ethersproject-wallet-lib-index-d-ts.0.25.3.1660689740068.js.map
//# sourceMappingURL=raw-loader!-ethersproject-wallet-lib-index-d-ts.0.25.3.1660689740068.js.map