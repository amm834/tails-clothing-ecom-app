export default function Category() {
    return (
        <>
            <div className="mt-4 grid min-h-full  grid-cols-1 grid-rows-2 gap-4 sm:px-4 lg:grid-cols-2 lg:grid-rows-1">
                <div className="relative flex rounded-xl overflow-hidden">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div
                        className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
                        <h2 className="text-lg font-medium text-white text-opacity-75">Self-Improvement</h2>
                        <p className="mt-1 text-2xl font-medium text-white">Journals and note-taking</p>
                        <a
                            href="#"
                            className="mt-4 rounded-md bg-white py-2.5 px-4 text-sm font-medium text-gray-900 hover:bg-gray-50"
                        >
                            Shop now
                        </a>
                    </div>
                </div>
                <div className="relative flex rounded-xl overflow-hidden">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div
                        className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
                        <h2 className="text-lg font-medium text-white text-opacity-75">Desk and Office</h2>
                        <p className="mt-1 text-2xl font-medium text-white">Work from home accessories</p>
                        <a
                            href="#"
                            className="mt-4 rounded-md bg-white py-2.5 px-4 text-sm font-medium text-gray-900 hover:bg-gray-50"
                        >
                            Shop now
                        </a>
                    </div>
                </div>
                <div className="relative flex rounded-xl overflow-hidden">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div
                        className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
                        <h2 className="text-lg font-medium text-white text-opacity-75">Self-Improvement</h2>
                        <p className="mt-1 text-2xl font-medium text-white">Journals and note-taking</p>
                        <a
                            href="#"
                            className="mt-4 rounded-md bg-white py-2.5 px-4 text-sm font-medium text-gray-900 hover:bg-gray-50"
                        >
                            Shop now
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}
