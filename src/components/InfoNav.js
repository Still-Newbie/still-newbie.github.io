import { Card } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Link,
} from "@material-ui/core";
import { GitHub, Mail, Phone } from "@material-ui/icons";
import { useEffect, useState } from "react";
import setting from "../data/Info.json";
import ErrorAlertModal from "./ErrorAlertModal";

const useStyles = makeStyles((theme) => ({
  prifilebar: {
    width: "300px",
    height: "100%",
    position: "fixed",
    left: "0",
    top: "70px",
  },
  profileimg: {
    display: "block",
    width: "200px",
    height: "200px",
    borderRadius: "100px",
    margin: "0 auto",
    marginTop: "50px",
  },
  blinktext: {
    textAlign: "center",
    color: "#f35626",
    backgroundImage: "-webkit-linear-gradient(92deg, #f35626, #feab3a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    WebkitAnimation: "hue 5s infinite linear",
  },
  contantLink: {
    cursor: "pointer",
    textDecoration: "none",
  },
}));

const materialIcon = (iconName) => {
    switch (iconName) {
      case "Phone":
        return <Phone />;
      case "GitHub":
        return <GitHub />;
      case "Mail":
        return <Mail />;
      default:
        return "";
    }
}

const InfoNav = () => {
    const styles = useStyles();
    const [err, setErr] = useState(false);
    const [contact, setContact] = useState([]);

    const callAPI = async () => {
        try {
          const result = await (
            await fetch(setting.apihost + "contact", {
              method: "POST"
            })
          ).json();
          if (!result || result.isErr) {
            setErr(true);
          } else {
            setContact(result.data);
          }
        } catch (e) {
          setErr(true);
          console.log("삼천원짜리 서버가 말썽일으키는 중");
        }
    }

    useEffect(() => {
        callAPI();
    }, [])

    return (
      <>
        <Card className={styles.prifilebar}>
          <img src="img/photo.png" alt="Hi!" className={styles.profileimg} />
          <h1 className={styles.blinktext}>구직중</h1>
          <List>
            {!err
              ? contact.map((ct) => {
                  return (
                    <ListItem key={ct.SEQ}>
                      <ListItemIcon>{materialIcon(ct.ICON)}</ListItemIcon>
                      {ct.LINK ? (
                        <Link
                          href={ct.LINK}
                          target="_blank"
                          style={{ cursor: "pointer", textDecoration: "none" }}
                        >
                          <ListItemText primary={ct.TITLE} />
                        </Link>
                      ) : (
                        <ListItemText primary={ct.TITLE} />
                      )}
                    </ListItem>
                  );
                })
              : () => (
                  <>
                    <ListItem key={1}>
                      <ListItemIcon>{materialIcon("Mail")}</ListItemIcon>
                      <ListItemText primary={"whane94@gmail.com"} />
                    </ListItem>
                    <ListItem key={2}>
                      <ListItemIcon>{materialIcon("GitHub")}</ListItemIcon>
                      <Link
                        href={"https://github.com/Still-Newbie"}
                        target="_blank"
                        style={{ cursor: "pointer", textDecoration: "none" }}
                      >
                        <ListItemText primary={"Still-Newbie"} />
                      </Link>
                    </ListItem>
                    <ErrorAlertModal />
                  </>
                )}
          </List>
        </Card>
      </>
    );
}

export default InfoNav;