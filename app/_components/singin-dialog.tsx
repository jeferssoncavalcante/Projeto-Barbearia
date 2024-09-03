import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { DialogHeader, DialogTitle, DialogDescription} from "./ui/dialog";
import Image from "next/image";

const SignInDialog = () => {
    const handleLoginWithGoogleClick = () => signIn("google")
    return ( 
        <>
            <DialogHeader>
                <DialogTitle>Faça Login na Plataforma</DialogTitle>
                <DialogDescription>
                    Conecte-se Usando Sua Conta do Google.
                </DialogDescription>
            </DialogHeader>
            <Button variant="outline" className="gap-1 font-bold" onClick={handleLoginWithGoogleClick}>
                <Image alt="Fazer Login com Google" src="/google.svg" width={18} height={18}/>Google
            </Button>
        </>
     );
}
 
export default SignInDialog;