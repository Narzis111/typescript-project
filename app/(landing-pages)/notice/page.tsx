import Hero from "@/app/components/Hero";
import Line from "@/app/components/Line";
import HeroForm from "@/app/components/HeroForm";
import Paginate from "@/app/components/Pagination";
import skyfaced from "../../../public/skyfaced.jpg";

function Notice() {
  return (
    <>
      <header className="flex flex-col gap-y-4 bg-[#CCCCFF] px-4 pb-10">
        <Hero image={skyfaced}>
          <Line />
          <h1 className="hero-heading">
            <span className="text-[#ffb200]">notice</span> board
          </h1>
          <HeroForm />
        </Hero>
      </header>

      <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
        <div className="h-auto w-full overflow-hidden rounded-2xl border border-transparent pb-6 shadow-lg">
          <Table />
          <Paginate />
        </div>
      </main>
    </>
  );
}

export default Notice;

const Table = () => {
  return (
    <div>
      <table className="mb-6 w-full rounded-lg border border-[#FFB200] text-sm">
        <thead className="bg-[#FFB200]">
          <tr>
            <th className="py-6">SL</th>
            <th className="">Notice Title</th>
            <th className="">Upload Data</th>
            <th className="">Status</th>
            <th className="">View</th>
          </tr>
        </thead>

        <tbody className="border border-[#FFB200] text-center">
          <tr className="odd:bg-[#FAEFD8] even:bg-white">
            <td className="border-r border-r-[#FFB200] py-6">
              <span className="rounded bg-[#FFB200] px-2 py-1 font-semibold">
                1
              </span>
            </td>
            <td className="border-r border-r-[#FFB200]">Notice Title</td>
            <td className="border-r border-r-[#FFB200]">2023-10-20</td>
            <td className="border-r border-r-[#FFB200]">
              <span className="rounded-full bg-[#05FF0080] px-4 py-1">
                Ongoing
              </span>
            </td>
            <td className="border-r border-r-[#FFB200]">
              <button className="rounded bg-[#FFB200] px-6 py-2 text-sm font-semibold uppercase">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
