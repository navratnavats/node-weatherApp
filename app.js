const request=require("request")
const weather=require("./weather_finder")

const address=process.argv[2]
if(!address){
    console.log("Please provide name of city,state or country to search");
}
else{
    weather(address, (error,{name,region,country,temperature,feelslike,weather_description,lati,longi}={})=>{
        if(error===undefined)
        {
            console.log(name+" ,"+region+ ", "+country);
            console.log("Temperature is : "+temperature);
            console.log("Feels Like :"+feelslike);
            console.log("Weather Description: "+weather_description);
            console.log("Latitude "+lati);
            console.log("Longitude "+longi);
            console.log();
            
        }
        else{
            console.log(error);
        }
    })
}

