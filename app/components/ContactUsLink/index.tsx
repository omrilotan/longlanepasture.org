import { NavigationLink } from "../navigation";

export const ContactUsLink = ({ children }: { children?: React.ReactNode }) => (
	<NavigationLink to="email">{children || "contact us"}</NavigationLink>
);
