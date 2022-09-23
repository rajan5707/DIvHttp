import axios from "axios";


// const instance = axios.create({
//   baseURL: `http://localhost:8097/api/v1/`
//    baseURL: `${process.env.REACT_APP_API_BASEURL}`
  
// });
//
console.log("PAGEURL :> ",window.location.href)

const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];

const builtip = 'http://' + ip + ":8080"
console.log("BUILT URL :", builtip)

//REACT_APP_API_BASEURL = "http://18.224.126.68:8080/"

  const instance = axios.create({
    
     baseURL: builtip
  //  baseURL: `${process.env.REACT_APP_API_BASEURL}`
  });


export default instance;


