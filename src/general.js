import ResultSheet from "./resultSheet"
import AllResults from "./allResults"
import React, { useState, useEffect, useRef } from "react"
import quiz from './questions'
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FaTrashAlt } from "react-icons/fa";


const General = ({
    setFinal,  
    setErrorMessage,
    setStarted, 
    setReveal,
    started,
    verifyName,
    id, setId,
    present,
    setPresent,
    setIsLoading,
    getResult,
    reportCard,
    setReportCard,
    results,
    setResults,
    allResults,
    setAllResults
})=> {

 const [cancel, setCancel] = useState(false)
 const [taskComplete, setTaskComplete] = useState(false)
 const [search, setSearch] = useState('')

 const resultRef = useRef()

    const showOne = async (id) => {
     const currentResult = results.find((assess)=> assess.ade === id)
         setReportCard(currentResult)
        console.log(id)
        setReveal(false)
        setStarted(false)
        setPresent(true)
    }

 
    const remain = ()=> {
        setCancel(false)
    }
    
    const clearer = ()=> {
        setCancel(false)
    }
    
    const assertain = async (candID)=> {
        setId(candID)
        console.log(id)
        const response =  results.find((item)=> item.ade == candID)
        if (response){
            setReportCard(response)
            console.log(reportCard)
            // console.log(response)

        }
        setCancel(true)
    }
    
    const fetchResult = async() => {
       
        try {
            const response = await axios.get('https://mawuhi-back.onrender.com/results')
            // const response = await axios.get('http://localhost:3500/results')
            if (response){
                console.log(response.data.questions)
                setResults(response.data.questions)
                
                // console.log(results)
                console.log(response.data.questions)
            } else throw new Error('Network Error pleast try again')
            
        } catch (error) {
            setErrorMessage(error)
        }
        
    }
                
                useEffect(()=> {
                    fetchResult()
                }, [])

                const mainPage = () => {
                    setReveal(false)
                    setStarted(true)
                    console.log(started)
                }

                const changePages = () => {
                    if (allResults) setAllResults(false)
                        else setAllResults(true)
                }    
                const Result =  ({
                    // results,
                    // setResults
                })=> {
                    const remover = async (id) => {
                        // await axios.delete(`/results/delete/${id}`)
                        setCancel(true)
                        await axios.delete(`https://mawuhi-back.onrender.com/results/delete/${id}`)
                // await axios.delete(`http://localhost:3500/results/delete/${id}`)
                const getResult = results && results.filter((item)=> item.ade !== id)
                console.log(getResult)
                setCancel(false)
                setResults(getResult)
                setTaskComplete(true)
                setTimeout(()=> {
                    setTaskComplete(false)
                }, 3000)
            }

            const getTrans = async ()=> {
                // e.preventDefault()
                try {
                    const graw = await axios.get('https://mawuhi-back.onrender.com/results')
                    // console.log(graw.data.items)
                    if (graw.data.questions.length > 0) {
                        setResults(graw.data.questions)
                        // console.log(state.items.data)
                        
                        const filterate = graw.data.questions.filter((inner)=> inner.candidate.toLowerCase().includes(search.toLowerCase()))
                       setResults(filterate)
                        }
                        
                        
                        
                    } catch (error) {
                    console.log(error)
                }
                // resultRef.current.focus( )
            }

            useEffect(()=> {
                getTrans()
               
                
        }, [search])
          
        
        return (
            <div> 
        
              <table
              className="general-table"
                    
                    >
                        <tbody>
                            <tr
                            style={{backgroundColor: '#4DE0D0'}}
                            >
                                <th>NAME</th>
                                <th>UNIQUE ID</th>
                                <th>SCORE (%)</th>
                                <th>DATE</th>
                                <th>DELETE</th>
                            </tr>
                            {results && results.map((result, index)=> {
                                return (
                                    <tr
                                    style={{backgroundColor: index % 2 === 0 ?
                                        'white' : '#AFEEEE'}}
                                      
                                    >
                                        <td
                                       
                                          onClick={() => showOne(result.ade)}
                                         
                                        >{result.candidate}</td>
                                        <td
                                         onClick={() => showOne(result.ade)}
                                        >{result.ade}</td>
                                        <td
                                          style={{
                                            fontWeight: 'bold'
                                        }}
                                           onClick={() => showOne(result.ade)}
                                        >{result.mark}</td>
                                        <td
                                           onClick={() => showOne(result.ade)}
                                        >{result.date.substring(0, 10)}</td>
                                        <td><FaTrashAlt role='button'
          onClick={() =>assertain(result.ade)}
           /></td>
                                    </tr>
                                )
                            })}
                    
                        </tbody>
                    </table>
         
                    <section
id="trans-verify-section"

>
    {cancel ? <div
    className="general-warning-container"
    >   <h3
    id="verify-header"
    style={{
        margin: '.5rem auto',
      //   display: 'flex',
    }}
    >Delete "{reportCard.candidate}'s result" ?</h3>
        <article
     className="general-warning"
        ><button
        style={{ backgroundColor: 'dodgerblue',
            borderColor: 'dodgerblue'
        }}
        onClick={remain}
        >No</button><button
        onClick={() => remover(id)}
       style={{backgroundColor: 'red',
           borderColor: 'red'
       }}
       >Yes</button></article></div> : taskComplete ? <div
    className="general-alert"
        >
          <h4>{reportCard.candidate}'s result deleted</h4>
            </div> : ''}

</section>
                </div>
            )
    }

    return (
      <div 
          className="general-result-container"
      >
          <article
          className="general-result-control"
          >

          <button
                onClick={mainPage}
                >Back to Test</button>
                <button
                onClick={changePages}
                >Sheets</button>
                </article>
                  <form>
               <input 
        ref={resultRef}
        id="searcher"
       type="text"
       role="searchbox"     
       placeholder="Search items by name"
    
       value={search}
       onChange={(e)=> setSearch(e.target.value)}
             
      
           // https://www.npmjs.com/package/@react-google-maps/api
       
       />
       </form>
          <h3
          style={{color: 'white'}}
          >CANDIDATE RESULTS ({results.length})</h3>
          {/* { !results  ? <h3>Loading...</h3> : <Result/>}<br/> */}

          
            {  <h3>Loading...</h3> && allResults ?  <AllResults
                 results={results}
                 /> : <Result/>}    

                
       </div>
    )
}
export default General


   