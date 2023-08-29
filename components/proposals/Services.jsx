import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import ProposalWrapper from "@/components/proposals/ProposalWrapper";

const services =
    [
        {
            id:'seoSetup',
            title:'Include SEO Setup'
        },
        {
            id:'seo',
            title:'Include SEO'
        },
        {
            id:'eCommerce',
            title:'Include eCommerce'
        },
        {
            id:'css',
            title:'Include CSS Re-Building'
        },
        {
            id:'webDesign',
            title:'Include Web Design'
        },
    ]

export default function Services() {
    return (
        <ProposalWrapper title={'Global Proposal Options:'}>
            <div className={'flex gap-2 items-center justify-start '}>
                {
                    services.map((service)=>{
                        return(
                            <div key={service.id} className={'px-6 py-4 bg-gray-100 flex justify-start items-center  rounded-2xl '}>
                                <Checkbox id={service.id} className={'mr-2 cursor-pointer'}  />
                                <Label htmlFor={service.id} className={'cursor-pointer'}>{service.title}</Label>

                            </div>
                        )
                    })
                }
            </div>
        </ProposalWrapper>
    )
}

