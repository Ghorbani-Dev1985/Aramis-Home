import Image from "next/image";
import Link from "next/link";

function NotFound() {
    return ( 
            <section className="container flex flex-col items-center justify-center mt-20">
    <Image
      width="500"
      height="500"
      layout="intrinsic"
      placeholder="blur"
      blurDataURL="/images/notFound/notFound.svg"
      alt="ghorbani-dev.ir"
      src="/images/notFound/notFound.svg"
      className="object-fill rounded-none mb-3"
    />
    <Link href="/" replace className='main-btn flex-center px-8 py-3'>   
        بازگشت به صفحه اصلی
    </Link>
  </section>
     );
}

export default NotFound;