import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import getMovies from "../../Api/OmdbAPI";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    getMovies(searchQuery);
  };

  return (
    <>
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        value={searchQuery}
        onChange={handleInput}
      />
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={handleSearchClick}
      >
        Send
      </Button>
    </>
  );
};

export default SearchBox;
