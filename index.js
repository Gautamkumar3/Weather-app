
async function getData(){
     let city=document.getElementById("city").value;

 
    
    weatherData(city)

     
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33a40d7ed77450a433427ce18d328c63`


   try{

      let res=await fetch(url)

       let data=await res.json();

       showData(data)

       console.log(data)

   }catch(er){
       console.log(er)
   }
   

}

function showData(data){

    document.getElementById("today").innerText=Math.floor(Number(data.main.temp)-273)+"°C"
    document.getElementById("max").innerText=Math.floor(Number(data.main.temp)-270)+"°C"
    document.getElementById("min").innerText=Math.floor(Number(data.main.temp)-279)+"°C"
    document.getElementById("hum").innerText=data.main.humidity;
    document.getElementById("wind").innerText=data.wind.speed;
    document.getElementById("gautam").innerText=data.visibility;
    document.getElementById("desc").innerText=data.weather[0].description;
    document.getElementById("pre").innerText=data.main.pressure;
    document.getElementById("name").innerText=data.name;

    let iframe =document.getElementById("gmap_canvas");
    iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=17&ie=UTF8&iwloc=&output=embed`
}




     

async function weatherData(city){

    let url1=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=6&appid=33a40d7ed77450a433427ce18d328c63`

let res=await fetch(url1)

let data=await res.json();


  sevenDaysData(data.list)
}



function sevenDaysData(data){

    document.querySelector(".temp1").innerHTML=""
    document.querySelector(".temp2").innerHTML=""
    document.querySelector(".temp3").innerHTML=""
    document.querySelector(".temp4").innerHTML=""
    document.querySelector(".temp5").innerHTML=""
    document.querySelector(".temp6").innerHTML=""

     
        let max=document.createElement("p")
        max.innerText=Math.floor(Number(data[0].main.temp_max)-273)+"°C";
        let min=document.createElement("p")
        min.innerText=Math.floor(Number(data[0].main.temp_min)-276)+"°C";
        document.querySelector(".temp1").append(max,min)
        
        let max2=document.createElement("p")
        max2.innerText=Math.floor(Number(data[1].main.temp_max)-273)+"°C";
        let min2=document.createElement("p")
        min2.innerText=Math.floor(Number(data[1].main.temp_min)-276)+"°C";
        document.querySelector(".temp2").append(max2,min2)

        let max3=document.createElement("p")
        max3.innerText=Math.floor(Number(data[2].main.temp_max)-273)+"°C";
        let min3=document.createElement("p")
        min3.innerText=Math.floor(Number(data[2].main.temp_min)-276)+"°C";
        document.querySelector(".temp3").append(max3,min3)


        let max4=document.createElement("p")
        max4.innerText=Math.floor(Number(data[3].main.temp_max)-273)+"°C";
        let min4=document.createElement("p")
        min4.innerText=Math.floor(Number(data[3].main.temp_min)-276)+"°C";
        document.querySelector(".temp4").append(max4,min4)

        let max5=document.createElement("p")
        max5.innerText=Math.floor(Number(data[4].main.temp_max)-273)+"°C";
        let min5=document.createElement("p")
        min5.innerText=Math.floor(Number(data[4].main.temp_min)-276)+"°C";
        document.querySelector(".temp5").append(max5,min5)

        let max6=document.createElement("p")
        max6.innerText=Math.floor(Number(data[5].main.temp_max)-273)+"°C";
        let min6=document.createElement("p")
        min6.innerText=Math.floor(Number(data[5].main.temp_min)-276)+"°C";
        document.querySelector(".temp6").append(max6,min6)
     




}