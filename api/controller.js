import axios from 'axios'
import dotenv  from 'dotenv'
dotenv.config()

const baseUrl = "https://api.binance.com"




const ping = (req,res) => {
    try{
        req.body.signature = signature(query_string)
        req.body.timestamp = query_string;
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
        console.log(err.data)
    }
    
}

const getAllTrades = (req,res) => {
    try{
        axios.get(baseUrl+'/api/v3/account')
        .then((response)=>{
          console.log(response.data)
          res.send(response.data)
     })
    }catch(err){
        console.log(err.data)
    }
    
}

export default {
   ping,
   systemStatus,
   getAllCoins,
   getAllTrades,
}
