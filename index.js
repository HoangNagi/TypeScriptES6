var em = {
    id: 1,
    geet: function () {
        var _this = this;
        var meo = this;
        setTimeout(function () {
            console.log(_this.id);
        }, 1000);
    }
};
var em2 = {
    id: 1,
    meo: function () {
        var meomeo = this;
        setTimeout(function () { console.log(meomeo.id); }, 1000);
    }
};
var meo3 = function (para) { return 'hoang' + para; };
em2.meo();
