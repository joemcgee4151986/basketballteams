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
    'players': 17 ,
    'Player  1': 'Nemanja Bjelica',
    'Player  2': 'Chris Chiozza',
    'Player  3': 'Stephen Curry',
    'Player  4': 'Jeff Dowtin',
    'Player  5': 'Draymond Green',
    'Player  6': 'Andre Iguodala',
    'Player  7': 'Jonathan Kuminga ',
    'Player  8': 'Damion Lee',
    'Player  9': 'Kevon Looney ',
    'Player  10': 'Moses Moody',
    'Player  11': 'Gary Payton II ',
    'Player  12': 'Jordan Poole',
    'Player  13': 'Otto Porter Jr. ',
    'Player  14': 'Klay Thompson ',
    'Player  15': 'Juan Toscano-Anderson',
    'Player  16': 'Andrew Wiggins',
    'Player  17': 'James Wiseman'
 },
 'new york knicks':{
    'players': 18,
    'Player 1':'Barrett, RJ',
    'Player 2': 'Burks, Alec',
    'Player 3': 'Evan Fournier',
    'Player 4': 'Taj Gibson',
    'Player 5': 'Quentin Grimes',
    'Player 6': 'Kevin Knox II',
    'Player 7': 'Miles McBride',
    'Player 8': 'Nerlens Noel',
    'Player 9': 'Immanuel Quickley',
    'Player 10': 'Julius Randle',
    'Player 11': 'Mitchell Robinson',
    'Player 12': 'Derrick Rose',
    'Player 13': 'Luka Samanic',
    'Player 14': 'Wayne Selden',
    'Player 15': 'Jericho Sims',
    'Player 16': 'Obi Toppin',
    'player 17':'Luca Vildoza',
    'player 18': 'Kemba Walker'
 },
 'chicago bulls':{
     'players': 17,
     'Player 1': 'Lonzo Ball',
     'Player 2': 'Tony Bradley',
     'Player 3': 'Troy Brown Jr.',
     'Player 4': 'Alex Caruso',
     'Player 5': 'Tyler Cook',
     'Player 6': 'DeMar DeRozan',
     'Player 7': 'Ayo Dosunmu',
     'Player 8': 'Devon Dotson',
     'Player 9': 'Javonte Green',
     'Player 10': 'Alize Johnson',
     'Player 11': 'Derrick Jones Jr.',
     'Player 12': 'Zach LaVine',
     'Player 13': 'Marko Simonovic',
     'Player 14': 'Matt Thomas',
     'Player 15': 'Nikola Vucevic',
     'Player 16': 'Coby White',
     'Player 17': 'Patrick Williams'
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