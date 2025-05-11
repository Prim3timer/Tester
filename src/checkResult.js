import axios from "axios"
import quiz from './questions'
import { useEffect, useState } from "react"

const CheckResult = ({setPresent, setIsDone,getResult,
    candidate, submitButton, setSubmitButton,
showSheet,
arrival,
final,
setFinal,
id,
setId
})=> {
    console.log(submitButton)
    const answers = quiz.map((nug)=> nug.answer)
   
   
    const [answersArray, setAnswersArray]= useState(answers)
    // const [attempt, setAttemp] = useState(colator)
    const [whole, setWhole] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
     
  
    const fetchResult = async() => {
        try {
            // const response = await axios.get('https://mawuhi-back.onrender.com/results')
            const response = await axios.get('http://localhost:3500/results')
            if (response){
                console.log(response.data.questions)
                const currentResult =  response.data.questions.find((mula)=> mula.candidate === candidate && mula.uni === id )
                const allProps = {
                    candidate:  currentResult.candidate,
                    q_no: currentResult.q_no,
                    qs: currentResult.questions,
                    attempt: currentResult.attempt,
                    correctAnswer: currentResult.answer,
                    // comment: ''
                }
                setFinal(allProps)
            
                
            } else throw new Error('Network Error pleast try again')
            
        } catch (error) {
            setErrorMessage(error)
        }

        
    }
    useEffect(()=> {
        fetchResult()
    }, [])


  
     console.log(final)
    return (
        <div
        className="check-result"
        
        >
            {!submitButton ? <h2>Time is Up!</h2> : ''}
        <button
        onClick={getResult}
>View Result</button>
        </div>
    )
}
export default CheckResult