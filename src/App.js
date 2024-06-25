import './App.css'
import { useState } from 'react';
function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]= useState('')

  const handleDelete = (id) => {
    const filteredToDos = toDos.filter((object) => object.id !== id);
    setToDos(filteredToDos);
  };
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>Chikku Todo</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Got your to-do list </h2>
      
      <h3 style={{color:'white'}}>Ready to tackle it! </h3>
     
    </div>
    
    <div className="input">
      < input  value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder=" Add item 🖋️..." />
      <input type="datetime-local" id="time-input"/>
      
      <i onClick={()=>setToDos([...toDos,{id:Date.now(), text: toDo,status:false}])} className="fas fa-plus"></i>
     </div>

    <div className="todos">
     {  toDos.map((object)=>{

    
    return(  <div className="todo">
        <div className="left">
          <input  onChange={(e)=>{
            console.log(e.target.checked)
            console.log(object);
            setToDos(toDos.filter(object2=>{
              if(object2.id===object.id){
                object2.status=e.target.checked
                
              }
              return object2
            }))
          }} value={object.status} type="checkbox" name="" id="" />
          <p>{object.text}</p>
          
        </div>

     
        <div className="right">
          <i className="fas fa-times"  onClick={() => handleDelete(object.id)}></i>
        </div>
      </div> 
    )
    } )  
    }

<div  className='finishtask'>
  <h1 style={{color:'green'}}>Finished tasks</h1>
{toDos.map((object)=>{
     
      if(object.status){
       
        return(
          <div   >
          
          <h2 style={{color:'gray'}}>{object.text}</h2>
          </div>
          
          
        )
       
       
        return null 
      }
    })}
     </div>

    </div>
  </div>
  );
}

export default App;
