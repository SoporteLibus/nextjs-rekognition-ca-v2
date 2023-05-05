export interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

export interface MenuProps {
  items: { icon: React.ReactNode; text: string; link: string }[];
  children: React.ReactNode;
}