import axios from 'axios';

export const commonAPI=async(httpMethod,URL,reBody)=>{
    let reqConfig={
        method:httpMethod,
        url,
        headers:{
            'Content-Type':'application/json'

        },
        data:reBody
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}