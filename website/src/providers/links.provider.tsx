import { createContext, FC, useContext, useEffect, useState } from "react";
import { getFirestore, where, collection, onSnapshot, query } from "firebase/firestore";
import { Link, LinksContext as ILinksContext } from "../types";
import { AuthContext } from "./auth.provider";

export const LinksContext = createContext<ILinksContext>({
  links: [],
  loading: true,
});

const LinksProvider: FC = (props) => {
  const { roles } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    async function getLinks() {
      try {
        const linksRef = collection(getFirestore(), "links")
        const linksQueryPermissions = query(linksRef, where("permissions", "array-contains-any", [...roles, "GUEST"]), where("active", "==", true))
        onSnapshot(linksQueryPermissions, (snapshot) => {
          setLoading(true);
          setLinks(snapshot.docs.map((e) => e.data()) as Link[]);
          setLoading(false);
        }, (error) => {
          console.log(error)
          setLoading(false);
        })
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log(error)
        }
      }
    }
    getLinks();
  }, [roles]);

  return (
    <LinksContext.Provider value={{ links, loading }}>
      {props.children}
    </LinksContext.Provider>
  );
};

export default LinksProvider;
