import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";

export default function ProposalWrapper({children, title}) {
    return (
        <>
            <div className={'bg-white p-4 mb-3'}>
                {title &&<h2 className={'font-bold text-2xl text-primary mb-4 pb-4 border-b'}>{title}</h2>}

                <div className={'mt-4'}>
                    {children}
                </div>

            </div>
        </>
    )
}

