// HTTP REQUESTS

// Fetch API

// CREATE - POST
// READ - GET
// UPDATE - PUT/PATCH
// DELETE - DELETE

const button = document.getElementById(`button`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);

// axios ------- requires installation of library which is "<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>" in the body of HTML


// read = URL => {
//   axios.get(URL)
//     .then((response) => {
//       output.innerHTML = JSON.stringify(response.data);
//     }).catch((err) => {
//       console.log(err);
//     })
// }
// create = URL => {
//     axios.post(URL, {
//         first_name: "Adam",
//         email : "abrown@gmail.com"
//     })
//       .then((response) => {
//         output.innerHTML = JSON.stringify(response.data);
//       }).catch((err) => {
//         console.log(err);
//       })
//   }

// //post to: https://reqres.in/api/users

// button.onclick = () => read(input.value);
// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
//Exercises: 
//1. GET request for 'List User'

// read = URL => {
//     axios.get(URL)
//       .then((response) => {
//         output.innerHTML = JSON.stringify(response.data);
//       }).catch((err) => {
//         console.log(err);
//       })
//   }

// button.onclick = () => read(input.value);

// search for:
// https://reqres.in/api/users?page=2

// --------------------------------------------

//2. GET request for 'Single User' with the id of 2
// https://reqres.in/api/users/2

// --------------------------------------------

//3. POST request for 'Create'
//https://reqres.in/api/users

// create = URL => {
//         axios.post(URL, {
//             name: "Morpheus",
//             job : "Leader"
//         })
//           .then((response) => {
//             output.innerHTML = JSON.stringify(response.data);
//           }).catch((err) => {
//             console.log(err);
//           })
//       }

// button.onclick = () => create(input.value);

// --------------------------------------------

//4. POST request for 'Register - Successful'
// https://reqres.in/api/register

// create = URL => {
//     axios.post(URL, {
//         email : "eve.holt@reqres.in",
//         password : "pistol"
//     })
//       .then((response) => {
//         output.innerHTML = JSON.stringify(response.data);
//       }).catch((err) => {
//         console.log(err);
//       })
//   }

// button.onclick = () => create(input.value);


//5. POST request for 'Login - Successful'
//https://reqres.in/api/login

create = URL => {
    axios.post(URL, {
        email : "eve.holt@reqres.in",
        password : "cityslicka"
    })
      .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }

button.onclick = () => create(input.value);