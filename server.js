const response = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let basketballteams = {
 'phoenix suns':{

    'players': 16,
    'Name 1': 'Devin Booker',
    'Name 2': 'Mikal Bridges',
    'Name 3': 'Deandre Ayton',
    'Name 4': 'Chris Paul',
    'Name 5': 'JaVale McGee',
    'Name 6': 'Mikal Bridges',
    'Name 7': 'Jae Crowder',
    'Name 8': 'Cameron Johnson',
    'Name 9': 'Landry Shamet',
    'Name 10': 'Abdel Nader',
    'Name 11': 'Elfrid Payton',
    'Name 12': 'Cameron Payne',
    'Name 13': 'Jalen Smith',
    'Name 14': 'Frank Kaminsky',
    'Name 15': 'Dario Šarić',
    'Name 16': 'Ishmail Wainright'
 },
 'golden state warriors':{
    'players': 16 ,
    'Name 1': 'fhdfgdf',
    'Name 2': 'sfdfs'

 },
 'new york knicks':{
    'players': 18,
    'Name 1':'Barrett, RJ',
    'Name 2': 'Burks, Alec'
 },
 'unknown':'not a team'
 

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