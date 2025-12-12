export type StandardDoc = {
  id: string;
  slug: string; // URL 경로용 (예: rfc-6749)
  code: string;
  title: string;
  category: "Network" | "Web" | "Auth" | "Language" | "Infra";
  summary: string;
  link: string; // 공식 원문 링크
};

export const standards: StandardDoc[] = [
  {
    id: "1",
    slug: "rfc-6749",
    code: "RFC 6749",
    title: "OAuth 2.0 Authorization Framework",
    category: "Auth",
    summary: "인증과 권한 부여의 분리. Access Token 발급 프로세스 정의.",
    link: "https://datatracker.ietf.org/doc/html/rfc6749",
  },
  {
    id: "2",
    slug: "rfc-7231",
    code: "RFC 7231",
    title: "HTTP/1.1 Semantics and Content",
    category: "Web",
    summary: "HTTP 메서드와 상태 코드의 의미를 정의한 문서.",
    link: "https://datatracker.ietf.org/doc/html/rfc7231",
  },
  {
    id: "3",
    slug: "ecma-262",
    code: "ECMA-262",
    title: "ECMAScript Language Specification",
    category: "Language",
    summary: "자바스크립트의 동작 원리와 문법을 정의한 공식 명세.",
    link: "https://tc39.es/ecma262/",
  },
  {
    id: "4",
    slug: "rfc-8259",
    code: "RFC 8259",
    title: "JSON Data Interchange Format",
    category: "Web",
    summary: "데이터 교환의 표준 JSON 문법 인코딩 규칙.",
    link: "https://datatracker.ietf.org/doc/html/rfc8259",
  },
  {
    id: "5",
    slug: "rfc-4122",
    code: "RFC 4122",
    title: "A UUID URN Namespace",
    category: "Infra",
    summary: "고유 식별자 UUID의 생성 규칙과 버전별 차이점.",
    link: "https://datatracker.ietf.org/doc/html/rfc4122",
  },
  {
    id: "6",
    slug: "rfc-1918",
    code: "RFC 1918",
    title: "Address Allocation for Private Internets",
    category: "Network",
    summary: "사설 IP 주소 대역(10.x, 192.168.x)의 정의와 사용 이유.",
    link: "https://datatracker.ietf.org/doc/html/rfc1918",
  },
];
