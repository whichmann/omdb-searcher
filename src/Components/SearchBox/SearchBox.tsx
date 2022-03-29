import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

type Props = {
    handleSearchQuery: (movieName: string) => void;
}

const SearchBox = ({
  handleSearchQuery,
}: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
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
        onClick={() => {
          handleSearchQuery(searchQuery);
        }}
      >
        Send
      </Button>
    </>
  );
};

export default SearchBox;
