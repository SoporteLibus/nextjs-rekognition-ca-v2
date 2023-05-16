import React, { SetStateAction } from "react";

export interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
  setAuth?: React.Dispatch<SetStateAction<boolean>>;
}

export interface MenuProps {
  items: {
    icon: React.ReactNode;
    text: string;
    link: string;
  }[];
  children: React.ReactNode;
  setAuth?: React.Dispatch<SetStateAction<boolean>>;
}