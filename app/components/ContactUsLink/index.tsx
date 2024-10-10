import { NavigationLink } from "../NavigationLink";

export const ContactUsLink = ({ children }: { children?: React.ReactNode }) => (
	<NavigationLink to="email">{children || "contact us"}</NavigationLink>
);
