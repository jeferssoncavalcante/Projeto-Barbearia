import { Button } from "./ui/button";
import Image from "next/image";


const SpeedSearch = () => {
    return ( 
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            <Button className="gap-2 " variant="secondary">
              <Image src="/cabelo.svg" width={16} height={16} alt="Cabelo"/>
              Cabelo
            </Button>

            <Button className="gap-2 " variant="secondary">
              <Image src="/barba.svg" width={16} height={16} alt="Cabelo"/>
              Barba
            </Button>

            <Button className="gap-2 " variant="secondary">
              <Image src="/sobrancelha.svg" width={16} height={16} alt="Cabelo"/>
              Sobrancelha
            </Button>

            <Button className="gap-2 " variant="secondary">
              <Image src="/acabamento.svg" width={16} height={16} alt="Cabelo"/>
              Acabamento
            </Button>

            <Button className="gap-2 " variant="secondary">
              <Image src="/hidratacao.svg" width={16} height={16} alt="Cabelo"/>
              Hidratação
            </Button>

            <Button className="gap-2 " variant="secondary">
              <Image src="/massagem.svg" width={16} height={16} alt="Cabelo"/>
              Massagem
            </Button>
          </div> 
     );
}
 
export default SpeedSearch;