
let mat =["yes" , "no" , "definitly" ]
mat.forEach(logger);
function logger(x);{
    console.log(x);
    
}

let summerDeg = [47,48,53,55];
console.log(summerDeg.filter(myFunction));
 function myfunction(x) {
     return x > 50;
 }



let books = [
    {
        neme: "book1",
        ID:1,
    },
    {
        neme: "book2",
        ID:2,
    },
    {
        neme: "book3",
        ID:3,
    },
    {
        nema: "book4",
        ID:4,
    }
];
 
let result = getBookById(books, 4);
if (result == 1){
console.log( "متوفر" );
}
else {
    console.log( "غير متوفر" );
    
}
function  getBookById(books, ID)
{
    for ( i of books){ 
    if ( i.ID == ID ){
        return 1; 
    }
   }
  } 
  
  
  
  
  
  
//   getBookById (books,4);
//     {console.log("متوفر")
//     } 
// //   else {console.log("غير متوفر")
// //   }
//    }
//     }
 
let items = [];
let done = [];
let price =[];
let quantity= [];

while (done !="انتهيت"){
  items =prompt (" السلعه");
  price = parseFloat(prompt ("السعر"));
  quantity= parseInt(prompt("الكميه"));
  done = prompt(" انتهيت")

 items.push(items);
 price.push(price);
 quantity.push(quantity);
}











