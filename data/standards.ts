export type StandardDoc = {
  id: string;
  slug: string; // URL 경로용 (예: rfc-6749)
  code: string;
  title: string;
  category: "Network" | "Web" | "Auth" | "Language";
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
    summary: "HTTP 메서드(GET, POST 등)와 상태 코드의 정확한 의미 정의.",
    link: "https://datatracker.ietf.org/doc/html/rfc7231",
  },
];
