import {useEffect, useState} from "react";
import axios from "axios"
import "./table.css";

const Datatable=()=>
{

    const[temparr,settemparr]=useState([])

    const[inputdata,setInputdata]= useState({id:null,name:"",area:"",gender:""})

    const{id,name,area,gender}=inputdata;

    function data(event){
        setInputdata({...inputdata,[event.target.name]:event.target.value})
    }

    const jsonget=()=>
    {
        axios.get("http://localhost:3000/Employes")
        .then((response) => settemparr(response.data))
            .catch((err) =>console.log(err));
    }




    const validateform=()=>
    {
        if(id&&name&&area&&gender)
        {
            return true;
        }
        else
        {
            return false;
        }

    }




    const Datasubmitjson=(event)=>
    {
    
        const Samedata = temparr.find(
            repeat => repeat.id === id 
           );

        if(Samedata)
        {
           
          const confirm=window.confirm("Alredy enter this ID if you want replace data")
           console.log(confirm)
          if(confirm === true)
          {
            axios.post("http://localhost:3000/Employes",{id,name,area,gender})
           .then((response)=>
         {
          settemparr([...temparr,response.data])
          setInputdata({id:null,name:"",area:"",gender:""})
          jsonget();
          console.log(response)
          setform(false) 
         })
        .catch((error)=>console.log(error))
          }

          else if(confirm === false)
          {
            event.preventDefault();
            setInputdata({id:"",name:"",area:"",gender:""})
          }
        }

        if(!validateform())
        {
            event.preventDefault(); 
            alert("Please enter all data")   
        }
        else
        {
        if(inputdata.id)
        {
            jsonput(inputdata.id,inputdata)
        }

       
        axios.post("http://localhost:3000/Employes",{id,name,area,gender})
        .then((response)=>
        {
          settemparr([...temparr,response.data])
          setInputdata({id:null,name:"",area:"",gender:""})
          jsonget();
          console.log(response)
          setform(false) 
        })
        .catch((error)=>console.log(error))

    }


}

    const closebtn=()=>
    {
        setform(false)
        setInputdata({id:null,name:"",area:"",gender:""})
    }

    useEffect(()=>
    {
        axios.get("http://localhost:3000/Employes")
        .then((response) => settemparr(response.data))
            .catch((err) =>console.log(err));
    },[])


    const handledelete = (id)=>
    {
        const confirm=window.confirm("would like to delete the employee details?");
        if(confirm){
        axios.delete("http://localhost:3000/Employes/" +id)
        .then(()=>{
            const updatedtable=temparr.filter((ele)=>ele.id !== id);
            settemparr(updatedtable)
            setInputdata({id:null,name:"",area:"",gender:""})
            
        })
        .catch(err=>console.log(err));
        }

    }

    const edit=(ele)=>
    {
        setform(true)
        setInputdata(ele)
        
    }

    const jsonput=(id,updata)=>
    {
        axios.put("http://localhost:3000/Employes/"+id,updata)
        .then((response)=>{
            console.log(response)
            const updatedtable=temparr.map((ele)=>{
                if(ele.id === id)
                {
                    return{
                        ...ele,
                        ...updata,
                    };
                }
                return ele;
            });
            settemparr(updatedtable)
            setInputdata({id:null,name:"",area:"",gender:""})
        })
        .catch((error)=>{console.log(error)})
    }

    

    const Formstart=()=>
    {
        return(
            <>
            <div className="modalcontainer">
                <div className="model">             
                
                    <form>
                        <div className="formgroup">
                            <lable htmlFor="Id">ID </lable>
                            <input name="id" type="number" value={inputdata.id} autoComplete="off" onChange={data} />
                        </div>
                        <div className="formgroup">
                            <lable htmlFor="name">Name </lable>
                            <input name="name" type="text" value={inputdata.name} autoComplete="off" onChange={data} />
                        </div>
                        <div className="formgroup">
                            <lable htmlFor="area">Area </lable>
                            <input name="area" value={inputdata.area} autoComplete="off" onChange={data} />
                        </div>
                        <div className="formgroup">
                            <lable htmlFor="gender">Gender </lable>
                            <select name="gender" value={inputdata.gender} onChange={data} >
                                <option>-Select-</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                            </select>
                        </div>
                        <div className="formbtns">
                        <button type="submit" className="submitbtn" onClick={Datasubmitjson}>Submit</button>
                        <button className="submitbtn" onClick={closebtn}>close</button>
                        </div>
                    </form>
                </div>
            </div>
            </>
        )
    }





    const Tablecreate=()=>
    {
        return(
        <>
        
        <div className="tablestyle">
        <table className="tabletag">
            <thead className="tablethead">
                <tr>
                    <th className="tableth">ID</th>
                    <th className="tableth">Name</th>
                    <th className="tableth">Area</th>
                    <th className="tableth">Gender</th>
                    <th className="tableth">Actions</th>
                </tr>

            </thead>
            <tbody className="tablebody">

                {
                  temparr&&temparr.map((ele,ind) =>(
                <tr key={"mytbl"+ind}>
                    <td className="tabletd">{ele.id}</td>
                    <td className="tabletd">{ele.name}</td>
                    <td className="tabletd">{ele.area}</td>
                    <td className="tabletd">{ele.gender}</td>
                    <td className="tabletd">
                        <button className="actionbtnedit"  onClick={()=>edit(ele)}>Edit
                        </button> <button className="actionbtndel" onClick={()=>handledelete(ele.id)}>Delete</button>
                    </td>
                </tr>
                ))
               }
            </tbody>
        </table>
        </div>
        

            </>
        )
    }



    const [formopne,setform]=useState(false)


    return(
        <>
        <div className="fulltable">
        {Tablecreate()}
        <button className="submitbtn" onClick={()=>setform(true)}>Add</button>
        {formopne && Formstart()}
        </div>
        </>
    )
}
export default Datatable;