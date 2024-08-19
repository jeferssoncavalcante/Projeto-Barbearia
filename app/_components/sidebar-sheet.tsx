import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { quickSearchOptions } from "./_constants/quicksearch";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const SidebarSheet = () => {
    return ( 
            <SheetContent className="overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <div className="py-5 border-b flex items-center justify-between border-solid gap-3">
                    <h2 className="text-lg font-bold">Olá, faça seu login!</h2>
                    <Dialog>
                        <DialogTrigger>
                            <Button size="icon">
                                <LogInIcon/>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[90%]">
                            <DialogHeader>
                                <DialogTitle>Faça Login na Plataforma</DialogTitle>
                                <DialogDescription>
                                    Conecte-se Usando Sua Conta do Google.
                                </DialogDescription>
                            </DialogHeader>
                            <Button variant="outline" className="gap-1 font-bold">
                                <Image alt="Fazer Login com Google" src="/google.svg" width={18} height={18}/>Google
                            </Button>
                        </DialogContent>
                    </Dialog>
                    {/*<Avatar>
                        <AvatarImage src="https://github.com/shadcn.png"/>
                    </Avatar>
                    <div>
                        <p className="font-bold">Jeferson Cavalcante</p>
                        <p className="text-xs">jeferson.mdc@hmail.com</p>
                    </div>*/}
                </div>

                <div className="flex flex-col gap-2 border-b border-solid py-5">
                    <SheetClose asChild>
                        <Button className="justify-start gap-2" variant="ghost" asChild>
                            <Link href="/">
                                <HomeIcon size={18}/>Inicio
                            </Link>
                        </Button>
                    </SheetClose>
                    <Button className="justify-start gap-2" variant="ghost"> 
                        <CalendarIcon size={18}/>Agendamentos
                    </Button>
                </div>

                    <div className="flex flex-col gap-2 py-5 border-b border-solid">
                        {quickSearchOptions.map((option) =>(
                            <Button key={option.title} className="justify-start gap-2" variant="ghost"> <HomeIcon size={18}/>
                                <Image alt={option.title} src={option.imageUrl} height={18} width={18}/> {option.title}
                            </Button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2 py-5">
                        <Button className="justify-start gap-2" variant="ghost"> <LogOutIcon size={18}/>Logout</Button>
                    </div>
            </SheetContent>
     );
}
 
export default SidebarSheet;