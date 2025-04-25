import {Markdown, Panel} from "@root";
import {NextPageProps} from "nextjs-tools";
import React from "react";
import Base from "./_comp/base";
import NoCloseButton from "./_comp/no-close-button";

export default async function ({}: NextPageProps) {
	return (
		<Panel>
			<Markdown className="mb-10">{body}</Markdown>

			<h4>Base</h4>
			<Base />

			<h4 className="mt-10">No close button</h4>
			<NoCloseButton />
		</Panel>
	);
}

const body = `
### Modal
* 모달 옵션

\`\`\`typescript
type options = {  
	disableCloseButton?: boolean;    
	children?: ReactNode;  
	disableEscapeKey?: boolean; 
	disableBackdrop?: boolean; 
	open: boolean;  
	onClose: () => void;  
};
\`\`\`
 
\`\`\`mermaid
graph TD;
	A-->B;
	A-->C;
	B-->D;
	C-->D;
};
\`\`\`

1. disableCloseButton: 우상단 닫기버튼을 제거한다.
2. children: 내용, 내용이 null 이면 렌더링 하지 않는다.
3. disableEscapeKey: ESC 키를 눌러도 모달을 닫지 않는다.
4. disableBackdrop: 배경을 눌러도 모달을 닫지 않는다.
5. open: 모달 스위치  
6. onClose: 닫기버튼, 또는 escape 키를 눌렀을 때 실행 할 함수
	
`;
