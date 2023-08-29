export default function Sidebar2({children}) {
    return (
        <>
            <aside id="sidebar" className="flex hidden fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 w-64 h-full duration-200 lg:flex transition-width" aria-label="Sidebar">
                <div className="flex relative flex-col flex-1 pt-0 min-h-0 bg-gray-50">
                    <div className="flex overflow-y-auto flex-col flex-1 pt-8 pb-4">
                        <div className="flex-1 px-3 bg-gray-50" id="sidebar-items">
                            <ul className="pb-2 pt-1">

                                <li>
                                    <a href="https://demos.creative-tim.com/soft-ui-flowbite/" className="flex items-center py-2.5 px-4 text-base font-normal text-dark-500 rounded-lg hover:bg-gray-200 group  transition-all duration-200" sidebar-toggle-collapse="">
                                        <div className="bg-white shadow-lg shadow-gray-300  text-dark-700 w-8 h-8 p-2.5 mr-1 rounded-lg text-center grid place-items-center">


                                        </div>
                                        <span className="ml-3 text-dark-500 text-sm font-light" sidebar-toggle-item="">Dashboard</span>
                                    </a>
                                </li>


                            </ul>

                        </div>
                    </div>
                </div>

            </aside>
            {children}
        </>
    )
}

