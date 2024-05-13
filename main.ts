//  function anovation:
 function greet(name:string, id:number){
     console.log(`welcome,${name} and your id is ${id}`);
 }
 greet ("zakii",123);
// // function call:


// optional  parameter:
 function getInformation(firstname: string, age?: number): string{
    return firstname +" "+ age;
}
console.log(getInformation('zakii'));
 console.log(getInformation('zakii',30));

// default parameter:
function setDetail(name: string, message : string =" welcome"): string{
         return message + ' ' + name ;
}
console.log(setDetail('zakii'));
console.log(setDetail('zakii' , 'hello '));