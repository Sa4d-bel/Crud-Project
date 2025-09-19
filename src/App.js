import Acceuil from "./Components/Acceuil";
import Navbar from "./Components/Navbar";
import { CustomersContext } from "./Context/CustomersContext.jsx";
import { useState } from "react";
import { UpdateContext } from "./Context/CustomersContext.jsx";

function App() {
  const [confirmationMessageVisible , setConfirmationMessageVisible] = useState({
    IsVisible : false,
    Message : "",
  })
  const [DetailsVisible , seDetailsVisible] = useState(false)
  const [searchInput , setSearchInput ] = useState('')
  const [CustomerDetails , setCustomerDetails] = useState(null)
  const [allCustomers, setAllCustomers] = useState(
    JSON.parse(localStorage.getItem("customers")) || []
  );
  const [customerId, setCustomerId] = useState(
    parseInt(localStorage.getItem("customerId")) || 1
  );
  const [addUpdate, setAddUpdate] = useState("ADD CUSTOMER");
  const [customerInformations, setCustomerInformations] = useState({
    id: null,
    firstName: "",
    LastName: "",
    age: "",
    Country: "",
    Phone: "",
    AdresseEmail: "",
    Adresse: "",
    Balance: "",
    Status: "Active",
    FamilyStatus: "Single",
    createdAt: null,
    updatedAt: null,
  });
  return (
    <CustomersContext.Provider
      value={{
        allCustomers,
        setAllCustomers,
        customerId,
        setCustomerId,
        customerInformations,
        setCustomerInformations,
        searchInput , setSearchInput,
        CustomerDetails , setCustomerDetails, 
        DetailsVisible , seDetailsVisible,
        confirmationMessageVisible , setConfirmationMessageVisible,
      }}
    >
      <UpdateContext.Provider value={{ addUpdate, setAddUpdate}}>
        <div className="App">
          <Navbar />
          <Acceuil />
        </div>
      </UpdateContext.Provider>
    </CustomersContext.Provider>
  );
}

export default App;



