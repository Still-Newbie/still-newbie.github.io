import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Modal,
  Link,
} from "@material-ui/core";
import { GitHub, Mail, Phone } from "@material-ui/icons";
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

const ContactModal = (props) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const pointer = {
    cursor: "pointer",
  };

  return (
    <Modal
      open={props.open}
      onClose={(e) => {
        props.setOpen(false);
      }}
      className={classes.modal}
      aria-labelledby="title"
      aria-describedby="description"
    >
      <div style={modalStyle} className={classes.paper}>
        <h3 id="title" className={classes.title}>
          입사제안
        </h3>
        <div id="description">
          <List>
            <ListItem>
              <ListItemIcon>
                <Phone />
              </ListItemIcon>
              <Link style={pointer} to="tel:">
                <ListItemText primary="전화번호" />
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="메일주소" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <Link style={pointer} to="https://github.com/Still-Newbie">
                <ListItemText primary="Still-Newbie" />
              </Link>
            </ListItem>
            {/* <ListItem>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="이력서 보러가기" />
            </ListItem> */}
          </List>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
