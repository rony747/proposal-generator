import Services from "@/components/proposals/Services";
import Price from "@/components/proposals/Price";
import UserDetails from "@/components/proposals/UserDetails";
import ClientDetails from "@/components/proposals/ClientDetails";
import ScopeOfWork from "@/components/proposals/ScopeOfWork";
import Resources from "@/components/proposals/Resources";
import GettingStarted from "@/components/proposals/GettingStarted";
import Agreement from "@/components/proposals/Agreement";
import AgreementConfirm from "@/components/proposals/AgreementConfirm";

export default function Proposal() {
    return (
        <div className={'p-4'}>
           <form>
               <Services />
               <Price/>
               <UserDetails />
               <ClientDetails />
               <ScopeOfWork/>
               <Resources/>
               <GettingStarted />
               <Agreement />
               <AgreementConfirm />
           </form>
        </div>
    )
}

