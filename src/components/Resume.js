import React from 'react';
import data from '../data/data.json';
import profileIcon from '../img/img1.jpg';
import {Link} from 'react-router-dom';


export default function Resume(props) {
        fetch('https://raw.githubusercontent.com/satyasaithi/json/master/data.json')
        .then(response=>response.json())
        .then(data=>console.log(data))

        let info=data.profile[props.location.data.id] 
        console.log(info.career)
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
            <div className="col-lg-3 m-2">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <img src={profileIcon} alt="profile Icon" style={{width:"70%"}}/>
                        <h2>{info.basics.name}</h2>
                        <h4 className="text-secondary">{info.basics.role}</h4>
                        <a href={"tel:"+info.basics.phone}>
                            <h5 className="text-secondary">{info.basics.phone}</h5>
                        </a>
              <a href={"mailto:"+info.basics.email}>
                <h6 className="text-secondary">{info.basics.email}</h6>
              </a>
                    </div>
                </div>
            </div>



            <div className="col-lg-4 m-2">
                <div className="card shadow">
                    <div className="card-body">
                        <h2>About:</h2>
                        <hr />
                        <h5>{info.career}</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}