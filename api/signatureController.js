import dotenv  from 'dotenv'
import crypto from 'crypto'
dotenv.config()

const apiSecret = process.env.SECRET_KEY ;

const signature = async (req,res) => {
    try{
       const time = Date.now()
        const query_string = `timestamp=${time}`;
        const hash =  crypto
        .createHmac('sha256',apiSecret)
        .update(query_string)
        .digest('hex');
        const data = {
            "signature" : hash,
            "UTC" : time,
        }
        res.send(data)

    }catch(error){
        console.log(error)
    }
    
}

export default signature