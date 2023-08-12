let individualNum = 0;

const changeBtn = document.getElementById("userChange");
const picItem = document.getElementById("pic");
const nameItem = document.getElementById("name");
const genderItem = document.getElementById("gender");
const dobItem = document.getElementById("dob"); 
const addressItem = document.getElementById("address");
const phoneItem = document.getElementById("phone");
const emailItem = document.getElementById("email");

console.log(data);

function changeIndividual() {//Name 
    let personTitle = data.results[individualNum].name.title;
    let personFirstName = data.results[individualNum].name.first;
    let personLastName = data.results[individualNum].name.last;
    nameItem.innerHTML = `Name: ${personTitle} ${personFirstName} ${personLastName}`
    
    //DOB & Gender
    let personGender = data.results[individualNum].gender;
    let personDOB = data.results[individualNum].dob.date.substring(0,10);
    genderItem.innerHTML = `Gender: ${personGender}`;
    dobItem.innerHTML = `DOB: ${personDOB}`;
    
    //Address
    let personStreetNum = data.results[individualNum].location.street.number;
    let personStreetName = data.results[individualNum].location.street.name;
    let personCity = data.results[individualNum].location.city;
    let personCountry = data.results[individualNum].location.country;
    let personZip = data.results[individualNum].location.postcode;
    addressItem.innerHTML = `Address: ${personStreetNum} ${personStreetName}, ${personCity}, ${personCountry} ${personZip}`
    
    //Phone 
    let personPhone = data.results[individualNum].phone;
    phoneItem.innerHTML = `Phone: ${personPhone}`;
    
    //Email
    let personEmail = data.results[individualNum].email;
    emailItem.innerHTML = `Email: ${personEmail}`;
    
    //Picture
    let personPicture = data.results[individualNum].picture.large;
    picItem.innerHTML = `<img src = ${personPicture}>`
}

changeBtn.addEventListener("click", event => {
    event.preventDefault();
    individualNum += 1;
    if (individualNum == data.results.length){
        individualNum = 0;
    }
    changeIndividual();

})
changeIndividual();