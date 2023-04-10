export default interface InputProps {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  onClick: () => void;
  className: string;
}
