import React, { useState } from 'react';
import './stylings1.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import naruto from '../assets/data images/naruto.jpeg';
import luffy from '../assets/data images/luffy.jpeg';
import asl from '../assets/data images/ASL.jpeg';
import d1 from '../assets/data images/d1.jpeg';
import kakashi from '../assets/data images/kakashi.jpeg';
import LS from '../assets/data images/luffy and shanks.jpeg';
import rengoku from '../assets/data images/rengoku.jpeg';
import sasuke from '../assets/data images/sasuke.jpeg';
import zenitsu from '../assets/data images/zenitsu.jpeg';
import tanziro from '../assets/data images/tanziro.jpeg';
import zoro from '../assets/data images/zoro.jpeg';
import itachi from '../assets/data images/itachi.jpeg';


export const Carousel = () => {

    const settings = {
        dots: false,
        Infinity: 'true',
        speed: '300',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    return (
        <>
            <div style={{ width: '90%', height: '90%' }}>
                <Slider {...settings}>
                    <div className='carousel_blocks'>
                        <div className='c1'>
                            <img src={naruto} alt="cracked" />
                        </div>
                    </div>
                    <div className='carousel_blocks'>
                        <div className='c1'  >
                            <img src={luffy} alt="cracked" />
                        </div>
                    </div>
                    <div className='carousel_blocks'>
                        <div className='c1'  >
                            <img src={asl} alt="cracked" />
                        </div>
                    </div>
                    <div className='carousel_blocks'>
                        <div className='c1'  >
                            <img src={zoro} alt="cracked" />
                        </div>
                    </div>
                    <div className='carousel_blocks'>
                        <div className='c1'  >
                            <img src={d1} alt="cracked" />
                        </div>
                    </div>
                    <div className='carousel_blocks'>
                        <div className='c1'  >
                            <img src={kakashi} alt="cracked" />
                        </div>
                    </div>
                    <div className='carousel_blocks'>
                        <div className='c1'  >
                            <img src={LS} alt="cracked" />
                        </div>
                    </div>
                    <div className='carousel_blocks'>
                        <div className='c1'  >
                            <img src={rengoku} alt="cracked" />
                        </div>
                    </div>
                    <div className='carousel_blocks'>
                        <div className='c1'  >
                            <img src={sasuke} alt="cracked" />
                        </div>
                    </div>
                    <div className='carousel_blocks'>
                        <div className='c1'  >
                            <img src={zenitsu} alt="cracked" />
                        </div>
                    </div>
                    <div className='carousel_blocks'>
                        <div className='c1'  >
                            <img src={tanziro} alt="cracked" />
                        </div>
                    </div>
                </Slider>
                {/* <Slider {...settings}>
                    <div className='carousel_blocks'>
                        <div className='c1'>
                        {
                            Data.map((value) => {
                                return(
                                    <>
                                    <img src={value.image} alt="cracked" />
                                    </>
                                )
                            })
                        }
                    </div>
                    </div>
                </Slider> */}
            </div>
        </>
    )
}

const Data = [
    {
        image: naruto,
        id: "A0001",
        name: "Naruto",
        from: "Naruto",
        price: 999,
        liked: false,
        added: false,

    },
    {
        image: luffy,
        id: "A0002",
        name: "Luffy",
        from: "One Piece",
        price: 1500,
        liked: false,
        added: false,
    },
    {
        image: itachi,
        id: "A0003",
        name: "Itachi",
        from: "Naruto",
        price: 1200,
        liked: false,
        added: false,
    },
    {
        image: sasuke,
        id: "A0013",
        name: "Sasuke",
        from: "Naruto",
        price: 1200,
        liked: false,
        added: false,
    },
    {
        image: zoro,
        id: "A0004",
        name: "Zoro",
        from: "One Piece",
        price: 800,
        liked: false,
        added: false,
    },
    {
        image: kakashi,
        id: "A0005",
        name: "Kakashi",
        from: "Naruto",
        price: 900,
        liked: false,
        added: false,
    },
    {
        image: asl,
        id: "A0006",
        name: "A S L",
        from: "One Piece",
        price: 1000,
        liked: false,
        added: false,
    },
    {
        image: LS,
        id: "A0007",
        name: "Shanks",
        from: "One Piece",
        price: 1000,
        liked: false,
        added: false,
    },
    {
        image: tanziro,
        id: "B0001",
        name: "Tanziro",
        from: "Demon Slayer",
        price: 1000,
        liked: false,
        added: false,
    },
    {
        image: d1,
        id: "B0002",
        name: "Giyu Tomioka",
        from: "Demon Slayer",
        price: 1000,
        liked: false,
        added: false,
    },
    {
        image: rengoku,
        id: "B0003",
        name: "Rengoku",
        from: "Demon Slayer",
        price: 1000,
        liked: false,
        added: false,
    },
    {
        image: zenitsu,
        id: "B0004",
        name: "Zenitsu",
        from: "Demon Slayer",
        price: 1000,
        liked: false,
        added: false,
    },
]

export const CardsBlock = () => {

    function searching (e) {
        console.log()
    }

    return (
        <>
            <div className='search'><input type="text" placeholder='Search Here' onChange={(e) => searching(e)} /> </div>
            <div className='mainblock'>
                <Cards />
            </div>
            <div className='cartblock'>
                <h1 style={{ textAlign: 'center' }}>CART</h1>
                <div className='cartblock'>
                    {/* {
                        cart.length > 0 ?
                            cart.map(ele => {
                                return (
                                    <>
                                        <Cards />
                                        <h1>hai hello</h1>
                                    </>
                                )
                            }) : "Nothing Here"
                    } */}
                </div>
            </div>
        </>
    )
}


export const Cards = () => {
    const [data, setdata] = useState(Data);
    const [cart, setcart] = useState([]);

    return (
        <>
                {
                    data.map((value , index) => {
                        function Like(id) {
                            const dummydata = [...data];
                            dummydata.map((dummyvalue) => {
                                if (dummyvalue.id == id) {
                                    value.liked = !value.liked;
                                    console.log('liked or disliked');
                                }
                            })
                            setdata(dummydata);
                        }

                        function Add(id) {
                            const dummydata = [...data];
                            dummydata.map((dummyvalue) => {
                                if (dummyvalue.id == id) {
                                    value.added = !value.added;
                                    console.log('added and removed');
                                }
                            })
                            setdata(dummydata);
                        }

                        return (
                            <>
                                <div className='oneblock' key={index}>
                                    <div className='eachimg' >
                                        <img src={value.image} alt="cracked" />
                                        <div className='forlike' onClick={() => Like(value.id)}>
                                            {value.liked ? <p>❤️</p> : <p>🤍</p>}</div>
                                    </div>
                                    <div className='textdata'>
                                        <p>Product Id : <span>{value.id}</span></p>
                                        <p>Name : <span>{value.name}</span></p>
                                        {/* <p>From : <span>{value.from}</span></p> */}
                                        <p>Price : <span>{value.price}</span></p>
                                        <div className='foradd' onClick={() => Add(value.id)}>
                                            {!value.added ? <p>➕</p> : <p>➖</p>}
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    })
                }
            
        </>
    )
}