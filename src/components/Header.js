import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import dummy from "../data/Menu.json";
import ContactModal from "./ContactModal";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "70px",
  },
  icons: {
    color: "white",
  },
  body: {
    marginTop: "70px",
  },
}));

const menus = dummy.menu;

const Header = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const popOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <div>Titlte</div>
        <div>
          {menus.map((menu) => (
            <>
              <Button
                key={menu.id}
                onClick={() => {
                  if (menu.file === "Contact") popOpen();
                  else window.location.replace(menu.file);
                }}
              >
                {menu.name}
              </Button>
              {menu.file === "Contact" && (
                <ContactModal
                  key={menu.id + "pop"}
                  open={open}
                  setOpen={setOpen}
                />
              )}
            </>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
