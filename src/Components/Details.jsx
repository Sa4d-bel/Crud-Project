import "../Styles/AllStyles.css";
import { useContext } from "react";
import { CustomersContext } from "../Context/CustomersContext";

export default function Details() {
    const {CustomerDetails , DetailsVisible , seDetailsVisible} = useContext(CustomersContext)
    if (!CustomerDetails) return null;
  return (
    <div className="Details" style={{visibility :  DetailsVisible ? '' : 'hidden'}}>
      <label>{"Mr " + CustomerDetails.firstName + " "+ CustomerDetails.LastName + "  informations"}</label>
      <div className="informationsContainer">
        <div className="informations">
          <p>Id : </p>
          <span>{CustomerDetails.id}</span>
        </div>

        <div className="informations">
          <p>Full Name : </p>
          <span>{CustomerDetails.firstName + " "+ CustomerDetails.LastName}</span>
        </div>

        <div className="informations">
          <p>Age : </p>
          <span>{CustomerDetails.age}</span>
        </div>
 
        <div className="informations">
          <p>Email : </p>
          <span>{CustomerDetails.AdresseEmail}</span>
        </div>
         
          <div className="informations">
          <p>Country : </p>
          <span>{CustomerDetails.Country}</span>
        </div>

        <div className="informations">
          <p>Phone : </p>
          <span>{CustomerDetails.Phone}</span>
        </div>

        <div className="informations">
          <p>Adresse : </p>
          <span>{CustomerDetails.Adresse}</span>
        </div>

        <div className="informations">
          <p>Status : </p>
          <span>{CustomerDetails.Status}</span>
        </div>

        <div className="informations">
          <p>Slary : </p>
          <span>{CustomerDetails.Balance}</span>
        </div>

        <div className="informations">
          <p>Family Status : </p>
          <span>{CustomerDetails.FamilyStatus}</span>
        </div>

        <div className="informations">
          <p>Creation Date : </p>
          <span>{CustomerDetails.createdAt}</span>
        </div>

        <div className="informations">
          <p>Last Update : </p>
          <span>{CustomerDetails.updatedAt}</span>
        </div>

      </div>
      <div className="homePage" onClick={() => seDetailsVisible(false)}><button>Back to home page</button></div>
    </div>
  );
}
