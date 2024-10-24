import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";

export default function BotaoVoltar() {
  return  (
    <Link href={"/user"}>
      <IoArrowBackCircle className="fixed text-cor5 md:w-20 md:h-20 h-10 w-10 m-0 left-0 right-0"/>
    </Link>
  )
}