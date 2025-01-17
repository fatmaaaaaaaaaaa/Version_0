import { useState } from 'react'
import { LoginAdmin } from './assets/LoginAdmin/LoginAdmin'
import { LoginTeacher } from './assets/LoginTeacher/LoginTeacher'
import Classes from './assets/DashboardTeacher/LesClasses'
import ListeClasses from './assets/DashboardTeacher/ListeDeClasse'
import ADDChild from './assets/DashboardTeacher/ajoutEnfant'
import CoursTeacher from './assets/DashboardTeacher/cours'
import Quizteacher from './assets/DashboardTeacher/Quiz'
import VoirCours from './assets/DashboardTeacher/VoirCours'
import Landingpage from './assets/LandingPage/LandingPage/AllLandingPAge/AllLandingPage'
import WhoAreYou from './assets/WhoAreYou/WhoAreYou'
import Loginkid from './assets/KidsPages/KidsPages/Authen/Authentification'
import SaveNamePage from "./assets/KidsPages/KidsPages/SaveName/SaveName"
import Consulter from "./assets/KidsPages/KidsPages/Consulter/Consulter";
import Quizkid from "./assets/KidsPages/KidsPages/QuizKid/DashboradQuiz";
import VoirCourkid from "./assets/KidsPages/KidsPages/VoirCours/VoirCours";
import Dashboard from "./assets/KidsPages/KidsPages/Dashbord/Dashbord";
import Courkid from "./assets/KidsPages/KidsPages/Courses/Courses";
{/*

 
*/}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/WhoAreYou" element={< WhoAreYou />} />
          <Route path="/LoginTeacher" element={<LoginTeacher />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/class-details/:className" element={<ListeClasses />} />
          <Route path="/ajouter-enfant" element={<ADDChild />} />
          <Route path="/cours" element={<CoursTeacher />} />
          <Route path="/VoirCoursTeacher" element={<VoirCours />} />
          <Route path="/quiz-teacher" element={< Quizteacher />} />
          <Route path="/loginkid" element={< Loginkid />} />
          <Route path="/save-name" element={<SaveNamePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/consulter" element={<Consulter />} />
          <Route path="/quiz" element={<Quizkid />} />
          <Route path="/voircours" element={<VoirCourkid />} />
          <Route path="/coursKids" element={<Courkid />} />

          {/*
          
           
          
         */}

        </Routes>
      </Router>
      {/*<LoginAdmin/>
      <Dashboard/>
      */}

    </>
  )
}

export default App
