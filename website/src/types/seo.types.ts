export type Meta = JSX.IntrinsicElements["meta"];

export type SeoProps = {
  title?: string;
  description?: string;
  lang?: string;
  meta?: Meta[] | undefined;
}
