import {Panel} from "@root";
import {NextPageProps} from "nextjs-tools";

export default function ({}: NextPageProps) {
	const ls: number[] = [];
	for (let i = 0; i < 3; i++) {
		while (true) {
			const pick = Math.floor(Math.random() * 10);

			let idx = -1;
			for (let j = 0; j < ls.length; j++) {
				if (pick === ls[j]) {
					idx = j;
					break;
				}
			}

			if (idx !== -1) continue;
			
			ls.push(pick);
			break;
		}
	}

	return (
		<Panel>
			<h4>nextjs-admin-toolkit</h4>
		</Panel>
	);
}
