import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Career Blog | CoverAI',
  description: 'Expert advice on resumes, cover letters, and job applications',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <nav className="flex items-center px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/jobapply-logo.jpg"
              alt="JobApply Logo"
              width={450}
              height={99}
              priority
              className="h-auto w-auto"
              style={{ 
                objectFit: "contain",
                maxWidth: "450px",
                maxHeight: "99px"
              }}
              quality={100}
              unoptimized
            />
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
} 