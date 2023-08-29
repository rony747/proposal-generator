import ProposalWrapper from "@/components/proposals/ProposalWrapper";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export default function UserDetails() {
    return (
        <>
            <ProposalWrapper title={'Contact Details'}>
              <div className="flex justify-start  gap-8">
                  <div className={'w-1/2'}>
                      <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                        <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                        <Input className={'w-3/4'} disabled type={'text'} value={'New Sun Seo'}/>
                      </div>
                      <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                          <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                          <Input className={'w-3/4'} disabled type={'text'} value={'New Sun Seo'}/>
                      </div>
                      <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                          <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                          <Input className={'w-3/4'} disabled type={'text'} value={'New Sun Seo'}/>
                      </div>
                      <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                          <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                          <Input className={'w-3/4'} disabled type={'text'} value={'New Sun Seo'}/>
                      </div>
                      <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                          <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                          <Input className={'w-3/4'} disabled type={'text'} value={'New Sun Seo'}/>
                      </div>
                      <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                          <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                          <Input className={'w-3/4'} disabled type={'text'} value={'New Sun Seo'}/>
                      </div>

                  </div>
                  <div className={'w-1/2'}>
                      <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                          <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                          <Input className={'w-3/4'} disabled type={'text'} value={'New Sun Seo'}/>
                      </div>
                      <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                          <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                          <Input className={'w-3/4'} disabled type={'text'} value={'New Sun Seo'}/>
                      </div>
                      <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                          <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                          <Input className={'w-3/4'} disabled type={'text'} value={'New Sun Seo'}/>
                      </div>
                      <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                          <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                          <Input className={'w-3/4'} disabled type={'text'} value={'New Sun Seo'}/>
                      </div>
                      <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                          <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                          <Input className={'w-3/4'} disabled type={'text'} value={'New Sun Seo'}/>
                      </div>

                  </div>
              </div>
            </ProposalWrapper>
        </>
    )
}

