import ProposalWrapper from "@/components/proposals/ProposalWrapper";
import Textarea from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";

export default function GettingStarted() {
    return (
        <>
            <ProposalWrapper>
                <div className="flex items-center gap-8">
                    <div className="w-1/2">
                        <div className={'flex justify-between items-center gap-6 mb-3'}>
                            <h3 className={'text-[18px] font-semibold'}>Introduction</h3>
                            <div className={'flex items-center text-primary'}>
                                <Checkbox id={'startIntro'}/><Label htmlFor={'startIntro'}
                                                                    className={'ml-2'}>Include?</Label>
                            </div>
                        </div>

                        <Textarea>
                            {`
                                            <p>We are prepared, once the project is set to begin, to start working on your project immediately. NSS will work to achieve a mutually satisfying proposal in regards to pricing and the work to be performed. Please contact NewSunSEO any time you wish to discuss this proposal further. We will contact you after submitting this proposal to follow up on any questions you may have.<br />
                        &nbsp;</p>
                        <p>We will continue working until you are completely satisfied and at no time will you be handed over any aspect of this project unless completely satisfied (though this may increase the cost).&nbsp;<br />
                        &nbsp;</p>
                        <p>Please note this estimate may change due to needs/ concerns/ wants of the client (s) = (Firm) not known at this time, changed at a later date or not included in the scope of work set forth in this proposal due to the client (s) = (firm) making additions or changes at a date occurring after the submission or acceptance of this proposal. This also includes the cost of the web site increasing due to client (s) wanting to add more than is proposed herein and/ or extend the amount of time needed to create the web site above the amount of cost and / or hour(s) proposed within this proposal.&nbsp;<br />
                        &nbsp;</p>
                        <p><b>Circumstances that may change the final cost are:</b></p>
                        <ul>
                            <li>Changing or adding to the layout / design of the site once the layout / design becomes an XHTML / CSS-coded web site (your-domain.newunseo.com)</li>
                            <li>Accepting this proposal and wanting aspects added to the web site that increase the amount of time needed to complete the web site.&nbsp; For example, a proposal is accepted for 15 hour(s) of work, but a feature is added which would make the total time spent on the site 20 hour(s), then the estimated price in this proposal will increase to the total amount of time spent.&nbsp; In this example that would become 20 billable hour(s).&nbsp; We will make you aware of this before we do the work.&nbsp; We will not surprise you with additional hour(s) at the end of the project</li>
                            <li>Changing the copy on the pages more than once per page.&nbsp; Please submit your copy only when you are sure of what you want to be there</li>
                            <li>Adding aspects / features not mentioned at the acceptance of this proposal.</li>
                            <li>Changing pictures more than once</li>
                            <li>Changing the navigation after it is added to the site</li>
                            <li>Asking us to change things once they have been done once (accepted and added to the site).&nbsp; If we do something you are not happy with then we will work until you are happy within reason.&nbsp; If we do something you are happy with, then see something somewhere else and want to make changes then that will add to the cost of the site</li>
                        </ul>
                    `}
                        </Textarea>
                    </div>
                    <div className="w-1/2">
                        <div className={'flex justify-between items-center gap-6 mb-3'}>
                            <h3 className={'text-[18px] font-semibold'}>Signature</h3>
                            <div className={'flex items-center text-primary'}>
                                <Checkbox id={'startSign'}/><Label htmlFor={'startSign'}
                                                                   className={'ml-2'}>Include?</Label>
                            </div>
                        </div>

                        <Textarea>
                            {`
                               <p style="text-align: right"><b>!TODAY!</b></p>
                                <p>Sincerely,</p>
                                <p><img height="43" alt="" width="150" src="/sign-small.gif" /></p>
                                <p>Joseph Farrar</p>
                                <p>CMO</p>
                                <p>NewSunSEO Inc.</p>
                            `}

                        </Textarea>
                    </div>
                </div>

            </ProposalWrapper>
        </>
    )
}

