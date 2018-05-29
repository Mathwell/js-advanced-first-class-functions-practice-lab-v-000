// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers,hometown){
   drivers.forEach(function(driver){
     if (driver.hometown===hometown) {console.log(driver.name)}
   })
}

function driversByRevenue(drivers){
 newDrivers=drivers.sort(function(a,b){
   a.revenue-b.revenue
 })
 return newDrivers
}

function driversByName(){

}

function totalRevenue(){

}

function averageRevenue(){

}
