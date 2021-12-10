{
    "name": "classpart3", //프로젝트 폴더 이름 
    "version": "1.0.0", //프로젝트 버전
    "description": "", //프로젝트 설명 
    "main": "index.js",//npm 생태계에 업로드 할 때 필요한 옵션으로, 웹사이트 만드는 작업에선 필요하지 않음
    "scripts": { //현재 프로젝트 내부에서 사용할 수 있는 스크립트 명령들
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "", //소유주
    "license": "ISC", //라이센스
    "devDependencies": { 
      //npm install 로 설치한 패키지들이 명시되는 옵션, 설치 뒤에 -D 붙인 경우
      "parcel-bundler": "^1.12.5" //설치한 패키지의 버전. 
    },
    "dependencies": { //npm install 패키지이름  뒤에 -D 안붙인 경우 
      "lodash": "^4.17.21"
    }
  }
  