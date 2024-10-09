import React from "react";
import Logo from '../assets/task2_images/anime.png';
import Hamberger from '../assets/task2_images/Hamburger menu.png';
export const Header =()=>{
    
    const internalCss = {
        ullist : {
            display:'flex',
            alignItems:'center',
            justifyContent:'end',
            listStyleType:'none',
            fontSize:'1.5rem',
            color:'red',
        },

    }
    
    return(
        <>
        <div className="center wh">
            <div className="headlo">
                <div className="logo"><img style={{width:'100%', height:'100%'}} src={Logo} alt="" /></div>
                <div className="subparts1 center">
                    <ul className="ullist">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div style={{width:'fit-content',height:'50px',display:'flex',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                <div className="hamberger" ><img style={{width:"100%",height:'100%'}} src={Hamberger} alt="" /></div>
                    <button className="button1" >SignIn</button>
                </div>
            </div>
        </div>
        </>
    )
}






{/* <div className='foradd' onClick={() => Add(value.id)}>
{!value.added ? <p>➕</p> : <p>➖</p>}</div> */}