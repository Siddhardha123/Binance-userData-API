import axios from 'axios'


const baseUrl = "https://api.binance.com"

const ping = (req,res) => {
    try{
        axios.get(baseUrl+'/api/v3/ping')
        .then((response)=>{
          console.log(response)
          res.sendStatus(response.status)
     })
    }catch(err){
        console.log(err)
    }
    
}

const systemStatus = (req,res) => {
    try{
        axios.get(baseUrl+'/sapi/v1/system/status')
        .then((response)=>{
          console.log(response.data)
          res.send(response.data)
     })
    }catch(err){
        console.log(err)
    }
    
}
 
const getAllCoins = (req,res) => {
    try{
        axios.get(baseUrl+'/sapi/v1/capital/config/getall')
        .then((response)=>{
          console.log(response.data)
          res.send(response.data)
     })
    }catch(err){
        console.log(err)
    }
    
}

export default {
   ping,
   systemStatus,
   getAllCoins,
}
