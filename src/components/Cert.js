import React from 'react';
// import data from '../data/data.json';
// import profileIcon from '../img/img.jpg';
import {Link} from 'react-router-dom';


export default function Cert(props) {
        fetch('https://raw.githubusercontent.com/satyasaithi/json/master/data.json')
        .then(response=>response.json())
        .then(data=>console.log(data))

        // let info1=data.profile;
        // console.log(info1.career)
    return (
        <div className="navigation">
            
             <nav>
                <h1 className="brand">
                    <a href="/">HOME</a>
                    </h1>
                <ul>
                    <li><Link to={{pathname:'/career'}} className="inner">Career</Link></li>
                    <li><Link to={{pathname:'/education'}} className="inner">Education</Link></li>
                    <li><Link to={{pathname:'/tech'}} className="inner">Tech Skills</Link></li>
                    <li><Link to={{pathname:'/cert'}} className="inner">Certifications</Link></li>
                </ul>
            </nav>
         <div className="row justify-content-center">
            

            <div className="col-lg-8 m-2">
                <div className="card shadow new-right-side boxer-card">
                    <div className="card-body index-top">
                  <h2>Certifications:</h2>
                        <hr />
                        <br />
                        <br />
                        <br />
                        <ul>
                        <h6><li>AWS Cloud Practioner Certification from aws</li></h6>
                        <h6><li>AWS Certified Solution Architect Training Certification from Vinsys</li></h6>
                        <h6><li>Android Development using Android Studio from Apssdc</li></h6>
                        <h6><li>Web Development using React Js from Apssdc</li></h6>
                        <h6><li>AWS Cloud Training Certification from Apssdc</li></h6>
                        
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}