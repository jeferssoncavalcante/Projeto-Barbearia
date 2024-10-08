import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ServiceItem from "@/app/_components/service-item";
import PhoneItem from "@/app/_components/phone-item";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import SidebarSheet from "@/app/_components/sidebar-sheet";

interface BarbershopsPageProps {
    params: {
        id: string
    }
}

const BabershopPage = async ({ params }: BarbershopsPageProps) => {
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true,
        }
    })

if (!barbershop){
    return notFound()
}

    return ( 
        <div>
            {/*IMAGE*/}
            <div className="relative h-[250px] w-full">
                <Image alt={barbershop.name} src={barbershop.imageUrl} fill className="object-cover"/>

                <Button size="icon" variant="secondary" className="absolute left-4 top-4" asChild>
                    <Link href="/">
                        <ChevronLeftIcon/>
                    </Link>
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline" className="absolute right-4 top-4">
                            <MenuIcon/>
                        </Button>
                    </SheetTrigger>
                    <SidebarSheet/>
                </Sheet>
            </div>

            <div className="p-5 border-b border-solid">
                <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
                <div className="mb-2 flex items-center gap-2">
                    <MapPinIcon className="text-primary" size={18}/>
                    <p className="text-sm">{barbershop?.address}</p>
                </div>

                <div className="mb-2 flex items-center gap-2">
                    <StarIcon className="fill-primary text-primary" size={18}/>
                    <p className="text-sm">5,0 (499 Avaliações)</p>
                </div>
            </div>

            {/*DESCRIPTION*/}
            <div className="space-y-2 border-b border-solid p-5">
                <h2 className="text-xs font-bold uppercase text-gray-400">sobre nós</h2>
                <p className="text-justify text-sm">{barbershop?.description}</p>
            </div>

            {/*SERVICES*/}
            <div className="p-5 space-y-3 border-b border-solid">
                <h2 className="text-xs font-bold uppercase text-gray-400">serviços</h2>
                <div className="space-y-3">
                    {barbershop.services.map((service) => 
                        <ServiceItem key={service.id} service={service} barbershop={barbershop}/>
                    )}
                </div>
            </div>
            
            {/*CONTACTS*/}
            <div className="p-5 space-y-3">
                {barbershop.phones.map(phone => (
                    <PhoneItem key={phone} phone={phone}/>
                ))}
            </div>
        </div>
     );
}
 
export default BabershopPage;