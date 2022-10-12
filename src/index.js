import React, { useEffect, useState } from "react";
import './Postview.css'


const Usestate1 = () => {


  const [data, useData1] = useState([])
  const date = new Date()

  const GetCovidData = async () => {
    const res = await fetch("http://localhost:3004/user");
    const actualData = await res.json();


    useData1(actualData)


  }
  useEffect(() => {
    GetCovidData()
  }, [])
  console.log(data[0])




  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="logo"><i className="fab fa-instagram-square"></i><span>InstaClone</span></div>
          <div className="camera"><i class="fas fa-camera"></i></div>
        </div>

        {

          data.map((curElem, ind) => {
            return (
              <>
                <div className="instacard">
                  <div id="header">
                    <div className="details">
                      <h1>{curElem.name}</h1>
                      <h2>{curElem.location}</h2>
                    </div>
                    <div className="poinsts">...</div>
                  </div>
                  <div id="image">
                    <img src={curElem.PostImage}></img>
                  </div>
                  <div id="actions">
                    <div className="like-comment">
                      <div className="like"><i class="far fa-heart" ></i></div>
                      <div className="like"><i class="far fa-comment-dots"></i></div>
                    </div>
                    <div className="date">{curElem.Date}</div>
                  </div>
                  <div className="likes">
                  <p><span>{curElem.likes}</span>likes</p>
                  </div>
                  <div id="likes">
                    <h1>{curElem.description}</h1>
                  </div>
                 
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Usestate1