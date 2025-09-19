import "../Styles/AllStyles.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useContext } from "react";
import { CustomersContext } from "../Context/CustomersContext";

export default function DeleteConfirmation({
  customerToDelete,
  isVisible,
  setIsVisible,
}) {
  const {
    allCustomers,
    setAllCustomers,
    setCustomerId,
    setCustomerInformations,
    seDetailsVisible,
    setConfirmationMessageVisible,
  } = useContext(CustomersContext);
  const handleDeleteButton = () => {
    seDetailsVisible(false);
    const newCustomersList = allCustomers.filter((customer) => {
      return customer.id !== customerToDelete.id;
    });
    setAllCustomers(newCustomersList);
    setIsVisible(false);
    setCustomerId((customerId) => customerId - 1);
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
    setConfirmationMessageVisible({
      IsVisible: true,
      Message: "The Customer Has Been Deleted Successfully.",
    });
    setTimeout(() => {
      setConfirmationMessageVisible({ IsVisible: false, Message: "" });
    }, 3500);
  };
  return (
    <div
      className="DeleteConfirmation"
      style={{ visibility: isVisible ? "" : "hidden" }}
    >
      <ClearIcon className="clearIcon" />
      <p>
        {customerToDelete ? "Are you sure you want to delete " : ""}
        <strong style={{ display: "block" }}>
          {"MR " +
            customerToDelete.firstName +
            " " +
            customerToDelete.LastName +
            " ?"}
        </strong>
      </p>
      <div>
        <button onClick={handleDeleteButton}>Delete</button>
        <button onClick={() => setIsVisible(false)}>Cancel</button>
      </div>
    </div>
  );
}
