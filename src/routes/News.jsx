import React from "react"
import { Button,Box, Typography, Container, Card, Avatar } from '@mui/material';
import pic2 from './assets/IMG-20241118-WA0013.jpg'
import pic3 from './assets/IMG-20241118-WA0014.jpg'
import pic4 from './assets/IMG-20241118-WA0015.jpg'
import pic5 from './assets/IMG-20241118-WA0016.jpg'
import pic1 from './assets/IMG-20241118-WA0012.jpg'

const vids = [
    {
        id: 0,
        src: pic1,
        lik: "jobs junction kushirikiana na serikali kuwasaidia wafanyakazi"
    },
    {
        id: 1,
        src: pic2,
        lik: "Jobs junction kinara huduma kwa wateja na wwatumiaji"
    },
    {
        id: 2,
        src: pic3,
        lik: "jobs junction kuongea wafanyakazi kutanua wigo wa huduma zao"
    },
    {
        id: 3,
        src: pic5,
        lik: "jobs junction kushiriki katika kusaidia wanafunzi wanaosoma katika mazingira magumu"
    }
];


function New ({ne}) {
    return (
        <div className="flex sm:ml-4 items-center">
        <div className="sm:h-16 h-16 w-24 sm:w-24 bg-slate-800 rounded-md"></div>
        <div className="text-wrap w-2/3 ml-2 flex flex-col ">
        <p className=" sm:text-xs font-poppins font-medium text-sm my-auto">{ne.message}</p>
        <div className="flex pt-2 items-center"><Avatar src={pic2} sx={{height: '13px',width: '13px'}}/>
        <h1 className="text-xs font-poppins font-light text-gray-600 ml-1">{ne.author}</h1>
        </div>
  </div>
        </div>
    )
}

const Videos = ({vid}) => {
    return (
        <div className="flex flex-col px-4">
        <div className="bg-slate-800 h-48 w-full rounded-lg sm:h-36 sm:w-48"><img src={vid.src} className="w-full h-full rounded-lg"/></div>
        <div className="text-wrap sm:w-48">
        <p className=" sm:text-xs font-poppins mt-3">{vid.lik}</p>
        </div>
        </div>
    );
}

export default function News () {
    return (
        <div className="w-full h-dvh overflow-y-auto p-2 bg-slate-50 sm:p-6 ">
        <div className="flex sm:items-center sm:flex-row flex-col mt-8">
        <div className="sm:w-3/5 w-fit pr-2">
        <img src={pic2} className="w-full h-84 bg-black" />
        </div>
        <div className="sm:w-2/5 w-full flex flex-col py-4 space-y-4 sm:space-y-3">
        <h2 className="font-poppins font-bold">Our top articles. </h2>
        <New ne={{
            message: "jobs junction kushirikiana na serikali kuwasaidia wafanyakazi",
            author: "nassir masuke"
        }} />
        <New  ne={{
            message: "jobs junction kuongea wafanyakazi kutanua wigo wa huduma zao",
            author: "menard ngalima" }}/>
        <New  ne={{
            message: "Jobs junction kinara huduma kwa wateja na wwatumiaji",
            author: "snow white"}}/>
        <New  ne={{
            message: "jobs junction kuongea wafanyakazi kutanua wigo wa huduma zao",
            author: "snowden breaks"}}/>
        </div>
        </div>
        <div className="my-8">
            <h className=" sm:text-medium ml-4 font-poppins py-12 font-bold">From our youtube channel</h>
            <div className="flex flex-col sm:mx-auto sm:flex-row sm:space-x-2">
              {vids.map(vid => <Videos key={vid.id} vid={vid}/>)}                
            </div>

        </div>
        </div>
    );
}