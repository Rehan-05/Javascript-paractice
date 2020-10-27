var john={
  jfullname:'John singh',
  jmass:'60kh',
  jheight:'6m',
  CalBMI : function()
  {
    this.mbi=this.jmass/(this.jheight+this.jheight);
    return this.mbi;
  }
};
var mark={
  Mfullname:'Marksingh',
  Mmass:'80kh',
  Mheight:'6m',
  CalBMI : function()
  {
    this.mbi=this.Mmass/(this.Mheight+this.Mheight);
    return this.mbi;
  }
};
  john.CalBMI();
  mark.CalBMI();
console.log(john,mark);
