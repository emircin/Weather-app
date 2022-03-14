const submitButton = document.querySelector("button");
const msg = document.querySelector(".msg");
const cities = document.querySelector(".cities");
const input = document.querySelector("input")
const apiKey = "6fb06c736ef6f5796a7c4241906c36b2"
const liste = []


    

const getWeather = async function () {

    const result = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`)).json()
    const {name, sys:{country}, main:{temp} } = result
    const {description, icon} = result.weather[0]

    if (liste.includes(name)) {

        msg.innerHTML =  `<span style="color:#c3112d">${name}</span> bölgesini daha önce aradınız. Aşağıdaki listede bulabilirsiniz.`

        setTimeout(()=>{
            msg.innerText ="";
        },2000)
    }
    else
    {

    cities.innerHTML += `<ul class="city">
    <li class="city-name"> ${name}<sup> ${country}</sup></li>
    <li class="city-temp"> ${Math.floor(temp)}<sup>${"°C"}</sup></li> 
    <img class="city-icon" src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
    <figcaption> ${description} <figcaption>
    </ul>`

    liste.push(name);
    input.value = "";

}
};

submitButton.addEventListener("click", e=>{  

    e.preventDefault();
    getWeather();

});
