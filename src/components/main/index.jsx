import React from 'react'

const Main = () => {
    // const [wickets, setWickets] = useState(0);
    // const [runs, setRuns] = useState(0);
    // const [overs, setOvers] = useState(0);
    // const [balls, setBalls] = useState(0);
    // const [totalBalls, setTotalBalls] = useState(0);
    // const [timelineForOver, setTimelineForOver] = useState([]);
    // const [currentInning, setCurrentInning] = useState(1);
    // const [Runs, setRunsArray] = useState([]);
    // const [winner, setWinner] = useState('');

    // const Wicket = () => {

    // };
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
                    <div class="runswicket">
                        <h1 id="runs">0</h1> <h1>/</h1> <h1 id="wicket">0</h1>
                    </div>
                    <div class="totalovers">
                        <h2 id="overs">0</h2> <h2>.</h2> <h2 id="balls">0</h2><p id="textOvers"></p>
                    </div>
                </div>
                
                </div>
                <div id="bottom">
                    <div id="first">
                        <input 
                            type="button" 
                            value="Declare" 
                            id="declareButton" />
                        <input 
                            type="button" 
                            value="Wicket" 
                            id="wicketButton" />
                        <input 
                            type="button" 
                            value="Bye" 
                            id="byeButton" />
                        <input 
                            type="button" 
                            value="Leg Bye" 
                            id="legByeButton" />
                    </div>
                    <div id="second">
                        <input 
                            type="button" 
                            value="3" 
                            id="threeButton" />
                        <input 
                            type="button" 
                            value="4" 
                            id="fourButton" />
                        <input 
                            type="button" 
                            value="6" 
                            id="sixButton" />
                        <input 
                            type="button" 
                            value="No Ball" 
                            id="noBallButton" />
                    </div>
                    <div id="third">
                        <input 
                            type="button" 
                            value="0" 
                            id="zeroButton" />
                        <input 
                            type="button" 
                            value="1" 
                            id="oneButton" />
                        <input 
                            type="button" 
                            value="2" 
                            id="twoButton" />
                        <input 
                            type="button" 
                            value="Wide" 
                            id="wideButton" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main
