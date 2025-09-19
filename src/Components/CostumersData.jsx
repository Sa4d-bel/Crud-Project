import "../Styles/AllStyles.css";
import { useContext, useState } from "react";
import { CustomersContext } from "../Context/CustomersContext";
import DeleteConfirmation from "./DeleteConfirmation";
import { UpdateContext } from "../Context/CustomersContext";

//Icons
import CostumersSearch from "./CostumersSearch";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

export default function CostumersData() {
  //search
  const { setAddUpdate } = useContext(UpdateContext);
  const {
    allCustomers,
    setCustomerInformations,
    searchInput,
    setCustomerDetails,
    seDetailsVisible,
  } = useContext(CustomersContext);
  //show delete confirmation
  const [isVisible, setIsVisible] = useState(false);
  //Customer to delete
  const [customerToDelete, setCustomerToDelete] = useState(null);
  //searchData
  const searchData = allCustomers
    .filter((Customer) =>
      Customer.LastName.toLowerCase().includes(searchInput.toLowerCase())
    )
    .map((Customer) => (
      <tr key={Customer.id}>
        <td>{Customer.id}</td>
        <td>{Customer.firstName + " " + Customer.LastName}</td>
        <td>{Customer.age}</td>
        <td>{Customer.Country}</td>
        <td>{Customer.AdresseEmail}</td>
        <td>
          <div className="actions">
            <button
              onClick={() => {
                setCustomerInformations(Customer);
                setAddUpdate("UPDATE");
                seDetailsVisible(false)
              }}
            >
              <EditIcon />
            </button>
            <button
              onClick={() => {
                setIsVisible(true);
                setCustomerToDelete(Customer);
              }}
            >
              <DeleteIcon />
            </button>
            <button
              onClick={() => {
                setCustomerDetails(Customer);
                seDetailsVisible(true);
              }}
            >
              <InfoIcon />
            </button>
          </div>
        </td>
      </tr>
    ));

  //showData
  const ShowData = allCustomers.map((Customer) => {
    return (
      <tr key={Customer.id}>
        <td>{Customer.id}</td>
        <td>{Customer.firstName + " " + Customer.LastName}</td>
        <td>{Customer.age}</td>
        <td>{Customer.Country}</td>
        <td>{Customer.AdresseEmail}</td>
        <td>
          <div className="actions">
            <button
              onClick={() => {
                setCustomerInformations(Customer);
                setAddUpdate("UPDATE");
                seDetailsVisible(false)
              }}
            >
              <EditIcon />
            </button>
            <button
              onClick={() => {
                setIsVisible(true);
                setCustomerToDelete(Customer);
              }}
            >
              <DeleteIcon />
            </button>
            <button
              onClick={() => {
                setCustomerDetails(Customer);
                seDetailsVisible((c) => !c);
              }}
            >
              <InfoIcon />
            </button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="CostumersData">
        <CostumersSearch />
        <div className="allCostumers">
          <div className="costumersDetails">
            <label>All Customers</label>
          </div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Full Name</th>
                <th>Age</th>
                <th>Country</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {searchInput ? (
                searchData.length > 0 ? (
                  searchData
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      style={{
                        textAlign: "center",
                        fontSize: "24px",
                        letterSpacing: "6px",
                      }}
                    >
                      NOT FOUND :(
                    </td>
                  </tr>
                )
              ) : (
                ShowData
              )}
            </tbody>
          </table>
        </div>
        {isVisible && customerToDelete && (
          <DeleteConfirmation
            customerToDelete={customerToDelete}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        )}
      </div>
    </>
  );
}
