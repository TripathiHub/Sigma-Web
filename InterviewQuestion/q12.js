// The Token Manager: You are developing a user authentication system, and you need to 
// manage user authentication tokens. Implement a function named setAuthToken that takes 
// an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(authToken){
    let expiryTime  = Date.now + 60*60*1000;
    let dataOfToken = {
        token : authToken,
        expiry : expiryTime
    }
    localStorage.setItem("token",JSON.stringify(dataOfToken));
}
let token1 = "qw46S$dshgt7689";
setAuthToken(token1);