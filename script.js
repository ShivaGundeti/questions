const cards = document.querySelectorAll(".card-text");
// console.log(cards);
const btns = document.querySelectorAll('.btn');
const icon = document.getElementById('icon');
const icon2 = document.getElementById('icon2');
// console.log(btns);

// btns.forEach(function (btn){
//     btn.addEventListener('click',function(e) {
//         const value = e.currentTarget.classList;
//         console.log(value);
//         cards.forEach(function(card){
//             let x = card.classList;
//             console.log(x);


//         })
//     })})

btns.forEach(function(btn){
    btn.addEventListener('click',function (e){
        const x = e.currentTarget.classList;
        console.log(x);
        if(x.contains("b1")){
            cards[0].classList.toggle('content')
            icon.style.display = "none";//+
            icon2.style.display = 'block';//-

            
        }
        else if(x.contains("b2")){
            cards[1].classList.toggle('content')
        }
        else {
            cards[2].classList.toggle('content')
        }
    
    
    })
    })
  
    
   


// btns.forEach(function (btn){
//     btn.addEventListener('click',function(e){
//         const x = e.currentTarget.classList;
//         console.log(x);
//         cards.forEach(function (card) {
//             if(card.classList.contains("card-text1")){
//                 card.classList.toggle("content");
//                 console.log(card.classList);
//             }
//             else if(card.classList.contains("card-text2")){
//                 card.classList.toggle("content");
//             }
//             else {
//                 card.classList.toggle("content");
//             }
        
        
        
        
//         })})
    
//         })
      
