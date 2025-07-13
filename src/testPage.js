import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
const TestPage = ({ next,
    quiz,
    inputRef,
    inputRef1,
    inputRef2,
    inputRef3,
    attemptTracker,
    handleSubmit,
    handlePrevious,
    handleNext,
    started,
    setSubmitButton,
    submitButton,
    clock,
    setClock,
    candidate,
    showResults
  })=>{

 
    let showSubmit = submitButton ? <section
    className="controls"
   
    >
        <button 
        id= 'previous'
        onClick={()=> handlePrevious(next)}
   
        >
       <FontAwesomeIcon icon={faArrowLeft}/>
        </button>
        <button 
        id='next'
      onClick={()=> handleNext(next)}

      >
          <FontAwesomeIcon icon={faArrowRight}/>
      </button>
        <button onClick={(e)=> handleSubmit(e)}
        id="submit"
        >Submit</button></section> : <section
      className="controls"
        >
          <button 
        id= 'previous'
        onClick={()=> handlePrevious(next)}
   
        >
       <FontAwesomeIcon icon={faArrowLeft}/>
        </button>
       
      <button 
        id='next'
      onClick={()=> handleNext(next)}

      >
          <FontAwesomeIcon icon={faArrowRight} />
      </button>
    
      </section>

useEffect(()=> {
  const interval = setInterval(()=>{
      if (started === true) {
        setClock(clock - 1)
      }
    }, 1000)
    if (clock < 1) {
    handleSubmit()
      setClock(0)
    }
    return ()=> clearInterval(interval)
}, [clock])
useEffect(()=>{
  if (next === quiz.length - 1) setSubmitButton(true)
}, [next])
        return (

            quiz && quiz.map((exam, index)=> {
                if(index === next){
              
                
                  return (
                    <div key={exam.id} id="test-page">
                      {/* <article
                      className="clock-container"
                    
                      >
                       
                     

                  <h3 id="time-up"
                      >{clock === 0 ? `Time's Up` : ''}
                      </h3>
                    
                      </article> */}
                      <article id='test-canvas'>
               
                      <p id="qno">{index + 1}.</p>
                      <h5 className='interview'>{exam.quiz}</h5>
                      </article>
                      <div id="ul-container">

                      <ul>
                          <li>
                            <input
                            ref={inputRef}
                            type='radio'
                            name='answers'
                            value={exam.options[0]}
                            onClick={(e) => attemptTracker(e, next)}
                            />
                            {exam.options[0]}
                          </li>
                          <li>
                            <input
                            ref={inputRef1}
                            type='radio'
                            name='answers'
                            value={exam.options[1]}
                            onClick={(e) => attemptTracker(e, next)}
                            />
                            {exam.options[1]}
                          </li>
                          <li>
                            <input
                            ref={inputRef2}
                            type='radio'
                            name='answers'
                            value={exam.options[2]}
                            onClick={(e) => attemptTracker(e, next)}
                            />
                            {exam.options[2]}
                          </li>
                          <li>
                        
                            <input
                               ref={inputRef3}
                               type='radio'
                               name='answers'
                               value={exam.options[3]}
                               onClick={(e) => attemptTracker(e, next)}
                               />
                            {exam.options[3]}
                          </li>
                        </ul>
                        </div>
                        {/* <section><button onClick={()=> handlePrevious(next)} id="previous">Previous</button>
                        <button onClick={()=> handleNext(next)} id="next">Next</button><button onClick={(e)=> handleSubmit(e)}>Submit</button></section> */}
                     
                {showSubmit}
                
    
                {/* <button onClick={(e)=> handleSubmit(e)}>Submit</button> */}
                {/* {navButtons} */}
                {/* <sub>Amalu productions &copy;{date}</sub> */}
                    </div> 
                )
                }
                })        
            
        ) 
}


export default TestPage