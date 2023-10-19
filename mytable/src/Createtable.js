// import "./Createtable.css"
// import{useEffect, useState} from 'react';


// const Createtable=()=>
// {


//     const[Namedata,Setnamedata]=useState(" ")

//     const[Birthdate,SetBirthdate]=useState(" ")

//     const[Maildata,setMaildata]=useState(" ")

//     const[Timestamp,settimesatmp]=useState(" ")

//     const[Mainarry,setMainarry]=useState([])

//     const [timedata, setTimedata] = useState(0);


    
          
//          useEffect(()=>{

//             const data =JSON.parse(localStorage.getItem("mainarry"));
           
//             setMainarry(data);
          
//            },[])

         
//           useEffect(()=>{
//             localStorage.setItem("mainarry", JSON.stringify(Mainarry));
//           },[Mainarry]) 
 
          


//     const nameEvent =(event)=>
//     {
//             Setnamedata((event.target.value).toLowerCase()
//             .split(' ')
//             .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(' '))
//     }

//     const dateEvent=(event)=>
//     {
//         var today = new Date();
//         var birthDate = new Date(event.target.value);  
//         var age_now = today.getFullYear() - birthDate.getFullYear();

//         setTimedata(JSON.stringify(today))

//         SetBirthdate(age_now)
//         console.log(timedata)
//     }

   
    

//     const mailEvent=(event)=>
//     {  
//       setMaildata(event.target.value);
//     }


    
    
        
          


//     const Submitdata=(event)=>
//     {

    

//         setMainarry([...Mainarry,{Name:Namedata,Age:Birthdate,Time:timedata,Email:Maildata}])
//         Setnamedata("")
//         SetBirthdate("")
//         setMaildata("")
//         settimesatmp("")

//     }

//     console.log(Mainarry)
    

//     const Formfile=()=>
//     {
//       return( <> 
//             <div>
//             <div>Name:</div>
//             <input type="name" name="Name" value={Namedata.Name} autoComplete="off" onChange={nameEvent} />
//             <div>Date of Birth:</div>
//             <input type="date" name="Date" value={Birthdate.date} autoComplete="off" onChange={dateEvent}/>
//             <div>Email:</div>
//             <input type="mail" name="Mail" value={Maildata.mail} autoComplete="off" onChange={mailEvent}/>
//             <br/>
//             <button className="SubBtn" onClick={Submitdata}>Submit</button>
//           </div>
//         </>
//       )
//     }


//     const Viewtable=()=>
//     {
        
        
//         return(
//             <>
//             <div className="tablehead">
//                 <div className="box">Name</div>
//                 <div className="box">Age</div>
//                 <div className="timebox">Timestamp</div>
//                 <div className="box">Email</div>
//             </div>
//             {Mainarry&&Mainarry.map((ele,ind)=>
//             {
//              return(
             
//              <div className="tablehead" key={"mykey"+ind}>
//                 <div className="box">{ele.Name}</div>
//                 <div className="box">{ele.Age}</div>
//                 <div className="timebox">{JSON.parse(ele.Time)}</div>
//                 <div className="box">{ele.Email}</div>
//             </div>
//              )
//             })

//             }
//             </>
//         )
//     }





//     return(
//         <>
//         <div className="Fullpage">
//         <div className="formclass">
//         {Formfile()}
//         </div>
//         <div className="tableclass">
//         {Viewtable()}
//         </div>
//         </div>
//         </>
//     )
// }
// export default Createtable;