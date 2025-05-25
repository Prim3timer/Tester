import { useState } from 'react'
import quiz from './questions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faArrowRight } from "@fortawesome/free-solid-svg-icons"
const ResultSheet = ({final, setFinal, candidate,
    reportCard,
showResults})=> {
console.log(reportCard)
    let assessmentArray = []
    let mainMan = Object.values(reportCard)

console.log(mainMan)
// console.log(mainMan[2][0])   
for (let i = 0; i < quiz.length; i++){
    const assessmentObject = {
        q_no: mainMan[3][i], qs: mainMan[4][i], attempt: mainMan[5][i],
         correctAnswer: mainMan[6][i]
    }
    assessmentArray.push(assessmentObject)
}
console.log(assessmentArray)
let score = 0
for (let i = 0; i < quiz.length; i++){
    if (assessmentArray[i].attempt === assessmentArray[i].correctAnswer){
        score += 100 / quiz.length
    } 
}


console.log(score)

    return (
        <article id='result-table'>
            <main id='cred' 
            >
 {/* <button
                         style={{
                          display: candidate === 'Dike' ? 'block' : 'none',
                        //   marginBottom: '2rem'
                         }}
                    onClick={showResults}
                    >View Results</button> */}
                    <article
                  id='strict-cred'

                    >
                        
            <h2 id='name'
            >Name: {reportCard.candidate},  Score: {score}%</h2>
            </article>
            </main>
            <table id='tableA'>
                <tbody>
                    <tr style={{backgroundColor: 'lightsteelblue'}}>
                    <th>Q. no.</th>
                    <th>remark</th>
                    <th>answer</th>
                    <th>your answer</th>
                    <th>questions</th>
                </tr>
            
                {/* const {q_no, qs, yourAnswer, correctAnswer, comment} = final */}
 {assessmentArray && assessmentArray.map((prop, index)=> {
    return    <tr style={{backgroundColor: index % 2 === 0 ?
                'paleturquoise' : 'lavender'}}
                key={prop.ade}
                >
        <td
        style={{width: '10%',
        
        }}
        >{index + 1}.</td>
         {prop.attempt === prop.correctAnswer ? <td style={{color: 'green',
            fontSize: '1.6rem'
        }}>
            <FontAwesomeIcon icon={faCheck} style={{fontWeight: 'bold'}}/>
            {/* correct */}
            </td>
         : <td style={{color: 'red',
             fontSize: '1.6rem'
         }}>
                  <FontAwesomeIcon icon={faTimes} />
            </td>}
        <td style={{width: '20%'}}>{prop.correctAnswer}</td>
        <td style={{width: '20%'}}>{prop.attempt}</td>
        <td className='questions'>{prop.qs}</td>      
    </tr>
 })}
        </tbody>
            </table>
        </article>
    )
}


export default ResultSheet