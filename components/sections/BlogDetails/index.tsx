import Link from 'next/link';
import { BlogDetailsProps } from '../../types';

export default function BlogDetails({ data, related }: BlogDetailsProps) {
  return (
    <section className="bg-[#f7f3ee] px-5 py-14">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_300px]">
        <article className="rounded-[24px] bg-white p-6 sm:p-8">
          <img src={data.image} alt="" className="h-[340px] w-full rounded-[18px] object-cover" />
          <p className="mt-5 text-[13px] font-medium text-[#c6a36b]">{data.date}</p>
          <h2 className="mt-2 font-serif text-[34px] leading-tight text-[#2b2422]">{data.title}</h2>
          <p className="mt-4 text-[16px] leading-8 text-[#6b615c]">{data.excerpt}</p>
          <p className="mt-4 text-[16px] leading-8 text-[#6b615c]">
            We keep the advice close to the work: what to measure, what to delay, and which decision actually changes the next quarter. The same approach sits behind every FinTrust engagement.
          </p>
        </article>
        <aside className="h-fit rounded-[24px] bg-white p-5">
          <h3 className="text-[16px] font-semibold text-[#2b2422]">More Articles</h3>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block text-[14px] font-medium text-[#411516]">{item.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
