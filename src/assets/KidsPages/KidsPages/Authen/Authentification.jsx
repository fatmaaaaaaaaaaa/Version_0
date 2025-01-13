import React from 'react';
import "./loginpage.css";
import Kid from './Kid.png'
import School from './School.png'

const LoginPage = () => {
  /* const [matricule, setMatricule] = useState('');
  
    const handleCheck = async () => {
      if (!matricule.trim()) {
        alert('Veuillez entrer une matricule.');
        return;
      }
  
      try {
        const res = await axios.post('http://localhost:5000/api/check-matricule', { matricule });
  
        if (res.data.exists) {
          navigate("/save-name");
        } else {
          alert('Matricule n\'existe pas.');
        }
      } catch (error) {
        alert(
          error.response
            ? error.response.data.message
            : 'Erreur de connexion au serveur. Veuillez réessayer.'
        );
      }
    };
    const navigate = useNavigate();*/


  return (
    <div className="login">
      <div className="background1">
        <img src={School} alt="School" className="school-image1" />
        <img src={Kid} alt="Character" className="character-image1" />
      </div>
      <div className="login-card1">
        <label htmlFor="matricule" className="matricule-label1">Matricule:</label>
        <input type="text" id="matricule" className="matricule-input1" />
        <button className="login-button1" >LOGIN</button>
      </div>
    </div>
  );
};

export default LoginPage;
