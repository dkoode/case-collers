export default function TabsContainer({children}: {children: React.ReactNode}) {
    return(
        <div className="flex flex-col md:flex-row md:gap-x-20 md:items-start">
            {children}
        </div>
    )
}