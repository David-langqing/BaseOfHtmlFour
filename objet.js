/*var faculty ={
    name:'Mike',
    age:20,
    job:'Desingner'
};
for(var i in faculty){
    console.log(i+":"+faculty[i]);
}
var person={
    age:31,
    gender:"male",
    address:{
        city:"shanghai",
        zipcode:"200000"
    }
}*/
function Faculty(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.showname=function(){
        console.log(this.name);
    }
} 
var robert =new Faculty("Robert","21","developer");
var alex =new Faculty("Alex","15","coder");
var leo =new Faculty("Leo","36","desinger");
leo.showname();
Faculty.prototype.showAge = function(){
    console.log(this.age);
}
leo.showAge();