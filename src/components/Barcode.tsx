import ReactBarcode from 'react-barcode';

type BarcodeProps = {
  value: string;
};

export const Barcode = ({ value }: BarcodeProps) => {
  return <ReactBarcode value={value} height={40} width={1} fontSize={10} />;
};
