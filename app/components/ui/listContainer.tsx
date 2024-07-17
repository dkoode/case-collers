export default function ListContainer({children}: {children: React.ReactNode}) {
    return (
        <ul className="flex flex-col gap-y-2 md:gap-y-0 items-center md:items-start">
            {children}
        </ul>
    )
}