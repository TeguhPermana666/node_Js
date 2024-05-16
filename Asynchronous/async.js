// console.log("Selamat datang");

// setTimeout(() => {
//     console.log("Waiting");
// }, 3000);

// console.log("Terimakasih sudah datang");

function getUsers(isOffline,callback){
    setTimeout(() =>{
        const users = ["Teju", "Teguh", "Tika"];
        if (isOffline){
            callback(new Error('Offline'),null);
            return ;
        }
        callback(null, users);
    },3000)
}
function userCallback(error,users){
    if (error) {
        console.log('process failed:', error.message);
        return;
      }
    console.log('process success:', users);
}

getUsers(false,userCallback);
getUsers(true,userCallback);