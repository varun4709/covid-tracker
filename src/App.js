import React, { useEffect, useState } from "react";
//import ReactDOM from 'react-dom';

const Corona = () => {
   
    const [data,setData] = useState([]);

    const Update = async () => {
        try{
         const Response = await fetch ("https://api.covid19api.com/summary");
        const res = await Response.json();
          console.log(res.Countries[76].Date);
          console.log(res.Countries[76].NewConfirmed)
        setData(res.Countries[76]);
        }
        catch(error){
         console.log(error);
        }
          }
          useEffect(() => {
             Update();
          },[]) 
        
   
    const curdate = new Date(data.Date);
    const tim=
    curdate.toLocaleDateString();
    const dat =
  
 curdate.toLocaleTimeString(); 

    
        const sec ={
            width :'100%',
            height : '170vh'
        }
        const row ={
         marginTop :'5rem'
        }
        const row2 ={
            height :'60vh'
        }
     
    return(
        <>
        <section class="container-fluid bg-dark" style={sec}>  
        <h3 className="heading" >🔴 <span>Covid-19 Tracker </span> </h3>
         <div class="container  ">   
         <div style={row2}>  
          <div class="row" >
    
      <div class="col-lg-3 col-md-12 col-sm-12 bg-success"> 
      <h5>our <span>Country</span></h5>
      <h1 className="data">{data.Country} </h1>
      </div>
      <div class="col-lg-3 col-md-12 col-sm-12 bg-warning" >
          <h5>Total <span>Cases</span></h5>
      <h1 className="data">{data.TotalConfirmed} </h1>
      </div>
      <div class="col-lg-3 col-md-12 col-sm-12 bg-primary" >
          <h5>New <span>Cases</span></h5>
      <h1 className="data">{data.NewConfirmed} </h1>
      </div>
    </div>
    </div> 
   <br/> <br/>
    <div class="row mt-6" style={row} >
      <div class="col-lg-3 col-md-12 col-sm-12 bg-info" >
          <h5>Total <span>Deaths</span></h5>
      <h1 className="data">{data.TotalDeaths} </h1>
      </div>
      <div class="col-lg-3 col-md-12 col-sm-12 bg-danger" >
          <h5>Total <span>Recovered</span></h5>
      <h1 className="data">{data.TotalRecovered} </h1>
      </div>
      <div class="col-lg-3 col-md-12 col-sm-12 bg-secondary" >
          <h5>Last <span>Updated</span></h5>
      <h1 className="data1">{tim} <br/>{dat} </h1>
      </div>
    </div>
  </div>
 
  </section>
  <div className="detail">
  <h3 className="footer">  © 2021 . All rights reserved ,
  site designed and developed by   <a href="https://varun4709.github.io/" target=""> Varun Maletha</a> </h3>
  </div>
        </>
    )
};

export default Corona ;
