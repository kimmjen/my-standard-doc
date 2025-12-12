import { standards } from "@/data/standards";
import SearchView from "@/components/search-view";

export default function Home() {
  return (
    <main className="container mx-auto py-12 px-4 max-w-5xl">
      <div className="mb-10 text-center space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Dev Standard Archive
        </h1>
        <p className="text-xl text-muted-foreground">
          개발의 근간이 되는 공식 문서들을 기록하고 정리합니다.
        </p>
      </div>
      <SearchView docs={standards} />
    </main>
  );
}
