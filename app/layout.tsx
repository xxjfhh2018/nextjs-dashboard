import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
// 下面是一个函数组件，这个函数组件接受一个children参数，这个参数是一个React节点
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} antialiased`}>{children}
        {/*  在JSX 中classname 相当于普通html文件中的class*/}
      </body>
    </html>
  );
}
{/*  这里的inter.className是一个css类名，这个类名是通过css-in-js生成的，这个类名会被添加到body标签上，这样就可以使用inter这个字体了*/}
