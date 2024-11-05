let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];

  // 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

// const productNameStartWithT = arr.filter((elemtns) => elemtns.name.toLowerCase().startsWith("t"))
// console.log(productNameStartWithT);

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

// let count = 0

// arr.forEach((Element)=>{
//   const elementFinder = Element.name.toLowerCase()

//   if (
//    elementFinder.startsWith("t") && elementFinder.endsWith("t")
//   ) {
//     count++
//   }
// })

// console.log(count);

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key
// "lerinin cemini tapin

// let sum = 0

// arr.forEach((Element)=>{
//   const elementFinder = Element.name.toLowerCase()

//   if (
//    elementFinder.startsWith("t") && elementFinder.endsWith("t")
//   ) {
//     sum += Element.key
//   }
// })

// console.log(sum);

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// const arrNameChagner = arr.map((arr) =>{
//   if (arr.name.toLowerCase().startsWith('e')) {
//     return {...arr , name: "SuperDev" }
//   }
//   return arr
// })
// console.log(arrNameChagner);

// 5) "name"-i en uzun olan obyekti tapin

// const arrLongerName = arr.reduce((longest,current) => {
//   return current.name.length < longest.name.length ? longest : current
// })

// console.log(arrLongerName);

// 6) "name"-i en uzun olan obyektin key'ni tapin

// -

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// -

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)

// const arrLength = arr.filter(Element => Element.name.length === 4)

// console.log(arrLength);

// 9)  en boyuk "key"
// i olan obyektin "name"-i ni tapin

// const keyFinder = arr.reduce((maxKey , currentKey)=>{
//   return maxKey.key > currentKey.key ? maxKey : currentKey
// }, 0)

// console.log(keyFinder);

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.

// const letterFinder = arr.filter((Element) =>{
//   const index = Element.name.toLowerCase()
//   return index.indexOf('l') !== index.lastIndexOf('l')
// })

// console.log(letterFinder);

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.


// const letterFinder = arr.filter((Element) => {
//   const tFinder = Element.name.toLowerCase().split('t').length-1

//   return tFinder >=2
// })

// console.log(letterFinder);

// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

// const finder = arr.filter((Element) =>{
//   return Element.key > 10 && Element.name.startsWith('l')
// })

// console.log(finder);



