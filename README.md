# admin tool kit for next.js

* 어드민 제작용 테마
* ~~모듈을 export 하기 위해서 alias (tsconfig.json) 적극 사용하기 -> tsc-alias 가 상대경로로 만들어 주므로 반드시 사용해야 한다.~~
    * 단, ts, tsx 이외의 파일은 alias 되지 않으므로 반드시 ***상대경로***를 사용하여야 한다.
    * tsc-alias 가 레포지토리를 중첩해서 사용할 경우 각각의 레포지토리의 alias 정보가 모두 필요하므로 상대경로 만 사용하는 것으로 결정
    * src 에 ts와 js 중첩하니 이 레포지토리를 사용하는 프로젝트에서 컴파일시 @types/* 도 필요하게 됨. dependency 에 @types/* 필요한 라이브러리의 경우 같이 포함해준다.
* ts, tsx 등은 모두 src 디렉토리에 있어야 한다.
* tag 업데이트시 package.json 의 version 과 동기화 되므로 주의 하기. 커밋 전에 수정해야 한다.
* ~~tailwind 는 사용하되 postcss 말고 tailwindcss 를 사용해서 실시간으로 css 가 작성되도록 한다~~
    * ~~export 시 tailwind 중복을 방지하기 위해서 한쪽만 사용한다.~~
    * 이 레포지토리를 이용하는 상위 레포지토리에서 내부로 스타일로 입력하여 디자인 할 시 내부에 같은 클래스가 없을 때 스타일이 지정되지 않는 문제가 생김
      | tailwind 를 외부에서 전체에서 관리하는 방식으로 변경 함
    * 상위 레포지토리에 스타일에 다음과 같은 경로를 추가해 주어야 한다. css 로하는 방식밖에 못찾음. scss 에서 같은 효과를 내는 명령어가 있다면 교체 하는 것이 좋을 것 같음.
    ~~~css
        @source "node_modules/nextjs-admin-toolkit";
    ~~~
* 디렉토리 규칙
    * ./src[대분류]/[소분류]
    * 2단 을 유지. 소분류의 경우 모든 이름이 unique 하도록 명명한다.
    * 외부에서 불러올때 <대분류.소분류> 도 편리하지만 한번에 <소분류> 불러오는 것도 중요한것 같음
* 타입의 선언의 경우 최대한의 중첩을 막기위해 ./src/index 에서 작성 하도록 한다.

# 사용시 주의사항

* ~~root.layout 에서 스타일 추가해 주어야 한다.~~ (0.0.23 에서 삭제)

# 해야 할 것

* ~~tsc-alias 에서 ts, tsx 이외의 import 된 파일은 자동으로 변경해주지 않는다. 해결책 찾아보기~~
    * ts, tsx 파일은 상대경로, 절대 경로 모두 사용 가능
    * 단, scss, svg, png 등의 파일은 상대경로만 사용한다. 절대경로로 사용하고 싶을시 ts 에서 export 하는 방식을 사용한다.
        * svg, png 등 이미지
      ~~~typescript jsx
      import SVG from "./svg.svg";
      export default {SVG};
      ~~~
        * 스타일 예제
      ~~~typescript jsx
      import React, {ReactNode} from "react";
      import "./index.scss";
        
      interface Props {
        children?: ReactNode;
      }
        
      export default function ({children}: Readonly<Props>) {
        return <>{children}</>;
      }
      ~~~

* form 에서 server action 가기전에 client-side 에서 미리 regexp 로 validate 하는 기능 추가하기
    * 현 (25.03.31) 시점 regexp 는 server action 에서 확인후 처리하고 있음
    * form 자체에서 validate 하는 기능 있을 수 있을 것 같음 -> input 의 attribute 에서 require 시 알림창 나옴

# style (*.scss)

* 너무 많은 스타일시트의 추가를 방지하기 위해서 다음과 같은 규칙을 지킨다.
    1. ./src/[name] name 의 갯수만큼만 생성한다.
    2. name 이후의 디렉토리를 따라서 prefix 를 붙혀서 classname 을 만든다.

# tag 명명법

### major.minor.patch

1. major: 하위호환을 보장 하지 않음
2. minor: 하위호환을 최대한 보장하나 몇몇 기능의 인터페이스가 변경 될 가능성이 있음
3. patch: 인터페이스의 변화 없이 내부적 기능 개선

# asset

* https://www.flaticon.com/icon-fonts-most-downloaded?weight=regular&type=uicon