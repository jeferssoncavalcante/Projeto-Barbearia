import { Barbershop, BarbershopService } from "@prisma/client";

export interface ItemProps {
    service: BarbershopService
    barbershop: Barbershop
}