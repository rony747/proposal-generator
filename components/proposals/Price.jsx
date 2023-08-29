import ProposalWrapper from "@/components/proposals/ProposalWrapper";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export default function Price() {
    const today = new Date()
    return (
        <>
            <ProposalWrapper>
                <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                    <div className={'w-1/4 '}><Label className={'font-medium text-[16px]'}>Today's date:</Label></div>
                    <div className={'w-3/4'}><Input disabled type={'text'} value={today}/></div>
                </div>
                <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                    <div className={'w-1/4 '}><Label className={'font-medium text-[16px]'}>Start Date:</Label></div>
                    <div className={'w-3/4'}>
                      <Input type={'date'} />
                    </div>
                </div>
                <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                    <div className={'w-1/4 '}><Label className={'font-medium text-[16px]'}>Rate / Non SEO:</Label></div>
                    <div className={'w-3/4'}>
                        <Input type={'number'} />
                    </div>
                </div>
                <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                    <div className={'w-1/4 '}><Label className={'font-medium text-[16px]'}>SEO Rate:</Label></div>
                    <div className={'w-3/4'}>
                        <Input type={'number'} />
                    </div>
                </div>
                <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                    <div className={'w-1/4 '}><Label className={'font-medium text-[16px]'}>Hosting Rate:</Label></div>
                    <div className={'w-3/4'}>
                        <Input type={'number'} />
                    </div>
                </div>
                <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                    <div className={'w-1/4 '}><Label className={'font-medium text-[16px]'}>eCommerce Hosting Rate:</Label></div>
                    <div className={'w-3/4'}>
                        <Input type={'number'} />
                    </div>
                </div>
                <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                    <div className={'w-1/4 '}><Label className={'font-medium text-[16px]'}>Days until Project Balance-Payments are due</Label></div>
                    <div className={'w-3/4'}>
                        <Input type={'number'} />
                    </div>
                </div>

            </ProposalWrapper>
        </>
    )
}

