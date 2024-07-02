var searchBtn = document.getElementsByClassName("search-btn")[0]



function getValue(){
    // console.log("clicked")
    const inputField = document.getElementsByClassName("enter")[0]
    const cityName = (inputField.value)
    // console.log(cityName);
    const baseUrl = "http://api.weatherapi.com/v1/"
    const apiKEY ="175611844b5b4523ac9125508240906"

    const api = baseUrl+"current.json?key="+apiKEY+"&q="+cityName
    // console.log(api)

    const apiRequestData ={
        method:"POST",
        // CORS header Examples for search
        headers: {
            "Content-Type": "application/jsons",  //json : java script object notation
            "Access-Control-Allow-Header":"*",
          },
    }

    const res = fetch(api,apiRequestData)
    res.then(res => res.json()).then(data=>{
        console.log(data);


        const condition = data.current.condition.text
        const icon = data.current.condition.icon
        const humidity = data.current.condition.humidity
        console.log(condition);
        console.log(icon);
        console.log(humidity);
    })
    // if promise rejects then catch the error.
    .catch(err =>{
        console.log(err)
    })

    // console.log(res);









    inputField.value=""

}






searchBtn.addEventListener("click",getValue)




// http://api.weatherapi.com/v1/current.json?key=175611844b5b4523ac9125508240906&q=hyderabad