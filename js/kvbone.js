/**
 * Created by rdemartis on 23/06/15.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../typescript/typings/tsd.d.ts" />
var Repository = (function (_super) {
    __extends(Repository, _super);
    function Repository() {
        _super.apply(this, arguments);
    }
    return Repository;
})(Backbone.Model);
var RepositoryList = (function (_super) {
    __extends(RepositoryList, _super);
    function RepositoryList() {
        _super.apply(this, arguments);
    }
    return RepositoryList;
})(Backbone.Collection);
//# sourceMappingURL=kvbone.js.map