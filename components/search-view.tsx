"use client";

import { useState } from "react";
import Link from "next/link";
import { StandardDoc } from "@/data/standards";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink } from "lucide-react";

export default function SearchView({ docs }: { docs: StandardDoc[] }) {
    const [query, setQuery] = useState("");

    // 실시간 필터링
    const filteredDocs = docs.filter((doc) =>
        doc.title.toLowerCase().includes(query.toLowerCase()) ||
        doc.code.toLowerCase().includes(query.toLowerCase()) ||
        doc.summary.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* 검색창 */}
            <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="문서 제목, 코드, 내용 검색..."
                    className="pl-10 h-12 text-lg"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {/* 결과 리스트 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocs.map((doc) => (
                    <Card key={doc.id} className="flex flex-col h-full hover:border-primary transition-colors">
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start mb-1">
                                <Badge variant="secondary" className="mb-0">{doc.category}</Badge>
                                <span className="text-xs font-mono text-muted-foreground">{doc.code}</span>
                            </div>
                            <CardTitle className="text-xl leading-snug">{doc.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow pb-3">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {doc.summary}
                            </p>
                        </CardContent>
                        <CardFooter className="flex gap-2 pt-0">
                            <Button asChild variant="default" className="w-full">
                                {/* 내부 상세 페이지로 이동 */}
                                <Link href={`/docs/${doc.slug}`}>내 정리 보기</Link>
                            </Button>
                            <Button asChild variant="outline" size="icon" title="공식 문서 보기">
                                <Link href={doc.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
                {filteredDocs.length === 0 && (
                    <div className="col-span-full text-center py-20 text-muted-foreground">
                        <p className="text-lg">검색 결과가 없습니다.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
