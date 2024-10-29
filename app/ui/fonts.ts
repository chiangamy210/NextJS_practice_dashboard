import { Inter, Lusitana } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"],
  preload: false,
  weight: ["400", "700"],
});
