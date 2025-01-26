import Link from "next/link";
import IconifyIcon from "@/app/_components/wrapers/iconifyIcon";

import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="relative flex items-center justify-center bg-[url(/images/small/small-3.jpg)] bg-cover bg-right-bottom bg-no-repeat p-4 md:p-6 lg:h-screen">
        <div className="absolute inset-0 h-full w-full bg-black/60" />
        <div className="container">
          <div className="rounded-xl bg-white/20 backdrop-blur-2xl">
            <div className="grid items-center lg:grid-cols-2">
              <div className="relative order-2 p-8 text-white lg:order-1">
                <Link href="/" className="mb-10 flex items-center"></Link>
                <div className="max-w-xl">
                  <h2 className="mb-4 text-4xl font-bold capitalize">
                    Sitio en mantenimiento
                  </h2>
                  <p className="text-base font-medium text-gray-300">
                    Estamos trabajando en la mejora de nuestros servicios.
                    Pronto estaremos de vuelta. Gracias por su paciencia.
                  </p>
                </div>
              </div>
              <div className="order-1 h-full w-full p-8 lg:order-2">
                <Image
                  src={"/images/soon.png"}
                  alt="coming-soon"
                  className="rounded-lg"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
