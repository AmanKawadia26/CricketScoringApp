import React from 'react'
import Style from './style'

const Details = (props) => {
  const { teamName1, teamName2, selectedOvers } = props;
  return (
    <><Style>
      <h1>Start Match</h1>
      <div id='form'>
        <div className="inputs">
            <div className="team">
              <input 
                type="text" 
                name="Team" 
                value={teamName1} 
                placeholder="Enter team name" 
                pattern="[A-Z a-z]+" 
                required
              />
              <p>V/S</p>
              <input 
                type="text" 
                name="Team" 
                value={teamName2} 
                placeholder="Enter team name" 
                pattern="[A-Z a-z]+" 
                required
              />
            </div>

            <div className="overs">
              <select required value={selectedOvers}>
                  <option value="overs" selected disabled>---Select Overs---</option>
                  <option value="five">5.0</option>
                  <option value="ten">10.0</option>
                  <option value="t-20">20.0</option>
                  <option value="odi">50.0</option>
              </select>
            </div>
          <input 
            type="submit" 
            className='submit' 
            value="Let's Play" 
          />
        </div>
      </div>
    </Style></>
  )
}

export default Details
