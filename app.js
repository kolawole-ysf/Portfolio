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
const nameInput=document.querySelector('.name');
const emailInput=document.querySelector('.email');
const subject=document.querySelector('.subject');
const myMessage=document.querySelector('.message');

myForm.addEventListener('submit', formValidation);

function formValidation(e){
    e.preventDefault();
    if(!(isNaN(nameInput.value)) || nameInput.value.length<3 || nameInput.value===''){
        nameInput.classList.add('invalid');
        setTimeout(()=>{
            nameInput.classList.remove('invalid')
        },5000);
        console.log(nameInput.value);
        return false;
    }
    if(emailInput.value===''){
        emailInput.classList.add('invalid');
        setTimeout(()=>{
            emailInput.classList.remove('invalid')
        },5000);
        console.log(emailInput.value);
        return false;
    }
    if(!(isNaN(subject.value)) || subject.value.length<2 || subject.value===''){
        subject.classList.add('invalid');
        setTimeout(()=>{
            subject.classList.remove('invalid')
        },5000);
        console.log(subject.value);
        return false;
    }
    if(!(isNaN(myMessage.value)) || myMessage.value===''){
        nameInput.classList.add('invalid');
        setTimeout(()=>{
            myMessage.classList.remove('invalid')
        },5000);
        console.log(myMessage.value);
        return false;
    }
    let msg='';
        const alertMsg=document.querySelector('.alert');
        msg+=`
        <p>Thank you! ${nameInput.value} for contacting Bamstech. We will get back to you shortly </p>`
        alertMsg.innerHTML=msg;
        setTimeout(()=>{
        alertMsg.remove();
    },5000);

    nameInput.value='';
    emailInput.value='';
    subject.value='';
    myMessage.value='';
}
    


