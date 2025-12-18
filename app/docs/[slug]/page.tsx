import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

// 정적 페이지 생성을 위한 경로 설정 (GitHub Pages 필수)
export async function generateStaticParams() {
    const contentDir = path.join(process.cwd(), "content");
    // content 폴더가 없으면 빈 배열 반환
    if (!fs.existsSync(contentDir)) return [];

    const files = fs.readdirSync(contentDir);
    return files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));
}

export default async function DocDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return notFound();
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(fileContent);

    return (
        <article className="container mx-auto py-12 px-4 max-w-3xl">
            <Button asChild variant="ghost" className="mb-6 pl-0 hover:bg-transparent">
                <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    ← 목록으로 돌아가기
                </Link>
            </Button>

            <header className="mb-10 pb-6 border-b">
                <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
                <p className="text-sm text-gray-500">{data.date}</p>
            </header>

            {/* 마크다운 스타일링 using Tailwind typography capability via prose class */}
            <div className="prose dark:prose-invert max-w-none leading-relaxed">
                <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
            </div>
        </article>
    );
}
