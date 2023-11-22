
import React from "react"
import Header from "./component/Header"
import FeedbackItem from "./component/FeedbackItem"
import { useState } from "react"
//import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./component/FeedbackList"
import Card from "./component/shared/Card"
import FeedbackStats from "./component/FeedbackStats"
import FeedbackForm from "./component/FeedbackForm"
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './component/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App(){
  //  const [feedback, setFeedback] = useState(FeedbackData)
       
  //  const addFeedback = (newFeedback) => {
    //    newFeedback.id = uuidv4()
      //setFeedback([newFeedback, ...feedback])
    //}
    //const deleteFeedback = (id) => {
      //  if (window.confirm('Are you sure you want to delete?')) {
        //    setFeedback(feedback.filter((item) => item.id !== id))
        //}
    //}
     return(
        <FeedbackProvider>
        <Router>
        <Header />
    <div className="container">
        <Routes>
            
            <Route exact path='/'
            element={
     <>
                <FeedbackForm />
        <FeedbackStats />
   <FeedbackList />
        </>   
     }>

        </Route>
   
   <Route path='/about' element={<AboutPage/>} />
   

 </Routes>
 <Card>
                <NavLink to='/' activeClassName='active'>
                    Home
                </NavLink>
                <NavLink to='/' activeClassName='active'>
                    About
                </NavLink>
            </Card>
 <AboutIconLink/>
   </div>
    </Router>
    </FeedbackProvider>
        
    )
}
export default App