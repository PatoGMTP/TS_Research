


// Ok Use of Union 
let unions: (string | number | boolean);
    unions = 10161990; 
    unions = "ABC"; 
    unions = false; 

// console.log(unions)

// Not ok to use union 
let notUnion: (number| string );
    notUnion = 'Team Name ';
    notUnion = true ;  // Compiler Error since the type isn't defined
    notUnion = 12/2/2021 

