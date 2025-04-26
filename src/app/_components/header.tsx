import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/"> 
        <a className="hover:underline">
        Programming Languages<a/>
      </Link>
      .
    </h2>
  );
};

export default Header;
