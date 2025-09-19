import { useEffect } from "react";
import "../Styles/AllStyles.css";
import { CustomersContext } from "../Context/CustomersContext";
import { useContext } from "react";
import { UpdateContext } from "../Context/CustomersContext";
import Details from "./Details";
import moment from "moment";

export default function MyForm() {
  const { addUpdate, setAddUpdate } = useContext(UpdateContext);
  const {
    allCustomers,
    setAllCustomers,
    customerId,
    setCustomerId,
    customerInformations,
    setCustomerInformations,
    setConfirmationMessageVisible,
  } = useContext(CustomersContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation
    if (
      customerInformations.firstName.trim() === "" ||
      customerInformations.LastName.trim() === "" ||
      customerInformations.Country.trim() === "" ||
      customerInformations.AdresseEmail.trim() === "" ||
      customerInformations.Phone.trim() === "" ||
      customerInformations.age.trim() === "" ||
      customerInformations.Balance.trim() === ""
    ) {
      return;
    }
    if (customerInformations.id === null) {
      setConfirmationMessageVisible({
        IsVisible: true,
        Message: "The Customer Has Been Created Successfully.",
      });
      setTimeout(() => {
        setConfirmationMessageVisible({ IsVisible: false, Message: "" });
      }, 3500);
      setAllCustomers([
        ...allCustomers,
        {
          ...customerInformations,
          id: customerId,
          createdAt: moment().format("YYYY-MM-DD --  HH:mm"),
          updatedAt: moment().format("YYYY-MM-DD --  HH:mm"),
        },
      ]);

      setCustomerId((prevId) => prevId + 1);
    } else {
      setAllCustomers(
        allCustomers.map((cust) =>
          cust.id === customerInformations.id
            ? {
                ...customerInformations,
                updatedAt: moment().format("YYYY-MM-DD -- HH:mm"),
              }
            : cust
        )
      );
      setConfirmationMessageVisible({
        IsVisible: true,
        Message: "The Customer Has Been Updated Successfully.",
      });
      setTimeout(() => {
        setConfirmationMessageVisible({ IsVisible: false, Message: "" });
      }, 3500);
    }

    setCustomerInformations({
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
    setAddUpdate("ADD CUSTOMER");
  };

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(allCustomers));
  }, [allCustomers]);
  useEffect(() => {
    localStorage.setItem("customerId", JSON.stringify(customerId));
  }, [customerId]);
  return (
    <>
      <form className="myForm" onSubmit={(event) => handleSubmit(event)}>
        <div
          className="formTitle"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "25px",
          }}
        >
          <label>Customer informations last commit</label>
        </div>
        <div className="fullname">
          <div className="firstname">
            <label htmlFor="firstName">First Name : </label>
            <input
              type="text"
              id="firstName"
              placeholder="first name"
              value={customerInformations.firstName}
              onChange={(event) =>
                setCustomerInformations({
                  ...customerInformations,
                  firstName: event.target.value,
                })
              }
            />
          </div>
          <div className="Lastname">
            <label htmlFor="LastNAME">Last Name : </label>
            <input
              type="text"
              id="lastname"
              placeholder="last name"
              value={customerInformations.LastName}
              onChange={(event) =>
                setCustomerInformations({
                  ...customerInformations,
                  LastName: event.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="fullname ageCountry">
          <div className="Age">
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              id="age"
              placeholder="age"
              value={customerInformations.age}
              onChange={(event) =>
                setCustomerInformations({
                  ...customerInformations,
                  age: event.target.value,
                })
              }
            />
          </div>
          <div className="Country">
            <label htmlFor="country">Country : </label>
            <input
              type="text"
              id="country"
              placeholder="last country"
              value={customerInformations.Country}
              onChange={(event) =>
                setCustomerInformations({
                  ...customerInformations,
                  Country: event.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="fullname EmailPhone">
          <div className="Email">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              placeholder="email"
              value={customerInformations.AdresseEmail}
              onChange={(event) =>
                setCustomerInformations({
                  ...customerInformations,
                  AdresseEmail: event.target.value,
                })
              }
            />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone : </label>
            <input
              type="number"
              id="phone"
              placeholder="phone"
              value={customerInformations.Phone}
              onChange={(event) =>
                setCustomerInformations({
                  ...customerInformations,
                  Phone: event.target.value,
                })
              }
            />
          </div>
        </div>

        <label htmlFor="adresse">Adresse : </label>
        <input
          type="text"
          id="adresse"
          placeholder="adresse"
          style={{ marginBottom: "15px" }}
          value={customerInformations.Adresse}
          onChange={(event) =>
            setCustomerInformations({
              ...customerInformations,
              Adresse: event.target.value,
            })
          }
        />

        <div className="fullname balanceStatus">
          <div className="status">
            <label htmlFor="status">Status :</label>
            <select
              name="status"
              id="status"
              value={customerInformations.Status}
              onChange={(event) =>
                setCustomerInformations({
                  ...customerInformations,
                  Status: event.target.value,
                })
              }
            >
              <option>Active</option>
              <option>inActive</option>
            </select>
          </div>
          <div className="balance">
            <label htmlFor="balance">Balance : </label>
            <input
              type="number"
              id="balance"
              placeholder="Balance $"
              value={customerInformations.Balance}
              onChange={(event) =>
                setCustomerInformations({
                  ...customerInformations,
                  Balance: event.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="fullname familyStatus">
          <label htmlFor="familyStatus">Family Status </label>
          <select
            name="famiyStatus"
            id="familyStatus"
            value={customerInformations.FamilyStatus}
            onChange={(event) =>
              setCustomerInformations({
                ...customerInformations,
                FamilyStatus: event.target.value,
              })
            }
          >
            <option>Single</option>
            <option>Married</option>
          </select>
        </div>

        <div className="addCostumer">
          <button type="submit">{addUpdate}</button>
        </div>

        <p className="editer">
          Edited by <span>Saad Belhous</span>
        </p>
        <Details />
      </form>
    </>
  );
}
