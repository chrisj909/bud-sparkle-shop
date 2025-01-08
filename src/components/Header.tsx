import { Logo } from "./header/Logo";
import { MainNav } from "./header/MainNav";
import { CartButton } from "./header/CartButton";
import { CategoryNav } from "./header/CategoryNav";

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#E5D5C0]/95 backdrop-blur-md border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <Logo />
              <MainNav />
            </div>
            <div className="flex items-center gap-8">
              <CartButton />
            </div>
          </div>
        </div>
      </header>
      <div className="border-t border-gray-300 bg-[#E5D5C0]/80">
        <div className="container mx-auto px-4">
          <CategoryNav />
        </div>
      </div>
    </>
  );
};