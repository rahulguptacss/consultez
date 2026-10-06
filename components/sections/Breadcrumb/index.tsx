import Link from 'next/link';
import { BreadcrumbProps } from '../../types';

export default function Breadcrumb({ title, breadcrumb }: BreadcrumbProps) {
  return (
    <section className="bg-[#411516] px-5 py-14 text-white">
      <div className="mx-auto max-w-[1180px]">
        <h1 className="font-serif text-[40px]">{title}</h1>
        <div className="mt-3 flex flex-wrap gap-2 text-[14px] text-white/80">
          {breadcrumb.map((item, index) => (
            <span key={item.label} className="flex items-center gap-2">
              {item.href ? <Link href={item.href} className="hover:text-white">{item.label}</Link> : <span className="text-[#f3e6c8]">{item.label}</span>}
              {index < breadcrumb.length - 1 && <span>/</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
