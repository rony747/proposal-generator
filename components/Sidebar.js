import Link from "next/link";
import {RxSketchLogo} from "react-icons/rx";
import {FiSettings} from "react-icons/fi";
import {IoDocumentTextOutline, IoPeopleOutline} from "react-icons/io5";

export default function Sidebar({children}) {
    return (
        <div className={'flex'}>
            <div className={'fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'}>
                <div className="flex flex-col items-center">
                    <Link href={'/'}>
                        <div className={'bg-purple-800 text-white p-3 rounded-lg inline-block'}><RxSketchLogo size={20}/></div>
                    </Link>
                    <span className={'border-b-[1px] border-gray-200 w -full p-2'}></span>
                    <Link href={'/'}>
                        <div className={'bg-gray-100 text-purple-800 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'}>
                            <IoDocumentTextOutline size={24} /></div>
                    </Link>

                    <Link href={'/clients'}>
                        <div className={'bg-gray-100 text-purple-800 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'}>
                            <IoPeopleOutline size={24}  /></div>
                    </Link>
                    <Link href={'/settings'}>
                        <div className={'bg-gray-100 text-purple-800 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'}>
                            <FiSettings size={24}  /></div>
                    </Link>
                </div>
            </div>
            <main className={'ml-20 w-full'}>{children}</main>
        </div>
    )
}

