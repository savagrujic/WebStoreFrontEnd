

let login = document.querySelector('.user')
let loginpannel = document.querySelector('.login')
let close = document.querySelector('.izadji')
login.addEventListener('click', function() {
    loginpannel.classList.remove('out')
   loginpannel.style.display = 'flex'
   loginpannel.classList.add('move')

})
close.addEventListener('click', function() {
    loginpannel.classList.remove('move')
    loginpannel.classList.add('out')
   
 //   loginpannel.style.display = 'none'
   

    
})

let i = 0;
const poruke = ['Ekskluzivni popusti! Ostvarite do 50% sniženja na odabrane artikle – požurite, zalihe su ograničene!', 'Vreme je za uštedu! Iskoristite sezonsko sniženje i kupujte po neverovatnim cenama!', 'Samo kratko! Specijalna akcija: Dodatnih 10% popusta na već snižene proizvode!', 'Kupujte pametno! Besplatna dostava za sve porudžbine preko 9.000 RSD!', 'Ne propustite! Ograničena ponuda: Popust na popularne brendove samo do isteka zaliha!']
let textporuka = document.querySelector('.promotext')
function promenitext() {
    textporuka.textContent = poruke[i]
    i++

    if(i === poruke.length) {
        i = 0
    }
}
promenitext()
window.setInterval(promenitext,6000)


let slikazapromeni = document.querySelector('.slider1')
let strelicadesno = document.querySelector('.strelicadesno')
let strelicalevo = document.querySelector('.strelicalevo')
let a = 3;






function promeninadesno() {
    if (a< 4) {
        a++
    }
    else {
      a = 0
    }
}


function promeninalevi() {
    if (a> 0) {
        a--
    }
    else {
      a = 4
    }
}



let nizslika =['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg']


function promenisliku() {
   
    slikazapromeni.classList.add('appear')

    setTimeout(function() {
        slikazapromeni.src = nizslika[a]
        slikazapromeni.classList.add('oppacity')
       
 
    }, 1000)
   
    
    
   
}

strelicalevo.addEventListener('click', function() {
   
    promeninadesno()
   
    promenisliku()
    console.log(a)
})
strelicadesno.addEventListener('click', function() {
    promeninalevi()
    promenisliku()
    console.log(a)
})




