import { PortfolioProps } from '../../types';

export default function Portfolio({ data }: PortfolioProps) {
  return (
    <section className="bg-[#f7f3ee] px-5 py-16">
      <div className="mx-auto max-w-[1180px]">
        <span className="text-[12px] font-semibold tracking-[0.16em] text-[#c6a36b] uppercase">{data.subtitle}</span>
        <h2 className="mt-3 max-w-[560px] font-serif text-[36px] leading-tight text-[#2b2422] sm:text-[42px]">
          {data.title_line1} <span className="text-[#411516]">{data.title_highlight}</span>
        </h2>
        <p className="mt-3 max-w-[520px] text-[16px] leading-7 text-[#6b615c]">{data.description}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[22px] bg-white">
              <img src={item.image} alt="" className="h-[220px] w-full object-cover" />
              <div className="p-5">
                <p className="text-[12px] font-semibold tracking-wide text-[#c6a36b] uppercase">{item.category}</p>
                <h3 className="mt-1 text-[18px] font-semibold text-[#2b2422]">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
