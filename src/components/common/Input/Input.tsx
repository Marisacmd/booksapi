import { IconButton, TextField } from "@mui/material";
import InputProps from "../../../types/InputProps";
import SearchIcon from "@mui/icons-material/Search";

const Input = (props: InputProps) => {
  const { id, label, onChange, onClick, className } = props;
  return (
    <TextField
      hiddenLabel
      id={id}
      placeholder={label}
      variant="outlined"
      onChange={onChange}
      className={className}
      InputLabelProps={{ shrink: false }}
      InputProps={{
        endAdornment: (
          <div onClick={onClick}>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
        ),
      }}
      onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") onClick();
      }}
    />
  );
};

export default Input;
