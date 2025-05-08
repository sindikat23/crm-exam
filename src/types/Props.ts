export interface IMaskInput {
    mask: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
    placeholder?: string
  }