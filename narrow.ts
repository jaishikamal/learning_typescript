// narrowing 
let a: string | number

a = "Hello";
if (typeof a === "string") {
    console.log(a.toUpperCase()); 
} else {
    console.log(a.toFixed(2)); 
} 


function showValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    } 
  }

  showValue("Hello");
  showValue(100);

  // any keyword 

  let data:any ="kamal";
  data = 100;

data = true;
data =[1,2,3];
data = {name:"kamal", age:30};
