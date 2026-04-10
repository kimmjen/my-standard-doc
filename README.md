# Dev Standard Archive

개발의 근간이 되는 공식 문서들을 기록하고 정리하는 정적 문서 사이트입니다.

RFC, ECMAScript 명세, CVE 보안 권고, W3C 표준 등을 한국어로 정리하여 보관합니다.

## 기술 스택

- **Framework**: Next.js 16 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui (new-york)
- **Content**: MDX (next-mdx-remote + remark-gfm)
- **Package Manager**: pnpm
- **Deploy**: GitHub Pages (GitHub Actions)

## 시작하기

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # 정적 빌드 (out/)
pnpm lint       # ESLint
```

## 문서 추가 방법

1. `data/standards.ts`에 항목 추가 (slug, category, date, createdAt 등)
2. `content/<slug>.mdx` 파일 생성 (frontmatter: title, date)
3. slug는 두 파일에서 반드시 일치해야 함

```typescript
// data/standards.ts 예시
{
  id: "42",
  slug: "rfc-XXXX",
  code: "RFC XXXX",
  title: "문서 제목",
  category: "Web",        // Network | Web | Auth | Language | Infra | Security
  summary: "한 줄 요약",
  date: "2026-01-01",     // 원본 발행일
  createdAt: "2026-04-10", // 사이트 등록일 (New 뱃지 기준)
  link: "https://...",    // 공식 원문 링크
}
```

## 문서 카테고리

| 카테고리 | 설명 | 예시 |
|---------|------|------|
| Network | 네트워크 프로토콜 | TCP, DNS, QUIC |
| Web | 웹 표준 및 HTTP | HTTP/2, HTTP/3, WebSocket, WCAG |
| Auth | 인증/인가 | OAuth 2.0, JWT, TOTP, WebAuthn |
| Language | 프로그래밍 언어 명세 | ECMAScript, Temporal API |
| Infra | 인프라/개발 도구 | OpenAPI, SemVer, 12 Factor |
| Security | 보안 취약점/권고 | CVE, Node.js Security Release |

## 프로젝트 구조

```
app/
  page.tsx              # 홈 (검색 + 카드 목록)
  docs/[slug]/page.tsx  # 문서 상세 (MDX 렌더링)
components/
  search-view.tsx       # 검색/필터 + 카드 리스트 (클라이언트)
  ui/                   # shadcn/ui 컴포넌트
data/
  standards.ts          # 문서 목록 데이터 (StandardDoc[])
content/
  *.mdx                 # 각 문서의 본문 콘텐츠
```

## 배포

master 브랜치에 머지되면 GitHub Actions가 자동으로 빌드 및 GitHub Pages 배포를 수행합니다.

## 향후 추가 고려 사항

### 콘텐츠

- OWASP Top 10 (2021/2025) - 웹 애플리케이션 보안 위험 목록
- RFC 9457 - RFC 7807의 후속, HTTP API 에러 응답 표준 개정
- OpenID Connect (OIDC) - OAuth 2.0 위에 구축된 인증 레이어
- GraphQL Specification - REST 대안 API 쿼리 언어 명세
- RFC 7049 / RFC 8949 (CBOR) - 바이너리 JSON 대안 직렬화 포맷
- Content Security Policy (CSP) Level 3 - XSS 방지 브라우저 보안 정책
- Deno / Bun 보안 권고 - Node.js 외 런타임 보안 이슈 추적

### 기능

- 카테고리별 필터링 UI (탭 또는 드롭다운)
- 다크/라이트 모드 토글 버튼 (현재 system 기본)
- 문서 목록 정렬 (최신순, 카테고리순)
- Claude API 연동 자동 문서 업데이트 파이프라인
- RSS 피드 생성

## Git 규칙

- main에 직접 커밋 금지
- 흐름: 이슈 생성 -> 브랜치 -> 작업 -> PR -> 머지
- 브랜치명: `feat/이슈번호-설명` 또는 `fix/이슈번호-설명`
