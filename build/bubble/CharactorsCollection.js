"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactorsCollection = void 0;
var CharactorsCollection = /** @class */ (function () {
    function CharactorsCollection(data) {
        this.data = data;
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
}());
exports.CharactorsCollection = CharactorsCollection;
