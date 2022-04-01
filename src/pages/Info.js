import { TableBody, TableCell, TableContainer, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";
import setting from "../data/Info.json";
import ErrorAlertModal from '../components/ErrorAlertModal';

const Info = ({ jobtype }) => {
  const [err, setErr] = useState(false);
  const [infoData, setInfoData] = useState([]);

  const callAPI = async () => {
    try {
      const result = await (
        await fetch(setting.apihost + "info", {
          method: "POST",
          body: JSON.stringify({
            type: jobtype,
          }),
        })
      ).json();
      console.log(result);
      if (!result || result.isErr) {
        setErr(true);
      } else {
        setInfoData(result.data);
      }
    } catch (e) {
      setErr(true);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  if(err)
  return (
    <h3>API Server is sleeping...</h3>
  )

  else
  return (
    <TableContainer>
      <TableBody>
        {infoData.map((data) => (
          <TableRow key={data.SEQ}>
            <TableCell align="center">{data.TITLE}</TableCell>
            <TableCell>{data.VALUE}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default Info;