import { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { PageListProps } from "types";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { common } from "@mui/material/colors";

library.add(fas);

const PageList = styled("div")(() => ({
  ".active": {
    ".MuiTypography-root, .MuiListItemIcon-root": {
      color: "rgba(0,0,0,.5)",
    }
  },
  "a": {
    textDecoration: "none",
  },
  ".MuiListItem-root:hover": {
    ".MuiTypography-root, .MuiListItemIcon-root": {
      color: "rgba(0,0,0,.5)",
    }
  },
  ".MuiTypography-root, .MuiListItemIcon-root": {
    color: "rgba(255,255,255,0.8)",
    fontWeight: "bold",
  },
}))

const PageListElement: FC<PageListProps> = ({
  name,
  path,
  icon,
  prefix,
}: PropsWithChildren<PageListProps>) => {
  return (
    <PageList>
      <NavLink to={path} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
        <ListItem sx={{ px: 0, py: 0.5 }}>
          <ListItemIcon sx={{ justifyContent: "flex-end", mr: "0.75rem" }}>
            <FontAwesomeIcon icon={[prefix, icon]} />
          </ListItemIcon>
          <ListItemText sx={{ color: common.white }} primary={name} />
        </ListItem>
      </NavLink>
    </PageList>
  );
};

export default PageListElement;
