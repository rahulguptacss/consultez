import Link from 'next/link';
import { ThankYouProps } from '../../types';

export default function ThankYou({ data }: ThankYouProps) {
  return (
    <section className="bg-[#f7f3ee] px-5 py-24">
      <div className="mx-auto max-w-[640px] rounded-[28px] bg-white px-8 py-14 text-center">
        <p className="text-[13px] font-semibold tracking-[0.16em] text-[#c6a36b] uppercase">{data.title}</p>
        <h1 className="mt-3 font-serif text-[40px] text-[#411516]">{data.title_highlight}</h1>
        <p className="mt-4 text-[16px] leading-7 text-[#6b615c]">{data.description}</p>
        <Link href={data.button.href} className="mt-7 inline-flex rounded-full bg-[#411516] px-6 py-3 text-[15px] font-semibold text-white">
          {data.button.text}
        </Link>
      </div>
    </section>
  );
}
