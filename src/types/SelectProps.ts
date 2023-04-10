type Item = {
  name: string;
  value: string;
};

export default interface SelectProps {
  labelId: string;
  id: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  items: Item[];
  className: string;
}
