import { useState } from "react";

export default function ALERT() {
    const [close, setclose] = useState(true)
    const handleclick = () => {setclose(false)}
    return (
    <>
    {close ?
    <div>
    <div className="popup">
        <div className="popup-h1"> <h1>Store.com</h1> </div>
        <div className="popup-h3"> <h3>Congratolation you buy it successfully</h3> </div>
        <div className="popup-btn"> <button onClick={handleclick}>Ok</button> </div>
    </div>
    </div>:""}
    </>
    );
}
