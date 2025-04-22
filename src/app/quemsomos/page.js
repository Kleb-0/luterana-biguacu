import Image from "next/image";
import { motion } from "framer-motion";

export default function QuemSomos() {
  return (
    <div className="text-neutral-900 lg:px-60 px-2 pl-3 pt-8 flex flex-col justify-center w-full">
      <h1 className="text-center text-3xl font-semibold">Um pouco sobre a comunidade</h1>
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
      <div className="flex justify-center mx-4 sm:mt-0 mt-4">
        <Image
          className="object-contain object-center sm:mt-10 rounded-lg"
          src="/community.jpg"
          alt="Foto do encontrão de famílias"
          width={800}
          height={400}
        />
      </div>
    </div>
  );
}
