import { Input } from "./_components/ui/input";
import Header from "./_components/header"
import { Button } from "./_components/ui/button";
import { Badge } from "./_components/ui/badge";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
export default function Home() {
  return (
    <div>
        <Header/>
        <div className="p-5">
          {/*TEXT*/}
          <h2 className="text-xl font-bold">Olá, Jeferson!</h2>
          <p>Quarta-Feira, 07 de Agosto.</p>
          {/*SEARCH*/}
          <div className="flex items-center gap-2 mt-6">
            <Input placeholder="Faça sua busca..."/>
            <Button>
              <SearchIcon/>
            </Button>
          </div>
          {/*BANNER*/}
          <div className="relative h-[150px] w-full mt-6 ">
            <Image alt="Agende nos melhores com FSW Barber" src="/banner-01.png" fill className="object-cover rounded-xl"/>
          </div>
          {/*AGENDAMENTO*/}
          <Card className="mt-6">
            <CardContent className="flex justify-between p-0">
              {/*ESQUERDA*/}
              <div className="flex flex-col gap-2 py-5 pl-5">
                  <Badge className="w-fit">Confirmado</Badge>
                  <h3 className="font-semibold">Corte de Cabelo</h3>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
                    </Avatar>
                    <p className="text-sm">Barbearia FSW</p>
                  </div>
              </div>
              {/*DIREITA*/}
              <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
                <p className="text-sm">Agosto</p>
                <p className="text-2xl">07</p>
                <p className="text-sm">20:00</p>
              </div>
            </CardContent>
          </Card>
        </div>
    </div>
  );
}
