export interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
  hover: boolean;
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuProps {
  items: { icon: React.ReactNode; text: string; link: string }[];
  children: React.ReactNode;
}