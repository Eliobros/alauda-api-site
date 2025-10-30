// app/docs/layout.tsx
// Layout da documentação com sidebar

import DocsSidebar from '@/components/DocsSidebar';
import Header from '@/components/Header';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 p-8 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
}
