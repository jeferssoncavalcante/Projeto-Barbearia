import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { quickSearchOptions } from "./_constants/quicksearch";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="flex flex-row items-center justify-between p-5">
                <Image alt="FSW Barber" src="/Logo.svg" height={18} width={120}/>
                
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>

                        <div className="py-5 border-b flex items-center border-solid gap-3">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png"/>
                            </Avatar>
                            <div>
                                <p className="font-bold">Jeferson Cavalcante</p>
                                <p className="text-xs">jeferson.mdc@hmail.com</p>
                            </div>
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
                </Sheet>
            </CardContent>
        </Card>
     );
}
 
export default Header;