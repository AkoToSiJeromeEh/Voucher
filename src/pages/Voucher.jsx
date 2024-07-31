import { Section, TableHead, TableRow, TableCont } from "../components";
import { tableHeadData, fakeTableData } from "../data";

export const Voucher = () => {
  const voucherTableRowElement = fakeTableData?.map((data, index) => (
    <TableRow key={index} tableRowData={Object.values(data)} />
  ));
  return (
    <main className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr]  text-black w-full ">
      <Section style=" row-span-full w-[15rem] max-w-full"></Section>
      <Section style=" h-[5rem] max-h-full  ">
        <h1 className="text-2xl font-semibold">Distburstment Voucher</h1>
      </Section>
      <Section style="  bg-white flex flex-col gap-5   w-full    ">
      <div className="flex flex-row gap-5 self-end mb-6">
          <select className="w-fit p-2 rounded-md bg-transparent border-2 border-gray-400">
            <option defaultValue>Filter Categories</option>
            <option value="">Product 1</option>
            <option value="">Product 2</option>
            <option value="">Product 3</option>
            <option value="">Product 4</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="rounded-md bg-transparent border-2 border-gray-400 p-2"
          />

          <div
            className="bg-accent-dark py-1 px-2 items-center justify-center gap-1 rounded-md flex w-24 flex-row text-white font-medium"
            aria-label="Add Product"
            role="button"
            tabIndex={0}
          >
            <span>Add</span>
          </div>
        </div>
        <TableCont>
          <TableHead tableData={tableHeadData} />
          {voucherTableRowElement}
        </TableCont>
      </Section>
    </main>
  );
};
