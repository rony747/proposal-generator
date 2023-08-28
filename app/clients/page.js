import TitleBar from "@/components/TitleBar";
import ClientList from "@/components/ClientList";
import ClientForm from "@/components/ClientForm";

export default function ClientPage() {
    return (
        <>
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

