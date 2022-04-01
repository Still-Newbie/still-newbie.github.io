import { Toolbar, Button, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import dummy from "../data/Menu.json";
import ContactModal from "./ContactModal";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "70px",
    background: "linear-gradient(130deg, #5B247A, 60%, #1BCEDF)", // ""
    flexGrow: "0",
    flexShrink: "0",
  },
  icons: {
    color: "white",
  },
  body: {
    marginTop: "70px",
  },
  menubtn: {
    color: "white",
    display: "flex",
  },
  switchdiv: {
    display: "inline-flex",
    flexGrow: "0",
    flexShrink: "0",
  },
  emtpyflex: {
    display: "inline-flex",
    flexGrow: "1",
    flexShrink: "1",
  },
  jobname: {
      lineHeight: "2.5",
  }
}));

const Header = ({ menuchange, isDev }) => {
  const [open, setOpen] = useState(false);
//   const [isNotDev, setIsNotDev] = useState(!isDev);
  const [menus, setMenus] = useState(dummy.menu1);

  const styles = useStyles();

  const positionChange = () => {
    setMenus(() => {
      if (isDev !== true) return dummy.menu1;
      else return dummy.menu2;
    });
    menuchange();
  };

//   useEffect(() => {
//     setMenus(() => {
//       if (isDev === true) return dummy.menu1;
//       else return dummy.menu2;
//     });
//     menuchange()
//   }, [isDev]);

  const popOpen = () => {
    setOpen(true);
  };

  return (
    <Toolbar className={styles.appbar}>
      {menus.map((menu) => (
        <>
          <Button
            key={menu.id}
            className={styles.menubtn}
            onClick={() => {
              if (menu.file === "Contact") popOpen();
              else window.location.replace(menu.file);
            }}
          >
            {menu.name}
          </Button>
          {menu.file === "Contact" && (
            <ContactModal key={menu.id + "pop"} open={open} setOpen={setOpen} />
          )}
        </>
      ))}
      <div className={styles.emtpyflex}></div>
      <div className={styles.switchdiv}>
        <span className={styles.jobname}>개발자</span>
        <Switch checked={!isDev} onChange={positionChange} />
        <span className={styles.jobname}>영상편집자</span>
      </div>
    </Toolbar>
  );
};

export default Header;
