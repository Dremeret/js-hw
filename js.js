
// hw-10


// const bankAccount = {
//     ownerName:"Dima",
//     accountNumber:15,
//     balance:0,
  
//     deposit(money){
//         this.balance += money;
//     },
  
//     withdraw(money){
//       this.balance -= money;
//       // return this.balance;
//     },
  
//     getBalance(){
//       return this.balance;
//     }
//   };
  
//   const btnDeposit = document.querySelector(".btnDeposit");
//   const btnWithdraw = document.querySelector(".btnWithdraw");
  
//   btnDeposit.addEventListener ("click", ()=>{
//   const addMoney = Number(document.querySelector(".deposit").value);
//   bankAccount.deposit(addMoney);
//   console.log(` У вас на рахунку : ${bankAccount.getBalance()}`)
//   });
  
  
  
  
//   btnWithdraw.addEventListener ("click", ()=>{
//     const subtractMoney = Number(document.querySelector(".withdraw").value);
//     bankAccount.withdraw(subtractMoney);
//     console.log(` У вас на рахунку : ${bankAccount.getBalance()}`)
//     });
  
  
  
  
  
//   const weather = {
//     temperatur:0,
//     humidity:0,
//     windSpeed:0,
    
//   temperature(){
//     if(this.temperatur < 0 ){
//     return true;
//     }
//     else{
//       return false;
//     }
//   }
  
//   }
  
//   const temp = document.querySelector(".temp")
  
//   if(weather.temperature()){
//   console.log("температура нижче 0 градусів Цельсія")
//   }
//   else{
//    console.log("температура вище 0 градусів  Цельсія")
//   };
  
  
//   3
   
//   const Name = document.querySelector(".name")
//   const Email = document.querySelector(".email")
//   const Pass = document.querySelector(".password")
//   const btn = document.querySelector(".btnPass")
  
//   const user = {
  
//    name: "Dima",
//    email:" dream.er03062006gmail.com",
//    password: 2006,
  
//    login( name2,email2,password2){
    
//     if(name2 === this.name && email2 === this.email && password2 === this.password){
//      console.log(" Доброго дня")
//     }
//     else{
//        console.log("Ви ввели пароль не правильно")
//     }
//    }
  
//   }
  
//   btn.addEventListener(`click`,()=>{
   
//     user.login(Name.value,Email.value,Pass.value)
//   })
  
//   // 4
  
  
//   const movie = {
//     title: " the school",
//     director: "Dimon",
//     year: 1994,
//     rating: 9.3,
//     isRating: function() {
//       if (this.rating > 8) {
//         return true;
//       } else {
//         return false;
//       }
      
//     },
//   }
  
//   document.write("<p>Title: " + movie.title + "</p>");
//   document.write("<p>Director: " + movie.director + "</p>");
//   document.write("<p>Year: " + movie.year + "</p>");
//   document.write("<p>Rating: " + movie.rating + "</p>");
  
  
//   if (movie.isRatingHigh()) {
//   document.write("<script>document.querySelector('p:nth-child(1)').style.color = 'green';</script>");
//   }
  

// hw - sorting obgekts

// let user = {
//   name: 'Dima',
//   age: 12,
//   hobby: 'musik',
  
// };

// 1
// user.mood = 'happy';
// user.age = '13;'
// user.hobby = 'skydiving';


// for (let key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

// 2
// function countProps(obj) {
    
//     return Object.keys(obj).length;
//   }

//   console.log(countProps(user));




// 3
//  const employees = {
//   Sasha:3,
//   Maria:5,
//   Lera:6,
//   Artur:4,
//   Dima:4


//  }


//  const findBestEmployee = (arrayObject) => {


// let count = 0;
// let name = '';

//   for (const key in arrayObject) {
//     if(arrayObject[key] > count){
//      name = key;
//      count = arrayObject[key];
//     }

//   }
// return name;
//  }
// console.log(findBestEmployee(employees))



 // 4

// const employees = {
//   Artur : 5000,
//   Dima : 4000,
//   Sasha: 8000
// }
// const countTotalSalary = (employees) =>{
//   let summa = 0;
//   for (let people in employees) {
//     summa += employees[people]
//   }
//   return summa;
// }
// const employes = countTotalSalary(employees)
// console.log(summa)

// 5

// const names = [
// {name:"Milk",price: 40},
// {name:"Bread",price: 25},
// {name:"Butter",price: 50}
// ];

// let prop = "name";

// const getAllPropValues = (arr, prop) =>{
//    let value = []
//    for (const abc  of arr) {
//          value.push(abc[prop])
//    }
// }
// console.log(getAllPropValues(names,prop))


// 6

// const products = [
//   {name: "bread", price: 25,quantity:2},
//   {name: "bread", price: 35,quantity:5},
//   {name: "butter", price: 25,quantity:1}
// ];

// const calculateTotalPrice = (allProdcuts, productName) =>{
//    let totalPrice  = 0;
//    for(const product of allProdcuts ){
//  if(productName == product.name){
//  totalPrice += product.price * product.quantity;
//  }
//    }
//    return totalPrice;


// }

// console.log()






















