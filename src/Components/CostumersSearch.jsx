import "../Styles/AllStyles.css";
import { useContext } from "react";
import { CustomersContext } from "../Context/CustomersContext";

//icons
import SearchIcon from "@mui/icons-material/Search";

export default function CostumersSearch() {
  const { searchInput, setSearchInput } = useContext(CustomersContext);
  return (
    <div className="searchBox">
      <div className="search">
        <input
          type="text"
          placeholder="search by lastName..."
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <div>
          <SearchIcon className="searchIcon" />
        </div>
      </div>
    </div>
  );
}
