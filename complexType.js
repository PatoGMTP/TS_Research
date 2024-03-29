export function complexType(terminal) {
    let topic2 = document.getElementById('topic2');
    let image2 = document.getElementById('image2');
    topic2.addEventListener('click', (event) => {
        event.preventDefault();
        let image1 = document.getElementById('image1');
        let image2 = document.getElementById('image2');
        let image3 = document.getElementById('image3');
        // console.log("here")
        let text_area = document.getElementById('text');
        // let code =document.createElement('code')
        text_area.innerHTML = `- TypeScript Type for One-dimensional Array &#13;&#10; -TypeScript Generic Type for One-Dimensional Array &#13;&#10; -TypeScript Empty Array Initialization &#13;&#10; -TypeScript Tuple Type `;
        image1.src = 'images/ObjTypeCT.png';
        image2.src = 'images/complexType1.png';
        image3.src = 'images/complexType2.png';
        var slideIndex = 0;
        showSlides();
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 8000); // Change image every 2 seconds
        }
        terminal.arr.length = 0;
        terminal.arr.push(`
  Topic: Complex Types
  //  --------- One dimentional array  ---------
  // zipcodes is an array of strings
  let zipcodes: string[] = ['77450', '77494', '77493', '77001'];
  
  // Pushing a number to zipcodes will generate an error
  // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
     console.log("One Dimentional array: \n");
     console.log(zipcodes)
     zipcodes.push('77027');
     console.log("One Dimentional array: \n");
     console.log(zipcodes)
      `);
        terminal.arr.push(`
      //  --------- Generic Type for One-Dimensional Array ---------
      let zipcodess: Array<string> = ['77450', '77494', '77493', '77001'];
      console.log("One Dimentional array: "+ zipcodess +'\n');
      zipcodes.push('77027');
      console.log("One Dimentional array: "+ zipcodess +'\n');
      `);
        terminal.arr.push(`
      //------------------Empty Array Initialization ------------------
      
      // --------- One-dimensional empty array ---------
      let axis: string[] = [];
      
      //  ---------Multi-dimensional empty array ---------
      let coordinates: number[][] = [];
      
      axis.push('x');
      console.log(axis);        // prints ["x"]
      
      coordinates.push([3, 5]);
      coordinates.push([7]);
      console.log(coordinates); // prints [[3, 5], [7]]
          `);
        terminal.text_area.value = terminal.arr[0];
    });
    topic2.dispatchEvent(new Event("click"));
    //  --------- One dimentional array  ---------
    // zipcodes is an array of strings
    let zipcodes = ['77450', '77494', '77493', '77001'];
    // Pushing a number to zipcodes will generate an error
    // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
    console.log("One Dimentional array: \n");
    console.log(zipcodes);
    zipcodes.push('77027');
    console.log("One Dimentional array: \n");
    console.log(zipcodes);
    //  --------- Generic Type for One-Dimensional Array ---------
    let zipcodess = ['77450', '77494', '77493', '77001'];
    console.log("One Dimentional array: " + zipcodess + '\n');
    zipcodes.push('77027');
    console.log("One Dimentional array: " + zipcodess + '\n');
    //------------------Empty Array Initialization ------------------
    // --------- One-dimensional empty array ---------
    let axis = [];
    //  ---------Multi-dimensional empty array ---------
    let coordinates = [];
    axis.push('x');
    console.log(axis); // prints ["x"]
    coordinates.push([3, 5]);
    coordinates.push([7]);
    console.log(coordinates); // prints [[3, 5], [7]]
    // ---------Tuple Type ---------
    // This is an array
    let header = ['Name', 'Age', 'Smoking', 'Salary'];
    // This is a tuple
    let profile = ['Kobe', 39, true, 150000];
    //  ---------TypeScript Enum Type ---------
    // enum MaritalStatus {
    //     Single,
    //     Married,
    //     Separated,
    //     Divorced
    //   };
    //   let employee: [string, MaritalStatus, number] = [
    //     'Bob Jones',
    //     MaritalStatus.Single,
    //     39
    //   ];
    // ---------TypeScript Enum Type Variable Assignment ---------
    let MaritalStatus;
    (function (MaritalStatus) {
        MaritalStatus["Single"] = "SINGLE";
        MaritalStatus["Married"] = "MARRIED";
        MaritalStatus["Separated"] = "SEPARATED";
        MaritalStatus["Divorced"] = "DIVORCED";
        MaritalStatus["Widowed"] = "WIDOWED";
    })(MaritalStatus || (MaritalStatus = {}));
    ;
    //  --------- Assign a string to a string enum type  ---------
    let eligibility;
    //   eligibility = 'SEPARATED';
    // Error: Type '"SEPARATED"' is not assignable to type 'MaritalStatus'.
    console.log(eligibility = MaritalStatus.Widowed); // No error
    // ---------TypeScript Object Type ---------
    // Define an object type for car
    let car;
    car = { make: 'Toyota', model: 'Camry', year: 2020 }; // No error
    // car = {make: 'Nissan', mode: 'Sentra', year: 2019};
    /*
    Error: Type '{make: string; mode: string; year: number;}' is not assignable to
    type '{make: string; model: string; year: number;}'.
    Object literal may only specify known properties, but 'mode' does not exist in
    type '{make: string; model: string; year: number;}'.
    Did you mean to write 'model'?
    */
    // car = {make: 'Chevrolet', model: 'Monte Carlo', year: '1995'};
    // Error: Type 'string' is not assignable to type 'number'."
}
