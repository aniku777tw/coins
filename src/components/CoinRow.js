import React from "react";
import { TextField } from "@material-ui/core/";
import '../css/CoinRow.css'
function CoinRow({rowData ,l ,n, t,init_t,init_n}) {
  return (
    <div className="coin__row">
      <div className="textfield">
        <TextField
          value = {init_n}
          size='small'
          label={n}
          color="primary"
          name={n}
          variant="outlined"
          type="number"
          required
          InputProps={{ inputProps: { min: 1 } }}
          inputRef={(ref) => {
            rowData.push(ref);
          }}
        />
      </div>
      
      <div className="textfield">
        <TextField
          value = {init_t}
          size='small'
          label={t}
          color="primary"
          name={t}
          variant="outlined"
          type="number"
          required
          InputProps={{ inputProps: { min: 0.0, max: 1.0, step: 0.01 } }}
          inputRef={(ref) => {
            rowData.push(ref);
          }}
        />
      </div>

      <div className="textfield">
        <TextField
          size='small'
          label={l}
          color="primary"
          name={l}
          variant="outlined"
          type="number"
          required
          defaultValue = {1}
          InputProps={{ inputProps: { min: 0.0 ,step:0.01 } }}
          inputRef={(ref) => {
            rowData.push(ref);
          }}
        />
      </div>
    </div>
  );
}

export default CoinRow;
