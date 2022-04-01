import {
  makeStyles,
  Modal,
} from "@material-ui/core";
import { useState } from "react";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    backgroundColor: "RGBA(150, 150, 150, 0.1)",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    color: "#777",
  },
}));

const ErrorAlertModal = () => {
  const styles = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(true);

  return (
    <Modal
      open={open}
      onClose={(e) => {
        setOpen(false);
      }}
      className={styles.modal}
      aria-labelledby="title"
      aria-describedby="description"
    >
      <div style={modalStyle} className={styles.paper}>
        <h3>API서버 자는중</h3>
      </div>
    </Modal>
  );
};

export default ErrorAlertModal;
