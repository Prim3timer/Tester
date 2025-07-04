import { v4 as uuidv4 } from 'uuid'
const NameComponent = ({verifyName,
candidate,
setCandidate,
setReveal,
quiz,
clock,
error})=> {

   
    let time = quiz.length * 10
    return (
        <section id="name-component">
            <div>

            <h3 id="instructions"
           >You have {Math.floor(time/60)} munites{time % 60 ? `, ${time % 60} seconds`: ''}  to complete a 
            general knowledge test comprising of {quiz.length} questions. Enter your name and click the 'Start' button to begin.</h3>
        <input id="name-taker"
        
        type='text'
        value={candidate}
        onChange={(e) => setCandidate(e.target.value)}
        placeholder='Please Enter Your Name'
        /> 
        <h4 
        className='real-error'
        >{error}</h4><br/>
        <button id="continuity" 
        onClick={verifyName}
        style={{borderRadius: '5px'}}
        >Start</button>
        </div> 
</section>
    )
}



export default NameComponent