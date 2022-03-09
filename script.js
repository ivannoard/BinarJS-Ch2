// Hoisting let
// let firstName = 'ivan'
// function greeting(){
// 	console.log(firstName)
// 	let firstName
// }

// let middleName = 'Nova'
// function greetings(){
// 	let middleName = 'reza'
// 	console.log(middleName)
// }
// greeting()
// greetings()

// dont ever use var

// data type
// there are two type : primitive and non primitive
// primitive : string, number, boolean, NaN, undefined, null
// non-primitive : object and array
// data type function checker => typeof()
// write boolean variable => isBlablabla
// null itu data kosong || gak ada nilainya
// undefined itu tidak terdefinisi || cuma deklarasi tanpa ada sumber nilai
// number dibagi dua => infinity (pembagian 0) && NaN (pembagian angka dengan tipe data lain)

// Day 2
// const dummyData = [
//   {
//     id: 1,
//     merk: 'nike',
//     ukuran: [36, 38, 39, 40],
//     warna: ['merah', 'biru', 'kuning'],
//     harga: 420000
//   },
//   {
//     id: 2,
//     merk: 'puma',
//     ukuran: [40, 41, 42, 43],
//     warna: ['hijau', 'kuning', 'kelabu'],
//     harga: 450000
//   },
// ]
// dummyData.forEach(function (item) {
//   console.log(`Sepatu Merk : ${item.merk} dengan berbagai ukuran : ${item.ukuran}`)
// })


// challenge day 2
// jangan pakai function dalam object karena akan merender lama saat asynchronous
// const person = [
//   {
//     id: 1,
//     name: "marks",
//     mass: 95,
//     height: 1.88,
//     BMI: function () {
//       let result = this.mass / this.height ** 2
//       return result
//     }
//   },
//   {
//     id: 2,
//     name: "john",
//     mass: 90,
//     height: 1.76,
//     BMI: function () {
//       let result = this.mass / this.height ** 2
//       return result
//     }
//   }
// ]
// console.log(`Mark's BMI : ${person[0].BMI()}`)
// console.log(`John's BMI : ${person[1].BMI()}`)
// const result = (person[0].BMI() > person[1].BMI()) ? "Mark's BMI is higher than John" : "John's BMI is higher than Mark"
// console.log(result)

// function BMI(mass, height) {
//   let result = Math.floor(mass / height ** 2)
//   return result
// }

// const mark = BMI(person[0].mass, person[0].height)
// const john = BMI(person[1].mass, person[1].height)

// if (mark > john) {
//   console.log("Mark's BMI is higher than John");
// } else {
//   console.log("John's BMI is higher than Mark");
// }
// const result = mark > john ? "Mark's BMI is higher than John" : "John's BMI is higher than Mark"

// console.log(result)

// day 3
// let z = ""
// console.log(+z)

// day 4
// belajar array, object, looping dan soal struktur data javascript
/*let tahun = prompt("Tahun berapa indonesia merdeka?")
// 1 liner cause it just 1 output
if (tahun == 1945) alert("benar")

let cond = prompt("berapa kaki burung?")
if (cond == 2) {
  alert("benar")
} else {
  alert("salah")
}*/

// buat sim
/*const age = prompt("berapa umur kamu?")
if (age >= 17) {
  console.log("boleh buat sim")
} else if (age < 17) {
  console.log("tidak boleh")
}*/

// switch case
/*let a = 2 + 2
switch (a) {
  case 3:
    console.log("terlalu kecil")
    break
  case 4:
    console.log("terlalu kecil")
    break
  case 5:
    console.log("terlalu kecil")
    break
  default:
    console.log("terlalu kecil")
}*/

/*let hari = "monday"
switch (hari) {
  case "monday":
    console.log("makan")
    console.log("minum")
    console.log("berak")
    break
  case "selasa":
    console.log("tidur")
    break
}*/
/*let bajuSiti = 'merah'
let celanaSiti = 'jeans'
switch (bajuSiti, celanaSiti) {
  case "merah":
    console.log("masuk UMY")
    break
  case "biru":
    console.log("masuk udinus")
    break
  case "kuning":
    console.log("masuk UI")
    break
  case "ijo":
    console.log("masuk IAIN")
    break
  case "merah" && "jeans":
    console.log("trendy sekalee")
    break
  default:
    console.log("belajar")
}*/

// function
/*function fruitProcessor(apples, oranges) {
  console.log(`apple with ${apples} and oranges ${oranges}`)
  let result = `apple with ${apples} and oranges ${oranges}`
  return result
}
let fruits = fruitProcessor(5, 10)
console.log(fruits) */

// function declaration
function declareWhat() {
  console.log('this is function declare function')
}

// function expression
let doWhat = function doSomething() {
  console.log('this is function expression function')
}

// ternary operator
/*let age = 6
const drink = age > 5 ? 'teh' : 'milo'
console.log(drink)*/

// arrow function
/*const calcAge = birth => console.log(2022 - birth)
let age = calcAge(2000)
age

// berbagai penulisan arrow function
// one liner
const calcAge2 = birth => 2022 - birth
// more
const calcAge3 = birth => {
  console.log(`my birth is ${birth}`)
  console.log('say happy birthday')
}*/

// day5
// function calling other function

/*function cutFruitPieces(fruit) {
  return fruit * 4
}

function fruitProcess(kiwi, apple) {
  const kiwiPiece = cutFruitPieces(kiwi)
  const applePiece = cutFruitPieces(apple)
  const juiceShake = `juice with ${kiwiPiece} kiwi and ${applePiece} apple`
  return juiceShake
}

console.log(fruitProcess(5, 4))*/

// do while 
/*let nilaiRaport = 5
do {
  console.log(`nilai raport ${nilaiRaport}`)
  nilaiRaport++
} while (nilaiRaport < 50)*/


// code challenge
// soal 1
// function compareAverage(dolphinScore, koalaScore) {
//   let dolphin = 0
//   let koala = 0

//   dolphinScore.forEach(score => {
//     dolphin += score
//   });
//   koalaScore.forEach(score => {
//     koala += score
//   });
//   dolphin = dolphin / 3
//   koala = koala / 3
//   if (dolphin > koala) {
//     return `dolphin wins ${dolphin}`
//   } else if (dolphin < koala) {
//     return `koala wins ${koala}`
//   } else if (dolphin == koala) {
//     return "both wins"
//   } else {
//     return "who wins?"
//   }
// }

// const dolphin = [97, 112, 101]
// const koala = [109, 95, 123]

// console.log(compareAverage(dolphin, koala))

// soal 2
// 15% kalo tips 50 > 300 || 20 % kalo dibawah 50 dan diatas 300
// function countBill(bill) {
//   let beetwen = 0.15
//   let under = 0.20
//   return bill >= 50 && bill <= 300 ? `the bill was ${bill} and tip ${bill * beetwen} total ${bill + beetwen}` : `the bill was ${bill} and tip ${bill * under} total ${bill + under}`
// }

// let bill = 275
// console.log(countBill(bill))

// soal 3
/*const calcAverage = (arrScore) => {
  let result = 0
  arrScore.forEach(score => {
    result += score
  });
  return result / 3
}

const checkWinner = (avgDolphin, avgKoala) => {
  return avgDolphin > avgKoala ? `Dolphin wins (${avgDolphin} : ${avgKoala})` : `Koala wins (${avgKoala} : ${avgDolphin})`
}

const dolphin = [44, 23, 71]
const koala = [65, 54, 49]

const dolphinScore = calcAverage(dolphin)
const koalaScore = calcAverage(koala)

console.log(checkWinner(dolphinScore, koalaScore))

// soal 4
const calcTip = (bills) => {
  const total = []
  const tip = bills.map((bill) => {
    return bill >= 50 && bill <= 300 ? bill *= 0.15 : bill *= 0.20
  })
  for (let i = 0; i < bills.length; i++) {
    total.push(bills[i] + tip[i])
  }
  return `Bills:[${bills}]\n =============== \nTip: [${tip}]\n =============== \nTotal: [${total}]`
}
const bills = [125, 555, 44]
console.log(calcTip(bills))*/
// map membuat array baru || reduce tidak membuat array baru

// challenge more
const game = {
  team1: "Bayen Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "never",
      "pavard",
      "martinez",
      "alaba",
      "davies",
      "kimmich",
      "goretzka",
      "coman",
      "muller",
      "gnarby",
      "lewandowsky"
    ],
    [
      "burki",
      "schulz",
      "hummels",
      "akinji",
      "hakimi",
      "weigl",
      "witzel",
      "hazard",
      "brandt",
      "sancho",
      "gotze"
    ]
  ],
  score: '4:0',
  scored: ['lewandowski', 'gnarby', 'lewandowski', 'hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
}
function getPosition(array) {
  const team = {}
  team.gk = array[0]
  team.fieldPlayer = array.filter((item) => item !== array[0])
  return team
}
function subsPlayer(player1, player2, player3) {
  const arr = new Array(player1, player2, player3)
  return arr
}
function printGoals() {

}
const players1 = game.players[0]
const players2 = game.players[1]

const bayernMunich = getPosition(players1)
const borussiaDortmund = getPosition(players2)

const allPlayers = [...players1, ...players2]

const players1Final = [...players1, ...subsPlayer('thiago', 'coutinho', 'perisic')]

const team1 = game.odds.team1
const draw = game.odds.x
const team2 = game.odds.team2

const lowerOdd = team1 > team2
// switch (lowerOdd) {
//   case true:
//     console.log(`team1 wins`);
//     break
//   case false:
//     console.log(`team2 wins`);
//     break
//   default:
//     console.log(`draw`);
// }
// console.log(players1Final);

// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`Goal ${i + 1} : ${game.scored[i]}`);
// }
const scoredPlayer = {}
const playerData = game.scored
const result = playerData.reduce((prev, item) => {
  return prev == item ? true : false
})
console.log(result);