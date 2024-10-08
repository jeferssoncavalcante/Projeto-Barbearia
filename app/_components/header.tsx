import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import SidebarSheet from "./sidebar-sheet";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="flex flex-row items-center justify-between p-5">
                <Link href="/">
                    <Image alt="FSW Barber" src="/Logo.svg" height={18} width={120}/>
                </Link>
                
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon/>
                        </Button>
                    </SheetTrigger>
                    <SidebarSheet/>
                </Sheet>
            </CardContent>
        </Card>
    )
}
 
export default Header;