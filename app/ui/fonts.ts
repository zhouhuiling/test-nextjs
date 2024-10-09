
//这里加载谷歌字体，由于网络原因，可能导致加载缓慢，影响整个项目的编译运行
import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});