import Image from "next/image";
import { motion } from "framer-motion";

export default function QuemSomos() {
  return (
    <div className="text-neutral-100 px-2 pl-3 pt-8 flex flex-col justify-center w-full">
      <h1 className="text-center text-3xl">Um pouco sobre a <strong>comunidade</strong></h1>
      <p className="text-lg pt-14 sm:pt-10 px-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos corporis
        qui minima non praesentium dolorum labore quas ea harum consequatur at
        ad quam nisi rem, libero iste debitis accusantium consectetur iusto
        maxime quaerat. Recusandae dicta in omnis porro, dignissimos ab
        consequuntur provident non suscipit minima eveniet minus veniam
        accusamus hic unde vel amet animi doloremque illum incidunt placeat. Aut
        soluta ducimus dignissimos quos magni laboriosam veritatis vero
        cupiditate similique recusandae.
      </p>
      <div className="relative w-full max-w-[600px] h-[300px] aspect-[3/2] mx-auto ">
        <Image
          className="object-contain object-center sm:mt-10"
          src="/community.jpg"
          alt="Foto do encontrão de famílias"
          fill
        />
      </div>
    </div>
  );
}
