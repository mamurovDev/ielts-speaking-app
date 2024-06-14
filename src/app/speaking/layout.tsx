import { Navigation } from "@/components";
import { BreadcrumbDemo } from "@/components/breadCrumbDemo";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
