const reviews = [
    {
        id: 1,
        name: "John Doe",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeozodwD_Y-F1niWcZeSySs2Zgl7J6yihHdw&usqp=CAU",
        role: "Senior Web Developer",
        Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora non rerum commodi. Modi, quas eaque blanditiis at necessitatibus ipsa perspiciatis debitis, explicabo minus adipisci fuga quam accusantium inventore ducimus itaque!"
    },
    {
        id: 2,
        name: "John Messam",
        img: "https://i.pinimg.com/originals/de/33/2e/de332efb9f68a7f7f72fcfbe20469fba.jpg",
        role: "Full Stack Developer",
        Description: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
    },
    {
        id: 3,
        name: "Ketty Jones",
        img: "https://i.pinimg.com/736x/0d/a7/6c/0da76cdeb84fbb2efe29857bdee92585.jpg",
        role: "Andriod Developer",
        Description: "El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo"
    },
    {
        id: 4,
        name: "Smith Tesla",
        img: "https://lh3.googleusercontent.com/proxy/n-t-F9nj-jqCCucQXuqE90Iq9pAzq3TZiCPN9NeocHueAWeXkyzv5hQtTAHBcOIO5pQOLi-LEVEJVJ1pqafKj_tkTMCRP64",
        role: "IOS Developer",
        Description: "textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto"
    },
    {
        id: 5,
        name: "Walter Jacob",
        img: "https://i.pinimg.com/564x/16/bf/35/16bf35f4b5c8461c60964e4ef5b379ae.jpg",
        role: "Data Engineer",
        Description: "\"Lorem Ipsum \" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han"
    }
];

var img = document.getElementById('img');
var title = document.getElementById('title');
var desc = document.getElementById('desc');
var nme = document.getElementById('name');
var left = document.getElementById('left');
var right = document.getElementById('right');
var count = 0;
var number;

left.addEventListener('click',()=>{
    count++;
    number = count % 4;
    number = Math.abs(Math.floor(number));
    
    //img.src = reviews[count].img;
    desc.textContent = reviews[number].Description;
    title.textContent = reviews[number].title;
    nme.textContent = reviews[number].name;
    title.textContent = reviews[number].role;
});

right.addEventListener('click',()=>{
    
    count--;
    number = count % 4;
    number = Math.abs(Math.floor(number));

    //img.src = reviews[count].img;
    desc.textContent = reviews[number].Description;
    title.textContent = reviews[number].title;
    nme.textContent = reviews[number].name;
    title.textContent = reviews[number].role;
});

window.addEventListener('load', ()=>{
    console.log("Fuck All languages");
})

















