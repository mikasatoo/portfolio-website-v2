interface LayoutProps {
  children: React.ReactNode;
  bgColor?: string;
}

export default function Layout({ children, bgColor }: LayoutProps) {
  return (
    <main className={`flex-grow text-base min-h-[calc(100vh-var(--navbar-height)-var(--footer-height))] ${bgColor}`}>
        {children}
    </main>
  );
}
