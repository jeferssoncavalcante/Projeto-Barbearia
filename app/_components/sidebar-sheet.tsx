"use client"

import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { quickSearchOptions } from "./_constants/quicksearch";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { signOut, useSession } from "next-auth/react";
import SignInDialog from "./singin-dialog";

const SidebarSheet = () => {
    const { data } = useSession()
    const handleLogoutClick = () => signOut()

    return ( 
            <SheetContent className="overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <div className="py-5 border-b flex items-center justify-between border-solid gap-3">
                    
                    {data?.user ? (
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src={data?.user?.image ?? ""}/>
                            </Avatar>
                            <div>
                                <p className="font-bold">{data.user.name}</p>
                                <p className="text-xs">{data.user.email}</p>
                            </div>
                        </div>
                    ): (
                        <>
                            <h2 className="text-lg font-bold">Olá, faça seu login!</h2>
                            <Dialog>
                                <DialogTrigger>
                                    <Button size="icon">
                                        <LogInIcon/>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[90%]">
                                    <SignInDialog/>
                                </DialogContent>
                            </Dialog>
                        </>
                    )}
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
                            <SheetClose key={option.title} asChild>
                                <Button key={option.title} className="justify-start gap-2" variant="ghost" asChild>
                                    <Link href={`/barbershops?service=${option.title}`}>
                                        <Image alt={option.title} src={option.imageUrl} height={18} width={18}/> {option.title}
                                    </Link>
                                </Button>
                            </SheetClose>
                        ))}
                    </div>

                    {data?.user && (
                        <div className="flex flex-col gap-2 py-5">
                            <Button className="justify-start gap-2" variant="ghost" onClick={handleLogoutClick}> <LogOutIcon size={18}/>Logout</Button>
                        </div>
                    )}
            </SheetContent>
     );
}
 
export default SidebarSheet;