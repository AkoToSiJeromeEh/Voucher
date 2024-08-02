import * as Yup from "yup";

const CreateVoucherSchema = Yup.object().shape({
  no: Yup.number().required("Number  is required"),
  vn: Yup.string().required("VN  is required"),
  amount: Yup.string().required("Amount  is required"),
  date: Yup.string().required("Date  is required"),
  paymentTo: Yup.string().required("Description of Payment  is required"),
  invoiceNo: Yup.number().required("Invoice  is required"),
  checkNumber: Yup.number().required("checkNumber  is required"),
  preparedBy: Yup.string().required("Prepared By  is required"),
  accounting: Yup.string().required("Accounting  is required"),
  printedName: Yup.string().required("Printed Name By  is required"),
  address : Yup.string().required('Address is Required'),
  descOfPayment : Yup.string().required('Description of payment is Required')
});

export { CreateVoucherSchema };
