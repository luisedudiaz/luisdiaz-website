import { FC, useState, useEffect } from "react";
import { styled, } from "@mui/material/styles";
import { Divider, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { common } from "@mui/material/colors";
import { doc, getFirestore, onSnapshot } from "@firebase/firestore";
import { User, Header } from "../../../../../types/user.types";
import { Social } from "../../../../../types/social.types";

import SocialsList from "../socials-list";
import PagesList from "../pages-list";

const DrawerBody = styled('div')(({ theme }) => ({
    color: common.white,
    ".blog-name": {
        fontWeight: "bold",
        fontSize: "1.5rem",
        color: common.white,
        margin: "1.5rem auto",
        "a": {
            color: common.white,
            textDecoration: "none"
        }
    },
    ".blog-bio": {
        margin: "0 auto 1rem auto",
        textAlign: "center",
        fontSize: ".875rem",
    },
    ".blog-socials": {
        margin: "auto",
        textAlign: "center",
    }
}))


const Body: FC = () => {
    const [header, setHeader] = useState<Header | null>();
    const [socials, setSocials] = useState<Social[]>([]);
    useEffect(() => {
        const getHeaderInfo = async () => {
            const uid = process.env.REACT_APP_UID!
            onSnapshot(doc(getFirestore(), "users", uid), snapshot => {
                const user = snapshot.data() as User;
                setHeader(user.header);
                setSocials(user.socials);
            })
        };
        getHeaderInfo()
        return () => {
            setHeader(null);
            setSocials([]);
        }
    }, [])

    return <DrawerBody>
        <Toolbar>
            <Typography variant="h6" noWrap component="div" className="blog-name" >
                <Link to="/">Luis Díaz</Link>
            </Typography>
        </Toolbar>
        <Toolbar>
            <Typography variant="inherit" component="div" className="blog-bio">
                {header?.bio}
            </Typography>
        </Toolbar>
        <Toolbar className="blog-socials">
            <SocialsList socials={socials} />
        </Toolbar>
        <Divider sx={{ my: 2 }} />
        <Toolbar>
            <PagesList />
        </Toolbar>
    </DrawerBody>
}

export default Body