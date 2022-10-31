//navigation button click event
const sectBtns=document.querySelectorAll('.control');
const mainContent=document.querySelector('.main-content');
const secBtns=document.querySelectorAll('.controls');
const sections=document.querySelectorAll('.section')

function pageNavigation(){
    //navigation button
    for(let i=0; i<sectBtns.length; i++){
        sectBtns[i].addEventListener('click',function(){
            let currentbtn=document.querySelectorAll('.active-btn');
            currentbtn[0].className=currentbtn[0].className.replace('active-btn','');
            this.className +=' active-btn';
        })
    }
    //sections display upon button click
    // mainContent.addEventListener('click',(e)=>{
    //     const id=e.target.dataset.id;
    //           sections.forEach(section=>{
    //         section.classList.remove('active');
    //         if(id===section.id){
    //             section.classList.add('active')   
    //     }     
    //     })
    //    })
    mainContent.addEventListener('click',(e)=>{
        const id=e.target.dataset.id;
        if(id){
            sections.forEach(section=>{
                section.classList.remove('active');
                 })
                 const element=document.getElementById(id);
                 element.classList.add('active');
        }
             
       })
    
}
pageNavigation();

//Contact form validation
const myForm=document.querySelector('form');
const nameInput=document.querySelector('.name').value;
const subject=document.querySelector('.subject').value;
const myMessage=document.querySelector('.message').value;

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(!(isNaN(nameInput)) && nameInput.length<3){

    }
})

