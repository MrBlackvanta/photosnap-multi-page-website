import Link from "next/link";

import { ArrowIcon } from "@/components/icons";

type ArrowLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function ArrowLink({
  href,
  className,
  children,
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`group text-label inline-flex items-center gap-4.5 uppercase ${className ?? ""}`}
    >
      <span className="v-trim-track">{children}</span>
      <ArrowIcon className="h-3.5 w-10.5 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
    </Link>
  );
}
