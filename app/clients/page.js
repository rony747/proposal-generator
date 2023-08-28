import TitleBar from "@/components/TitleBar";
import ClientList from "@/components/ClientList";
import ClientForm from "@/components/ClientForm";
import {Toaster} from "react-hot-toast";

export default function ClientPage() {
    return (
        <>
            <Toaster/>
            <TitleBar title={"All Clients"}>
                <ClientForm/>
            </TitleBar>

            <div className="p-6">

                <div>
                    <ClientList/>
                </div>

            </div>

        </>
    )
}

