import React from 'react'




export default function EditModal(props) {


  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>

          <form className="modalform" name="playerOneForm">
            <label for="fname">Enter player name:</label>
            
            <input type="text" id="pname" name="pname" /><br /><br />
            <input type="submit" value="START GAME" className="submit" />
          </form>



        </div>
      </div>
    </div>
  )
}
