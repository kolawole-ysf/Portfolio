const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2bc8e36a21msh5562561682438c3p1ae5a5jsn9678eb0a4d8b',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', options)
	.then(response => response.json())
	.then(data => {
        let output='';
        data.forEach(element => {
            output+=`
                <h2>Exercise Name:${element.name}</h2>
                 <p>Exercise Demo:${element.instructions}</p>
         `;
            console.log(element.name)
        });
        document.querySelector('.output').innerHTML = output;
        })
	.catch(err => console.error(err));

// document.querySelector('.getApi').addEventListener('click',getExercise);

// function getExercise(){
//     fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', options)
// 	.then(response => response.json())
// 	.then(function(data){
//         let output='';
//         for(let i=0; i<=data.length; i++){
//         output+=`
//                 <h2>Exercise Name:${data[i].name}</h2>
//                 <p>Exercise Demo:${data[i].instructions}</p>
//         `;
//         document.querySelector('.output').innerHTML = output;
//         }
       
//     } 
//     )
// 	.catch(err => console.error(err));
// }


