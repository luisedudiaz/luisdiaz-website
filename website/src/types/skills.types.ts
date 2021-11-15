import { IconName, IconPrefix } from "@fortawesome/free-solid-svg-icons"

export type Icons = {
    name: IconName;
    prefix: IconPrefix;
    color: string;
}
export type Skills = {
    title: string;
    description: string;
    icons: Array<Icons>;
}