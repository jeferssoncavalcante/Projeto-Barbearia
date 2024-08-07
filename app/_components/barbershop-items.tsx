import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import { Image } from "lucide-react";

interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return ( 
        <Card>
            <CardContent>
                {/*IMAGE*/}
                <div className="relative h-[159px]">
                    <Image alt={barbershop.name} fill className="object-cover" src={barbershop.imageUrl}/>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;