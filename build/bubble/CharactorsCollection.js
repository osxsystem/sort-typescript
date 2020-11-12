"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactorsCollection = void 0;
var SorterAbstract_1 = require("./SorterAbstract");
var CharactorsCollection = /** @class */ (function (_super) {
    __extends(CharactorsCollection, _super);
    function CharactorsCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(CharactorsCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactorsCollection.prototype.compare = function (left, right) {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase();
    };
    CharactorsCollection.prototype.swap = function (left, right) {
        var character = this.data.split('');
        var leftHand = character[left];
        character[left] = character[right];
        character[right] = leftHand;
        this.data = character.join('');
    };
    return CharactorsCollection;
}(SorterAbstract_1.SorterAbstract));
exports.CharactorsCollection = CharactorsCollection;
