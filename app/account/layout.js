import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

/*
Chúng ta sẽ nhận được các phần tử con ở cùng cấp độ ở trong cấu trúc tệp của chúng ta. 
Trang "page.js" này và tất cả các trang "page.js lồng nhau". Vì vậy tất cả nội dung
này sẽ trở thành con của bố cục "layout.js" tức là {children}
*/
