const response = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let basketballteams = {
 'phoenix suns':{

    'players': 15,
    'Name 1': 'fdsfsd',
    'Name 2': 'sfdfs'
 },
 'golden state warriors':{
    'players': 16 ,
    'Name 1': 'fhdfgdf',
    'Name 2': 'sfdfs'
 },
 'unknown':{
    'players': 'unknown',
    'Name 1': 'unknown',
    'Name 2': 'unknown'
 },
 'new york knicks':{
     'players': 18,
     'Name 1':'Barrett, RJ',
     'Name 2': 'Burks, Alec'
 }
}
app.get('/',(request,response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/basketballteams/:teamNames',(request,response)=> {
    const teamNames = request.params.teamNames.toLowerCase()
    console.log(teamNames)
    if(basketballteams[teamNames]){
        response.json(basketballteams[teamNames])
    }else{
        response.json(basketballteams['unknown'])
    }
   
})

app.listen(process.env.PORT || PORT, () =>{
console.log(`Server running on port ${PORT}`)

})