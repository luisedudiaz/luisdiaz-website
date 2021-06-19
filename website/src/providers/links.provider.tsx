import { createContext, FC, useContext, useEffect, useState } from "react";
import { firestore } from "../utils/firebase.utils";
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
        firestore()
          .collection("links")
          .where("permissions", "array-contains-any", [...roles, "GUEST"])
          .where("active", "==", true)
          .onSnapshot(
            (snapshot) => {
              setLoading(true);
              setLinks(snapshot.docs.map((e) => e.data()) as Link[]);
              setLoading(false);
            },
            (error) => {
              setLoading(false);
            }
          );
      } catch (e) {
        console.log(e.message);
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
