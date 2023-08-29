import ProposalWrapper from "@/components/proposals/ProposalWrapper";
import Script from "next/script";
import Textarea from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";

const defaultTexts = [

]
export default function ScopeOfWork() {
    return (
        <>
            <ProposalWrapper title={'Scope of Work - Firm'}>
                <div className="flex items-center gap-8">
                    <div className="w-1/2">
                        <div className={'flex justify-between items-center gap-6 mb-3'}>
                            <h3 className={'text-[18px] font-semibold'}>Introduction</h3>
                            <div className={'flex items-center text-primary'}>
                                <Checkbox id={'scopeIntro'}/><Label htmlFor={'scopeIntro'}
                                                                    className={'ml-2'}>Include?</Label>
                            </div>
                        </div>

                        <Textarea>
                            {`Client may be asked to assist creating or approve the content NSS creates for the pages of
                                    the
                                    web site, the company's history and any other knowledge specific to the company or
                                    related to
                                    the web site. Client is not required to provide content, but providing content will be
                                    helpful and more efficient.`}

                        </Textarea>
                    </div>
                    <div className="w-1/2">
                        <div className={'flex justify-between items-center gap-6 mb-3'}>
                            <h3 className={'text-[18px] font-semibold'}>Methodology</h3>
                            <div className={'flex items-center text-primary'}>
                                <Checkbox id={'scopeMeth'}/><Label htmlFor={'scopeMeth'}
                                                                    className={'ml-2'}>Include?</Label>
                            </div>
                        </div>

                        <Textarea>
                            {`
                                <ul>
                                    <li>Provide access to existing web site if requested by NSS</li>
                                    <li>Provide list of email address needed</li>
                                    <li>Provide photos / images if possible (We can help with this & have access to stock
                                        photos for approx. $15 - $20 each photo
                                    </li>
                                    <li>Provide content (We can help with this)</li>
                                    <li>Provide outline for navigation (We can help with this)</li>
                                </ul>
                            
                            `}

                        </Textarea>
                    </div>
                </div>

            </ProposalWrapper>

        </>

    )
}

