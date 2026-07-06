import { ReactNode } from "react";

export interface Benefit {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: ReactNode;
  featured?: boolean;
}

export const BENEFITS: Benefit[] = [
  {
    icon: "/icons/Building.svg",
    iconWidth: 22.5,
    iconHeight: 22.5,
    title: "Established Legacy",
    description: (
      <>
        A well-reviewed, established <strong>Silver Spring salon</strong>, now
        growing into <strong>Brooklyn, NY.</strong>
      </>
    ),
  },
  {
    icon: "/icons/Users.svg",
    iconWidth: 30,
    iconHeight: 15,
    title: "Collective Wisdom",
    description:
      "More than 80 years of combined experience across our stylists",
    featured: true,
  },
  {
    icon: "/icons/Support.svg",
    iconWidth: 25,
    iconHeight: 22.5,
    title: "Full Support",
    description:
      "HR, marketing, and booking handled for you, so you can focus on your craft.",
  },
  {
    icon: "/icons/Learning.svg",
    iconWidth: 27.5,
    iconHeight: 22.5,
    title: "Continuous Learning",
    description:
      "Paid training, weekly and monthly sessions, plus our team stylist summit",
  },
  {
    icon: "/icons/Growth.svg",
    iconWidth: 25,
    iconHeight: 15,
    title: "Career Growth",
    description:
      "Clear paths to grow, including management and creative leadership roles.",
  },
];