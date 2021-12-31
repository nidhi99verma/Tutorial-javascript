//fetch return promiss
fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        // console.log(response);
        // console.log(response.json());
        return response.json();
    })
    .then((data) => {
        console.log(data.value);
    })
    .catch((e) => {
        console.log(e);
    });


//run in browser console


// try{
// }catch (error){
//     console.log(error);
// }