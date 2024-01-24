export default function defaultPageHeader(page: any) {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-theme p-32 sm:p-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            {page.title ?? 'PageHeader'}
                        </h2>
                        <span className="text-white">{page.id ?? null}</span>
                    </div>
                </div>
            </div>
        </>
    )
}