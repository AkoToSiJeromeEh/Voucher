const tableHeadData = [
  {
    name: "NO",
  },
  {
    name: "Amount",
  },
  {
    name: "VN",
  },
  {
    name: "Date",
  },
  {
    name: "Address",
  },
  {
    name: "Payment",
  },
  {
    name: "Payment Desc",
  },
  {
    name: "Invoice",
  },
  {
    name: "Check NO",
  },
  {
    name: "Accounting",
  },
  {
    name: "Prepared By",
  },
  {
    name: "Printed Name",
  },
];

const initialCreateVoucherValues = {
  no: "",
  vn: "",
  amount: "",
  date: "",
  paymentTo: "",
  invoiceNo: "",
  checkNumber: "",
  preparedBy: "",
  descOfPayment: "",
  accounting: "",
  printedName: "",
  address: "",
};

const VoucherInfoFieldsData = [
  {
    name: "no",
    type: "number",
    label: "Number #",
    placeholder: "#12345",
  },
  {
    name: "vn",
    type: "string",
    label: "Voucher Number",
    placeholder: "07722",
  },
  {
    name: "amount",
    type: "string",
    label: "Amount",
    placeholder: "$99M",
  },
  {
    name: "date",
    type: "date",
    label: "Date",
    placeholder: "08/07/2004",
  },
  {
    name: "address",
    type: "string",
    label: "Address",
    placeholder: "1234 Asawa Ni Marie NE",
  },
  {
    name: "paymentTo",
    type: "string",
    label: "Payment To",
    placeholder: "Mr Jeje Pogi",
  },
  {
    name : "descOfPayment",
    type: "string",
    label: "Description of Payment",
    placeholder: "Mr Jeje Pogi",
  },
  {
    name: "invoiceNo",
    type: "number",
    label: "Invoice No",
    placeholder: "24425",
  },
  {
    name: "checkNumber",
    type: "number",
    label: "Check Number",
    placeholder: "22244455",
  },
  {
    name: "preparedBy",
    type: "string",
    label: "Prepared By",
    placeholder: "Mr Solis",
  },
  {
    name: "accounting",
    type: "string",
    label: "Accounting",
    placeholder: "Mrs Solis",
  },
  {
    name: "printedName",
    type: "string",
    label: "Printed name",
    placeholder: "Mrs Solis",
  },
];

//   name: "type",
//   type: "select",
//   label: "Type",
//   option: [
//     { value: "Active Materials", label: "Active Materials" },
//     { value: "Non Active", label: "None Active" },
//     { value: "Chemical", label: "Chemical" },
//   ],
// },

export { initialCreateVoucherValues, VoucherInfoFieldsData, tableHeadData };
