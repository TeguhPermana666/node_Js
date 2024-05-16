const {promisify} = require("util");
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
    if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
    callback(null, users);
   
    }, 3000);
  }
  
  const getPromisfy = promisify(getUsers);
  getPromisfy(false)
    .then(user => console.log(user))
    .catch(err => console.log(err.message));