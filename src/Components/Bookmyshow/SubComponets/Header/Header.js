import Coursel from "../Coursel/Coursel";

import Header2 from "../Header2/Header2";
import LifeEvents from "../sub/LifeEvents";
import Premier from "../sub/Premier";
import Recomended from "../sub/Recomended";
import Stream from "../sub/Stream";
import Streaming from "../sub/Streaming";

import { useEffect, useState } from "react"
import './Header.css'
import Header1 from "../Header1/Header1";

function Header() {
    const [recImg, setImg] = useState([])
    const [lifeEvents, setEvents] = useState([])
    const [premier, setPremier] = useState([])
    const [streaming, setStreaming] = useState([])
    useEffect(() => {
        fetch("./recomMovies.json")
            .then((res) => res.json())
            .then((res) => {
                setImg(res);

            })
        fetch("./lifeEvents.json")
            .then((res) => res.json())
            .then((res) => {
                setEvents(res);


            })
        fetch("./premier.json")
            .then((res) => res.json())
            .then((res) => {
                setPremier(res);


            })
        fetch("./Streaming.json")
            .then((res) => res.json())
            .then((res) => {
                setStreaming(res);


            })
    }, [])
    return (
        <div>
            <Header1 />
            <Header2 />
            <Coursel />
            <div className="header">
                <div className="row">
                    <h2> Recomended Movies</h2>

                    {recImg.map((el, index) => {
                        return <div className="col-3" id={index}>  <Recomended item={el} /></div>
                    })}
                    <Stream />
                    <div className="row">
                        <h3> The Best Of Life Events</h3>
                        {lifeEvents.map((el) => {
                            return <div className="col-3"> <LifeEvents item={el} />  </div>
                        })
                        }

                    </div>

                </div>
                <div className="premier">
                    <div> <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="" /></div>
                    <div className="text"> <h3> Premier</h3> <p> Brand new release every Friday</p> </div>
                    <div className="row">
                        {premier.map((el) => {
                            return <div className="col-3"> <Premier item={el} /> </div>
                        })}
                    </div>
                </div>
                <div className="Streaming row">
                    <h3> Online Streaming Events</h3>
                    {streaming.map((el) => {
                        return <div className="col-2"> <Streaming item={el} />  </div>
                    })}


                </div>
            </div>

        </div>




    )
}
export default Header