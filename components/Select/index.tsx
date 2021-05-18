import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
interface IProps<T = ItemProps> {
  value?: string | number;
  onChange?: any;
  classes?: any;
  options: Array<T>;
}

interface ItemProps {
  text: string | number;
  value: string | number;
}
const SimpleSelect: FC<IProps> = ({ value, onChange, classes, options }) => {
  const styles = classes || useStyles();
  return (
    <FormControl className={styles.formControl}>
      <InputLabel id="select-label"></InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        onChange={onChange}
      >
        {options.map((item) => (
          <MenuItem key={item?.text} value={item?.value}>
            {item?.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default SimpleSelect;
