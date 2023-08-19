import React, { useState } from 'react'

const Main = () => {
    const [wickets, setWickets] = useState(0)
    const [runs, setRuns] = useState(0)
    // const [balls, setBalls] = useState(0);
    // const [isDeclareClicked, setIsDeclareClicked] = useState(false);
    // const [runs, setRuns] = useState(0);
    // const [overs, setOvers] = useState(0);
    // const [totalBalls, setTotalBalls] = useState(0);
    // const [timelineForOver, setTimelineForOver] = useState([]);
    // const [currentInning, setCurrentInning] = useState(1);
    // const [Runs, setRunsArray] = useState([]);
    // const [winner, setWinner] = useState('');

    const count_wickets = () => {
        setWickets(wickets + 1)
    };
    const zeroButton = () => {
        setRuns(runs + 0)
    }
    const oneButton = () => {
        setRuns(runs + 1)
    }
    const twoButton = () => {
        setRuns(runs + 2)
    }
    const threeButton = () => {
        setRuns(runs + 3)
    }
    const fourButton = () => {
        setRuns(runs + 4)
    }
    const sixButton = () => {
        setRuns(runs + 6)
    }
    // const wideButton = () => {
    // }
    // const noBallButton = () => {
    //     setRuns(runs + 1)
    //     setIsDeclareClicked(true)

    // }
    return (
    <>
        <header>
        <div class="inner">
            <h1>Scoreboard</h1>
        </div>
        </header>
        <div class="inner">
            <div class="mid">
                <div id="top">
                    <div id="between">

                        <div class="runswicket">    {/* runs/wicket */}
                            <h1 id="runs">{runs}</h1> 
                            <h1>/</h1> 
                            <h1 id="wicket"> {wickets} </h1>
                        </div>

                        <div class="totalovers">        {/* overs.balls */} 
                            <h2 id="overs">0</h2> 
                            <h2>.</h2> 
                            <h2 id="balls">0</h2>
                            <p id="textOvers"></p>
                        </div>
                    </div>
                </div>

                <div id="bottom">
                    <div id="first">
                        <input 
                            type="button" 
                            value="Declare" 
                            id="declareButton"
                            // onClick={declareButton} 
                            />
                        <input 
                            type="button" 
                            value="Wicket" 
                            id="wicketButton"
                            onClick={count_wickets} 
                            />
                        <input 
                            type="button" 
                            value="Bye" 
                            id="byeButton"
                            // onClick={byeButton} 
                            />
                        <input 
                            type="button" 
                            value="Leg Bye" 
                            id="legByeButton"
                            // onClick={legByeButton} 
                            />
                    </div>

                    <div id="second">
                        <input 
                            type="button" 
                            value="3" 
                            id="threeButton"
                            onClick={threeButton} />
                        <input 
                            type="button" 
                            value="4" 
                            id="fourButton"
                            onClick={fourButton} />
                        <input 
                            type="button" 
                            value="6" 
                            id="sixButton"
                            onClick={sixButton} />
                        <input 
                            type="button" 
                            value="No Ball" 
                            id="noBallButton"
                            // onClick={noBallButton} 
                            />
                    </div>

                    <div id="third">
                        <input 
                            type="button" 
                            value="0" 
                            id="zeroButton"
                            onClick={zeroButton} />
                        <input 
                            type="button" 
                            value="1" 
                            id="oneButton"
                            onClick={oneButton} />
                        <input 
                            type="button" 
                            value="2" 
                            id="twoButton"
                            onClick={twoButton} 
                            />
                        <input 
                            type="button" 
                            value="Wide" 
                            id="wideButton"
                            // onClick={wideButton} 
                            />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main
