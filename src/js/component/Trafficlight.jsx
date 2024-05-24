import React, {useState, useEffect} from "react";


const Trafficlight = () => {

    const [selected, setSelected] = useState ("red")
    const [active, setActive] = useState("false")

    const changecolor = (color) => {
        setSelected(color)
    }

    useEffect (() => {
        if (active) { 
            const interval = setInterval( () => {
                if (selected == "red"){
                    setSelected("yellow")
                } else if (selected == "yellow"){
                    setSelected("green")
                } else if (selected == "green"){
                    setSelected("red")
                }
            }, 3000)
            return () => clearInterval(interval)
        }
    }, [active, selected])

	return (
		<main>
            <div className="p-box"></div>
            <div className="box-light">
                <div className={`red ${selected == "red" ? "light-on" : "" }`}
                onClick={() => changecolor ("red")}
                ></div>
                <div className={`yellow ${selected == "yellow" ? "light-on" : "" }`}
                onClick={() => changecolor ("yellow")}
                ></div>
                <div className={`green ${selected == "green" ? "light-on" : "" }`}
                onClick={() => changecolor ("green")}
                ></div>
            </div>
            <div className="d-flex justify-content-center m-3">
            <button className="btn btn-success rounded-pill border border-3 border-warning" onClick={() => setActive(!active)}><b>Stop / Start</b></button>
            </div>
        </main>
	);
};

export default Trafficlight;