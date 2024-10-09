import { Anarray } from './header';
import { useState } from 'react';
import './styling.css'
export const Main1body = () => {
    return (
        <>
            <div className="m1m1">
                <h2 style={{ fontSize: '3.2rem' }}>Unlimited movies, TV shows and more</h2>
                <p style={{ fontSize: '1.5rem' }}>Watch anywhere. Cancel anytime.</p>
                <p style={{ fontSize: '1.5rem' }}>Ready to watch? Enter your email to create or restart your membership.</p>
                <input style={{ padding: '10px 20px', fontSize: '1.6rem', width: '40%', marginRight: '10px', borderRadius: '10px', color: 'white', backgroundColor: 'rgba(40, 40, 40, 0.486)', border: "1px solid whitesmoke" }} type="text" placeholder="Email address" />
                <button style={{ padding: '10px 20px', fontSize: '1.6rem', borderRadius: '10px', backgroundColor: 'red', color: 'white ' }} >Get Started </button>
            </div>
        </>
    )
}

export const Extra1 = () => {

    const [activeIndex, setActiveIndex] = useState(null);

  const toggleShow = (index) => {
    // If the clicked FAQ is already active, close it; otherwise, open it
    setActiveIndex(activeIndex === index ? null : index);
  };
    // function visi() {
    //     const xy = document.getElementsByClassName("sub1")[0];
    //     const yx = document.getElementsByClassName("sub2")[0];

    //     yx.style = "display:block";

    // }
    // function visi() {
    //     const xy = document.getElementsByClassName("sub1")[1];
    //     const yx = document.getElementsByClassName("sub2")[1];
    //     yx.style = "display:block";

    // }

    return (
        <div className="main quest" >
            {Anarray.map((item, index) => (
                <div key={index} className="main" onClick={() => toggleShow(index)}>
                    <div className="sub1">
                        <div>{item.question} </div>
                        {/* <div>∨  ∧</div> */}
                    </div>
                    {activeIndex === index && ( 
                        <div className="sub2">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}