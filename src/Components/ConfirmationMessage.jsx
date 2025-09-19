import "../Styles/AllStyles.css";
import CheckIcon from "@mui/icons-material/Check";
import { useContext } from "react";
import { CustomersContext } from "../Context/CustomersContext";

export default function ConfirmationMessage() {
  const { confirmationMessageVisible } = useContext(CustomersContext);
  return (
    <div className={`confirmationMessage ${confirmationMessageVisible.IsVisible ? "show" : "hide"}`}>
      <CheckIcon className="messageIcon" />
      <div>
        <label>{confirmationMessageVisible.Message}</label>{" "}
      </div>
    </div>
  );
}
