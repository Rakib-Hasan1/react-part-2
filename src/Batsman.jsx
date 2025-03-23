import { useState } from "react"

export default function Batsman () {
    const [runs, setRuns] = useState(0);
    const [four, setFour] = useState(0);
    const [sixes, setSixes] = useState(0);

    const singleRuns = () => {
        const newRuns = runs + 1;
        setRuns(newRuns);
    }

    const fourRuns = () => {
        const newRuns = runs + 4;
        const updatedFour = four + 1;
        setFour(updatedFour);
        setRuns(newRuns);
    }

    const sixRuns = () => {
        const newRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(newRuns);
    }


    return(
        <div>
            <h2>Batsman Tamim Iqbal </h2>
            <p><small>Four : {four}</small></p>
            <p><small>Sixes : {sixes}</small></p>
            {
                runs > 50 && <p>You make half century</p>
                
            }
            <h3>Runs : {runs}</h3>
            <button onClick={singleRuns}>Single Run</button>
            <button onClick={fourRuns}>Four</button>
            <button onClick={sixRuns}>Six</button>
        </div>
    )
}