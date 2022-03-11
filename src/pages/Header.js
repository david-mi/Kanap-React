// LIBRARIES
import { NavLink } from 'react-router-dom';


const Header = () => (

  <header>
    <div className="limitedWidthBlockContainer informations">
      <div className="limitedWidthBlock">
        <ul>
          <li><img src={`${process.env.PUBLIC_URL}/images/icons/phone.svg`} alt="logo de téléphone" className="informations__phone" />01 23 45 67 89</li>
          <li><img src={`${process.env.PUBLIC_URL}/images/icons/mail.svg`} alt="logo d'une enveloppe" className="informations__mail" />support@name.com</li>
          <li><img src={`${process.env.PUBLIC_URL}/images/icons/adress.svg`} alt="logo d'un point de géolocalisation" className="informations__address" />01 23 45 67 89</li>
        </ul>
      </div>
    </div>
    <div className="limitedWidthBlockContainer menu">
      <div className="limitedWidthBlock">
        <NavLink to="/">
          <img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo de l'entreprise" />
        </NavLink>
        <nav>
          <ul>
            <NavLink to="/Kanap-React/"><li>Accueil</li></NavLink>
            <NavLink to="/Kanap-React/card"><li>Panier</li></NavLink>
          </ul>
        </nav>
      </div>
    </div>
    <img className="banniere" src={`${process.env.PUBLIC_URL}/images/banniere.png`} alt="Baniere" />
  </header>

);

export default Header;