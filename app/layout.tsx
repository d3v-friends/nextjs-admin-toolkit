import {
	FlatForm,
	FlatIconStar,
	FlatMenuBurger,
	FlatMenuDots,
	FlatRefresh,
	FlatRocketLunch,
	FlatSubscriptionAlt,
	FlatTableLayout,
	FlatTextInputLeft,
	FlatWindowRestore,
	HTML,
	Section3,
} from "@root";
import {NextLayoutProps} from "nextjs-tools";
import Header from "./_comp/header";

export default async function ({children}: NextLayoutProps) {
	return (
		<HTML>
			<Section3
				top={<Header />}
				header={{
					iconSrc: FlatMenuBurger,
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
								iconSrc: FlatSubscriptionAlt,
								href: "/button",
							},
							{
								title: "Modal",
								iconSrc: FlatWindowRestore,
								href: "/modal",
							},
							{
								title: "Pager",
								iconSrc: FlatMenuDots,
								href: "/pager",
							},
							{
								title: "Table",
								iconSrc: FlatTableLayout,
								href: "/table",
							},
							{
								title: "Value",
								iconSrc: FlatTextInputLeft,
								href: "/value",
							},
							{
								title: "Animation",
								iconSrc: FlatRefresh,
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
								iconSrc: FlatRocketLunch,
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
