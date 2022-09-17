const day = 'sunday'; 

switch(day){
    case "monday": 
    console.log("prepare my stuffs for the week");
        break;
    case "tuesday": 
    console.log("Study JS");
        break;
    case "wednesday": 
    console.log("Study database")
        break;
    case "thursday": 
    console.log("Study data science")
        break;
    case "friday": 
    console.log("Work")
        break;
    case "saturday": 
    console.log("Practice a little of programming")
        break;
    case "sunday": 
        console.log("Play video games and watch animes")    
}

//another examople of switch statement: 

const food = 2

switch(food){
    case 1: 
    console.log("caviar");
        break;
    case 2: 
    console.log("lobster");
        break;
    case 3: 
    console.log("Sushi")
        break; 
}

//the same example but with the if statement: 

if(food === 1){
    console.log("This is Caviar");
}else if(food === 2 || food === 3){
    console.log("This is Lobster")
    console.log("This is Sushi")
}