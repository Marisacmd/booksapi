import SelectProps from "../../../types/SelectProps";
import { FormControl, MenuItem, Select } from "@mui/material";

const SelectComponent = (props: SelectProps) => {
  const { labelId, id, value, name, onChange, items, className } = props;

  return (
    <FormControl sx={{ m: 3 }} variant="standard" className={className}>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        displayEmpty
        className={className}
      >
        {items.map(({ name, value }, index: number) => (
          <MenuItem key={index} value={value as string}>
            {name as string}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
