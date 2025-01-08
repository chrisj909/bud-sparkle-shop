import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <div className="flex items-center h-[40px]">
        <span className="text-[#39FF14] font-bold text-3xl tracking-tight leading-none">H</span>
        <span className="text-[#39FF14] font-bold text-3xl tracking-tight leading-none">H</span>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-sm text-white font-medium leading-tight">Smoke Shop</p>
        <p className="text-sm text-white font-medium leading-tight">CBD + Vape</p>
      </div>
    </Link>
  );
};