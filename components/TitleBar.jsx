export default function TitleBar({title, children}) {
    return (
        <>
<div className="px-8 py-4 flex flex-row justify-between items-center border-b-[1px] border-gray-100 ">
    <div>
        <h2 className={'text-2xl font-semibold'}>{title ? title :'Page title'}</h2>
    </div>
    <div>
        {children}
    </div>
</div>
        </>
    )
}

