
/**
console.log("oye bhai bhai hai");

 var name='rehan';
 console.log(name);

 var last='asghar';
 console.log(last);

 var age = 5;
console.log(age);

var string= 'lahore4';
console.log(string);

 **/
/*
 // type coercion
var name ='rehan';
var se = 'BSSE';
var ismarried= true;
console.log(name + 'is a student of ' + se);

// type mutation

var age = 20;
alert(name + ' is a ' + age + ' year old?');

var date= prompt('when he will marry');
console.log(date);
*/

/********************
challenge no 1 about operators
********************/
/*
var markm = 80 ;
var markh = 6;
var johnm = 60;
var johnh = 6;

// BMI of mark

var markBMI = markm / (markh*markh) ;
console.log(markBMI);

var johnBMI = johnm / (johnh*johnh) ;
console.log(johnBMI);

var mass= markBMI >= johnBMI ;
console.log("is marks BMI higher then john's? " + mass);
*/

/**************************************
**Ternary operator and switch statement
*/
/*
var name = 'rehan';
var age = 20;
age < 20 ? console.log('he is ' + name) : console.log('No, he is not ' + name);
*/

/*********************
**coding challenge 02*
*/


/*
var   johx=89;
var   johny=120;
var   johnz=173;
console.log(johx,johny,johnz);
var   mikex=116;
var   mikey=94;
var   mikez=123;
console.log(mikex,mikey,mikez);

var   marryx=97;
var   marryy=134;
var   marryz=105;
console.log(marryx,marryy,marryz);


var mikeAvg= (89+120+173) / 3;
console.log(mikeAvg);

var johnAvg= (116+94+123) / 3;
console.log(johnAvg);

var marryAvg= (910+134+105) / 3;
console.log(marryAvg);

if(mikeAvg > johnAvg && mikeAvg > marryAvg)
{
  console.log("mike team win the match " + mikeAvg);
}
else if (johnAvg > mikeAvg && johnAvg > marryAvg) {
  console.log("john won the match " + johnAvg);
}
else {
  console.log("marry win the match "+ marryAvg);
}
*/

/*
function skills(name,workyear)
{
  console.log(name,workyear);
}
skills('rehan',37);



function world(name='ali',  clais='engineer')
{
   var hy = name + " tAKING LECTURE in  " + clais
   return hy;
}

var reh = world('rehan','lab1');
console.log(reh);
*/

/*
function calculateAge(birthyear)
{
   var r= 2020 - birthyear;
   return r;
}
var x=calculateAge(2000);
var y=calculateAge(1999);
var z=calculateAge(1998);
console.log(x,y,z);

function yeartoRetire(name,year)
{
  var age= calculateAge(year);
  var retirment= 60-age;
   if (retirment> 0) {
     console.log(name,retirment);
   }
   else {
     console.log(name,retirment);
   }
}
yeartoRetire('saqlain',2030);
yeartoRetire('ali',2040);
*/
/*
var array= [ 'rehan','class','roll-no','section'];
console.log(array);
array.pop();
console.log(array);
array.push('city');
console.log(array);
array.unshift('firstname');
console.log(array);
array.shift();
console.log(array);
console.log(array.indexOf('class'));
*/

/**************************************
challenge no 03 about functiona n array
***************************************/
/*
function calculator(b)
{
   var p;
  if(b<50)
  {
    p=.2
  }
  else if (b>50 && b<200) {
    p=.15
  }
  else {
    p=.1
  }
   return b*p ;

 }
var arr1=[124,48,268];
var tips=[calculator(arr1[0]),calculator(arr1[1]),calculator(arr1[2])];
var final=[arr1[0]+tips[0],arr1[1]+tips[1],arr1[2]+tips[2]];
console.log(tips,final);
*/

/*
var man = {
     name:'rehan',
     fname :'asghar',
     city: ['dwn','bwp'],
     age:20,
     gender:'male'
};
console.log(man.city);

man.fname='M asghar';
man['class']='BSSE';
console.log(man);

man.city="bwn";
console.log(man.city);

var reh=man;
reh.age=30;
console.log(man.age);
*/
/*
var goraya = new Object() ;
goraya.name='gor-200';
goraya.chak='200-m';
goraya.edu="BSSE";
goraya['city']='dahranwala';
console.log(goraya);

delete goraya.edu;

console.log(goraya);



var markm = 80 ;
var markh = 6;
var johnm = 60;
var johnh = 6;

*/

/**************************************
challenge no 04 about Object
***************************************/
/*
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
*/



/*************************
challenge no 05 (i and ii)
*************************/
/*
var john = {
       Name : "Rehan Goraya",
       bills : [124,48,268,180,42],
       calBills : function(){
                this.tips=[];
                this.finalvalues=[];
                 for(var i=0 ; i <= this.bills.length ; i++)
                 {
                   var per;
                   var bill = this.bills[i];
                    if(bill<50)
                    {
                    per=.2;
                    }
                    else if(bill>50 && bill<200)
                    {
                      per=.15;
                    }
                    else{
                      per=.10;
                    }

                    this.tips[i] = bill * per;
                    this.finalvalues[i]= bill + bill * per;
                 }
       }
}
var Mark = {
       Name : "Rehan Goraya",
       bills :[77,375,110,45],
       calBills : function(){
                this.tips=[];
                this.finalvalues=[];
                 for(var i=0 ; i <= this.bills.length ; i++)
                 {
                   var per;
                   var bill = this.bills[i];
                    if(bill<100)
                    {
                    per=.2;
                    }
                    else if(bill>100 && bill<300)
                    {
                      per=.1;
                    }
                    else{
                      per=.25;
                    }

                    this.tips[i] = bill * per;
                    this.finalvalues[i]= bill + bill * per;
                 }
       }
};

function  calAvg(tips){
       var sum=0;
       var average;
       for (var i = 0; i < tips.length; i++) {
         sum = sum + tips[i];

       }
       average=  sum / tips.length;
       return average;

}

john.calBills();
Mark.calBills();
john.average = calAvg(john.tips);
Mark.average = calAvg(Mark.tips);
console.log(john,Mark);
*/

console.log(this);
