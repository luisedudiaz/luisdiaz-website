import { FC, PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { Meta, SeoProps } from "../../../types";

const SEO: FC<SeoProps> = ({
  title = "Not Found",
  description,
  lang = "en",
  meta,
  children,
}: PropsWithChildren<SeoProps>) => (
  <Helmet
    title="Luis Díaz"
    titleTemplate={`%s | ${title}`}
    meta={
      meta
        ? ([
          {
            name: `description`,
            content: description
              ? description
              : "Web site created using create-react-app",
          },
        ] as Meta[]).concat(meta)
        : []
    }
  >
    <html lang={lang} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />

    <link rel="icon" href="favicon.png" />
    <link rel="apple-touch-icon" href="favicon.png" />
    <link rel="manifest" href="manifest.json" />
    {children}
  </Helmet>
);

export default SEO;
