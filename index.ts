
var em = {
  id: 1,
  geet: function(){
    var meo = this;
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};

var em2 = {
  id: 1,
  meo: function(){
    var meomeo = this;
    setTimeout(() => {console.log(meomeo.id);}, 1000);
  }
};
var meo3 = (para: string) => 'hoang' + para;
em2.meo();