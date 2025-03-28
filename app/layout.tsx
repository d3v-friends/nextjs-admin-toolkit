import {Flat, FlatForm, FlatIconStar, HTML, Section3} from "@root";
import {NextLayoutProps} from "nextjs-tools";
import Header from "./_comp/header";

export default async function ({children}: NextLayoutProps) {
	return (
		<HTML>
			<Section3
				top={<Header />}
				header={{
					iconSrc: Flat.MenuBurger,
					children: "Title",
					href: "/",
				}}
				asideMenus={[
					{
						title: "UI Components",
						collapsed: true,
						submenus: [
							{
								title: "Button",
								iconSrc: Flat.SubscriptionAlt,
								href: "/button",
							},
							{
								title: "Modal",
								iconSrc: Flat.WindowRestore,
								href: "/modal",
							},
							{
								title: "Pager",
								iconSrc: Flat.MenuDots,
								href: "/pager",
							},
							{
								title: "Table",
								iconSrc: Flat.TableLayout,
								href: "/table",
							},
							{
								title: "Value",
								iconSrc: Flat.TextInputLeft,
								href: "/value",
							},
							{
								title: "Animation",
								iconSrc: Flat.Refresh,
								href: "/animation",
							},
							{
								title: "Icon",
								iconSrc: FlatIconStar,
								href: "/icon",
							},
						],
					},
					{
						title: "Server action",
						collapsed: true,
						submenus: [
							{
								title: "action",
								iconSrc: Flat.RocketLaunch,
								href: "/action",
							},
							{
								title: "form",
								iconSrc: FlatForm,
								href: "/form",
							},
						],
					},
				]}>
				{children}
			</Section3>
		</HTML>
	);
}
