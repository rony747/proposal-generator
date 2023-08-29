import Link from "next/link";
import {Frame, Home, Settings, Users} from "lucide-react";


export default function Sidebar({children}) {
    return (
        <div className={'flex'}>
            <div className={'fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'}>
                <div className="flex flex-col items-center">
                    <Link href={'/'}>
                        <div className={'bg-purple-800 text-white p-3 rounded-lg inline-block'}>
                            <Frame/>
                        </div>
                    </Link>
                    <span className={'border-b-[1px] border-gray-200 w -full p-2'}></span>
                    <Link href={'/'}>
                        <div
                            className={'bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'}>
                            <Home/>
                        </div>
                    </Link>

                    <Link href={'/clients'}>
                        <div
                            className={'bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'}>
                            <Users/>

                        </div>
                    </Link>
                    <Link href={'/settings'}>
                        <div
                            className={'bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'}>
                            <Settings/>

                        </div>
                    </Link>
                </div>
            </div>
            <main className={'ml-20 w-full'}>{children}</main>
        </div>
    )
}

