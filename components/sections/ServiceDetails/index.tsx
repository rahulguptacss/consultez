import Link from 'next/link';
import { ServiceDetailsProps } from '../../types';

export default function ServiceDetails({ data, allServices }: ServiceDetailsProps) {
  return (
    <section className="bg-[#f7f3ee] px-5 py-14">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_300px]">
        <article className="rounded-[24px] bg-white p-6 sm:p-8">
          <img src={data.image} alt="" className="h-[320px] w-full rounded-[18px] object-cover" />
          <h2 className="mt-6 font-serif text-[34px] text-[#2b2422]">{data.title}</h2>
          <p className="mt-3 text-[16px] leading-7 text-[#6b615c]">{data.description}</p>
          <ul className="mt-6 space-y-3">
            {data.points.map((point) => (
              <li key={point} className="rounded-xl bg-[#f7f3ee] px-4 py-3 text-[15px] text-[#3d342f]">{point}</li>
            ))}
          </ul>
        </article>
        <aside className="h-fit rounded-[24px] bg-white p-5">
          <h3 className="text-[16px] font-semibold text-[#2b2422]">All Services</h3>
          <ul className="mt-4 space-y-2">
            {allServices.map((service) => (
              <li key={service.link}>
                <Link href={service.link} className={`block rounded-xl px-3 py-2 text-[14px] ${service.title === data.title ? 'bg-[#411516] text-white' : 'bg-[#f7f3ee] text-[#3d342f]'}`}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
