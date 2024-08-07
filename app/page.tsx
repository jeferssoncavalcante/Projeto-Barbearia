import { Input } from "./_components/ui/input";
import Header from "./_components/header"
import { Button } from "./_components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div>
        <Header/>
        <div className="p-5">
          <h2 className="text-xl font-bold">Olá, Jeferson!</h2>
          <p>Quarta-Feira, 07 de Agosto.</p>
          <div className="flex items-center gap-2 mt-6">
            <Input placeholder="Faça sua busca..."/>
            <Button>
              <SearchIcon/>
            </Button>
          </div>
          <div className="relative h-[150px] w-full mt-6 ">
            <Image alt="Agende nos melhores com FSW Barber" src="/banner-01.png" fill className="object-cover rounded-xl"/>
          </div>
        </div>
    </div>
  );
}
