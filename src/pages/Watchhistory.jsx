import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Watchhistory() {
  
  const [history, setHistory] = useState([]);

  const getHistory=async()=>{
    const result=await getHistoryAPI()
   // console.log(result);
   if(result.status==200){
    setHistory(result.data);
   }
   else{
    console.log("API failed");
    setHistory([])
   }
    
  }

const removeHistory = async (id) => {
    await deleteHistoryAPI(id);
}
  useEffect(()=>{
    getHistory();
  },[])
  
  
  
  
  return (
    <div>
      <div className="container d-flex justify-content-between mt-5">
        <h1 className="text-info">Watch-History</h1>
        <Link to={'/home'} style={{textDecoration:'none',color:'blueviolet',fontSize:'30px'}}>Back to Home<i class="fa-solid fa-rotate-left fa-spin fa-spin-reverse"></i></Link>
        
      </div>
      <table className='container shadow'>
        <thead>
          <tr>
            <th>#</th>
            <th>Video Title</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history?.length>0?history.map((video,index)=>(
              <tr>
            <td>1</td>
            <td>title</td>
            <td><a href="https://www.youtube.com/watch?v=C0BMx-qxsP4">https://www.youtube.com/watch?v=C0BMx-qxsP4</a></td>
            <td>10/04/2025, 12:12:13 PM</td>
            <td><button className='btn btn-link' onClick={e=>(removeHistory(video?.id))}><i class="fa-solid fa-trash fa-bounce fa-lg"></i></button></td>
          </tr>

            )):<p className='text-danger fw-bolder'>Nothing To Display</p>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Watchhistory