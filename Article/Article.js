/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },

  {
    title: 'My article an stuff...',
    date: 'like Jan 15th, 2020',
    firstParagraph: `this this this this this this this this this this this this this this this this this
    this this this this this this this this this this this this this this this this this
    this this this this this this this this this this this this this this this this this
    this this this this this this this this this this this this this this this this this
    this this this this this this this this this this this this this this this this this`,

    secondParagraph: ` guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy 
    guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy 
    guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy 
    guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy 
    guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy guy `,

    thirdParagraph: `codes codes codes codes codes codes codes codes codes codes codes codes codes codes codes
    codes codes codes codes codes codes codes codes codes codes codes codes codes codes codes
    codes codes codes codes codes codes codes codes codes codes codes codes codes codes codes
    codes codes codes codes codes codes codes codes codes codes codes codes codes codes codes
    codes codes codes codes codes codes codes codes codes codes codes codes codes codes codes
    codes codes codes codes codes codes codes codes codes codes codes codes codes codes codes`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

let x =3
function createArticle(obj){

        let article = document.createElement("div")
        let h2 = document.createElement("h2")
        let p = document.createElement("p")
        let span = document.createElement("span")
        let spanRemove = document.createElement("span")
        h2.textContent= obj.title
        p.textContent= obj.date


        article.appendChild(h2)
        article.appendChild(p)
        article.innerHTML+=(`<p>${obj.firstParagraph}</p>`)
        article.innerHTML+=(`<p>${obj.secondParagraph}</p>`)
        article.innerHTML+=(`<p>${obj.thirdParagraph}</p>`)
        article.appendChild(span)
        article.appendChild(spanRemove)


        article.classList.add("article")
        h2.classList.add("date")
        span.classList.add("expandButton")
        spanRemove.classList.add("expandButton")

       
        span.innerHTML='&#128235;Click to Expand'
        spanRemove.innerHTML= '&#128233;new' 
        
        spanRemove.style=`
        position: absolute;
        bottom: 0;
        left: 65%;
        cursor: pointer;
        transform: translate(-50%);
        font-size:1.2rem;
        margin-bottom:-5px;
        border:double firebrick;
        background-color:green;
        -webkit-text-fill-color:azure;
        -webkit-text-fill-color:azure;
        `
        span.style=`
        font-size:1.5rem;
        margin-bottom:-5px;
        border:double firebrick;
        background-color:#444;
        -webkit-text-fill-color:azure;
        -webkit-text-fill-color:azure;
        
        `
        

      span.addEventListener("click", function(e){
        article.classList.toggle("article-open")
        
               
      if(x===3){
        span.innerHTML='<em>&#128236; click to Close</em>'//read this article
        article.style=`
        font-weight:bolder;
         `
       x=2
      }else{
        
        span.innerHTML='&#128235;Click to Expand'//didnt read article
        article.style=`
       background-color:tan;
        `
        spanRemove.innerHTML= '&#128209;read'
        spanRemove.style=`
        position: absolute;
        bottom: 0;
        left: 65%;
        cursor: pointer;
        transform: translate(-50%);
        font-size:1.2rem;
        margin-bottom:-5px;
        border:double green;
        background-color:firebrick;
        -webkit-text-fill-color:azure;
        -webkit-text-fill-color:azure;
        `
        spanRemove.addEventListener("click", function(e){
          e.target.parentNode.remove()
        })
        x=3
      }
      })

      


        return article
}


const artiz = document.querySelector(".articles")
data.forEach(comp=>{

  artiz.append(createArticle(comp))
})


//add worthy...try it
// menu$.append(createArticle({
//   title:'new jont',
//   date:'idk man...the 4th',
//   firstParagraph:'1st p',  
//   secondParagraph:'2nd p',  
//   thirdParagraph:'3rd p',
// }))

function theForm(){let artiForm = document.createElement("div")
artiForm.classList.add("formBox")

let form = document.createElement("form")
form.classList.add("form")

let caption = document.createElement("h3")  
let input1 = document.createElement("input")  
let input2 = document.createElement("input")  
let txtArea1 = document.createElement("textarea")
let txtArea2 = document.createElement("textarea")
let txtArea3 = document.createElement("textarea")

let form_btn = document.createElement("button")

artiForm.append(form)

form.appendChild(caption)
form.appendChild(input1)
form.appendChild(input2)
form.appendChild(txtArea1)
form.appendChild(txtArea2)
form.appendChild(txtArea3)
form.appendChild(form_btn)

artiForm.style=`
position:absolute;
width:100%;
display:flex;
height:100%;
justify-content:center;
align-items:center;
padding-bottom:10px;
`
form.style=`
flex:1;
display:flex;
width:350px;
flex-direction:column;
justify-content:space-between;
align-items:center;
grid-gap:10px;

`


caption.style=`
color:#fff;

`

input1.style=`
flex:1;
font-weight:bolder;
color:#fff;
background-color:rgba(0,0,0,0);
border:none;
border-left:dashed #000;
border-bottom:dashed #000;
padding:1%;
height:100px;
`
input2.style=`
flex:1;
font-weight:bolder;
color:#fff;
background-color:rgba(0,0,0,0);
border:none;
border-left:dashed #000;
border-bottom:dashed #000;
padding:1%;
height:100px;
`
txtArea1.style=`
flex:1;
font-weight:bolder;
color:#fff;
background-color:rgba(0,0,0,0);
border:dashed #000;
padding:1%;
height:200px;
`
txtArea2.style=`
flex:1;
font-weight:bolder;
color:#fff;
background-color:rgba(0,0,0,0);
border:dashed #000;
padding:1%;
height:200px;
`
txtArea3.style=`
flex:1;
font-weight:bolder;
color:#fff;
background-color:rgba(0,0,0,0);
border:dashed #000;
padding:1%;
height:200px;
`

form_btn.style=`
flex:1;
font-weight:bolder;
color:#fff;
background-color:rgba(0,0,0,0);
border:dashed #000;
padding:1%;
height:200px;
cursor:pointer;
`

let clientArticleCreator = (obj) =>{
  
}


form_btn.addEventListener("click",function(e){
  e.preventDefault()

  artiz.append(createArticle({
  title:input1.value,
  date:input2.value,
  firstParagraph:txtArea1.value, 
  secondParagraph:txtArea2.value,  
  thirdParagraph:txtArea3.value,
}))

input1.value=""
input2.value=""
txtArea1.value=""
txtArea2.value=""
txtArea3.value=""



})

caption.textContent='Add a Post'
input1.placeholder='"TITLE" goes here'
input2.placeholder='"DATE" goes here'
txtArea1.placeholder='"firstParagraph" goes here'
txtArea2.placeholder='"secondParagraph" goes here'
txtArea3.placeholder='"thirdParagraph" goes here'
form_btn.textContent='POST'

return artiForm

}


document.querySelector("body").appendChild(theForm())


