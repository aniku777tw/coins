import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import "../css/Table.css";

function createData(name,tp, fn, tn, fp, tpr, fpr, acc, auc) {
  return {name, tp, fn, tn, fp, tpr, fpr, acc, auc };
}



export default function BasicTable({cla1,cla2,cla3,bayes}) {
    const rows = [
        createData(bayes['bayes'][0],cla1['clas1'][0], cla1['clas1'][1], cla1['clas1'][2], cla1['clas1'][3], cla1['clas1'][4],cla1['clas1'][5],cla1['clas1'][6],cla1['clas1'][7]),
        createData(bayes['bayes'][1],cla2['clas2'][0], cla2['clas2'][1], cla2['clas2'][2], cla2['clas2'][3], cla2['clas2'][4],cla2['clas2'][5],cla2['clas2'][6],cla2['clas2'][7]),
        createData(bayes['bayes'][2],cla3['clas3'][0], cla3['clas3'][1], cla3['clas3'][2], cla3['clas3'][3], cla3['clas3'][4],cla3['clas3'][5],cla3['clas3'][6],cla3['clas3'][7]),
      ];
  return (
    <div className="table">
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Boun.</TableCell>
              <TableCell align="right">tp</TableCell>
              <TableCell align="right">fn</TableCell>
              <TableCell align="right">tn</TableCell>
              <TableCell align="right">fp</TableCell>
              <TableCell align="right">tpr</TableCell>
              <TableCell align="right">fpr</TableCell>
              <TableCell align="right">acc</TableCell>
              <TableCell align="right">auc</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.tp}</TableCell>
                <TableCell align="right">{row.fn}</TableCell>
                <TableCell align="right">{row.tn}</TableCell>
                <TableCell align="right">{row.fp}</TableCell>
                <TableCell align="right">{row.tpr}</TableCell>
                <TableCell align="right">{row.fpr}</TableCell>
                <TableCell align="right">{row.acc}</TableCell>
                <TableCell align="right">{row.auc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
