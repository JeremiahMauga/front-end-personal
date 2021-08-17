const BASE_URL = 'http://localhost:8000/'

const login = (userObject) => {
  return fetch(BASE_URL + 'token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

const getLoggedInUser = (token) => {
  return fetch(BASE_URL + 'core/current_user/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => res)
};

const signupUser = (userObject) => {
  return fetch(BASE_URL + 'core/users/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObject)
  }).then(res => res)
};

// const getInventoryByID = async (inventoryID, token) => {
//   const response = await fetch(`http://localhost:8000/inventorys/${inventoryID}/`, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `JWT ${token}`
//       }
//   })
//   const data = await response.json();
//   return data
// }

// const editInventory = async (editedInventory, token) => {
//   const response = await fetch(`http://localhost:8000/inventorys/${editedInventory.id}/`, {
//       method: 'PUT',
//       headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `JWT ${token}`
//       },
//       body: JSON.stringify(editedInventory)
//   })
//   const data = await response.json();
//   return data;
// }


export { login, getLoggedInUser, signupUser}