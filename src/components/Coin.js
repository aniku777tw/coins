import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core/";
import Chart from "./Charts.js";
import axios from "axios";
import "../css/Coin.css";
import CoinRow from "./CoinRow.js";
import Table from "./Table";

function Coin() {
  const [chartData, setChartData] = useState({});
  const [bayesData, setBayesData] = useState({ bayes: [0,1,2] });
  const [cla1Data, setCla1Data] = useState({clas1:[]});
  const [cla2Data, setCla2Data] = useState({clas2:[]});
  const [cla3Data, setCla3Data] = useState({clas3:[]});
  const [fieldData, setFieldData] = useState({
    t: [0.25, 0.33, 0.38, 0.5],
    n: [4000, 6000, 8000, 10000],
  });
  var dictionary = {};
  const rowData = [];

  function getRandom(min, max) {
    var n = [];
    var f = [];
    var res = {};
    n.push(Math.floor(Math.random() * (max - min + 1)) + min);
    n.push(Math.floor(Math.random() * (max - min + 1)) + min);
    n.push(Math.floor(Math.random() * (max - min + 1)) + min);
    n.push(Math.floor(Math.random() * (max - min + 1)) + min);
    f.push(Number((Math.random() * (1 - 0) + 0).toFixed(2)));
    f.push(Number((Math.random() * (1 - 0) + 0).toFixed(2)));
    f.push(Number((Math.random() * (1 - 0) + 0).toFixed(2)));
    f.push(Number((Math.random() * (1 - 0) + 0).toFixed(2)));
    res["n"] = n;
    res["f"] = f;
    return res;
  }

  async function formSubmit(e) {
    // Post Data

    e.preventDefault();
    rowData.forEach(function (data) {
      dictionary[data.name] = data.value;
    });

    const postData = {};
    postData["n1"] = dictionary["n1"];
    postData["l1"] = dictionary["l1"];
    postData["t1"] = dictionary["t1"];
    postData["n2"] = dictionary["n2"];
    postData["l2"] = dictionary["l2"];
    postData["t2"] = dictionary["t2"];
    postData["n3"] = dictionary["n3"];
    postData["l3"] = dictionary["l3"];
    postData["t3"] = dictionary["t3"];
    postData["n4"] = dictionary["n4"];
    postData["l4"] = dictionary["l4"];
    postData["t4"] = dictionary["t4"];
    postData["d"] = dictionary["d"];

    const res = await axios.post("http://127.0.0.1:8000/h1/", postData);

    setChartData({
      keys: res.data["keys"],
      t1: fieldData.t[0],
      t2: fieldData.t[1],
      t3: fieldData.t[2],
      t4: fieldData.t[3],
      values_1: res.data["values_1"],
      values_2: res.data["values_2"],
      values_3: res.data["values_3"],
      values_4: res.data["values_4"],
    });
    setBayesData({
      bayes: res.data["bayes"],
    });

    setCla1Data({
      clas1: res.data["cla1"],
    });

    setCla2Data({
      clas2: res.data["cla2"],
    });

    setCla3Data({
      clas3: res.data["cla3"],
    });
  }

  return (
    <div className="coin">
      <form className="form" onSubmit={formSubmit}>
        <CoinRow
          rowData={rowData}
          n="n1"
          l="l1"
          t="t1"
          init_t={fieldData.t[0]}
          init_n={fieldData.n[0]}
        />
        <CoinRow
          rowData={rowData}
          n="n2"
          l="l2"
          t="t2"
          init_t={fieldData.t[1]}
          init_n={fieldData.n[1]}
        />
        <CoinRow
          rowData={rowData}
          n="n3"
          l="l3"
          t="t3"
          init_t={fieldData.t[2]}
          init_n={fieldData.n[2]}
        />
        <CoinRow
          rowData={rowData}
          n="n4"
          l="l4"
          t="t4"
          init_t={fieldData.t[3]}
          init_n={fieldData.n[3]}
        />

        <div className="textfield">
          <TextField
            size="small"
            label="d"
            color="primary"
            name="d"
            variant="outlined"
            type="number"
            required
            defaultValue={100}
            InputProps={{ inputProps: { min: 0, step: 1 } }}
            inputRef={(ref) => {
              rowData.push(ref);
            }}
          />
        </div>
        <div className="button__row">
          <div className="button">
            <Button
              onClick={() => {

                var r = getRandom(100, 10000);
                setChartData({
                  keys: Array.from(new Array(100).keys()),
                });
                setBayesData({
                  bayes: [0, 1, 2],
                });
                setCla1Data({clas1:[]});
                setCla2Data({clas2:[]});
                setCla3Data({clas3:[]});
                setFieldData({
                  t: r["f"],
                  n: r["n"],
                });
              }}
              variant="contained"
              color="primary"
              size="small"
            >
              random
            </Button>
          </div>
          <div className="button">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              submit
            </Button>
          </div>
        </div>
      </form>
      <div style={{ position: "relative", margin: "auto"  }}>
        <Chart
          chartData={chartData}
          location="dice!"
          legendPosition="bottom"
          bayes={bayesData}
        />
      </div>
      <div className="table">
        <Table cla1={cla1Data} cla2={cla2Data} cla3={cla3Data} bayes={bayesData} />
      </div>
    </div>
  );
}

export default Coin;
