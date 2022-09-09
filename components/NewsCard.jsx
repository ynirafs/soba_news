export default function NewsCard({ image, title, description, url, author }) {
    return (
        <div className="border border-gray-300 shadow-lg rounded-lg overflow-auto lg:h-[50rem]">
            {image
                ? <img className="object-cover object-center w-full h-52 rounded-tl-lg rounded-tr-lg border-b border-gray-300 lg:h-80" src={ image } alt={ image } />
                : <img className="object-cover object-center w-full h-52 rounded-tl-lg rounded-tr-lg border-b border-gray-300 lg:h-80" src="/no_image.png" alt={ image } />
            }
            

            <div className="my-8 px-6">
                <h1 className="mt-4 text-xl font-semibold text-gray-800 text-justify">
                    { title }
                </h1>

                <p className="mt-2 text-gray-500 text-lg font-medium text-justify">
                    { description }
                </p>

                <div className="flex flex-wrap items-center justify-between mt-8">
                    {author 
                        ? <p className="text-sm text-gray-500 px-2 py-1 border border-gray-500 rounded-full">{ author }</p> 
                        : <p className="hidden">{ author }</p> 
                    }
                    
                    <a href={ url } target="_blank" className="inline-block text-blue-500 underline hover:text-blue-400">もっと見る</a>
                </div>
            </div>
        </div>
    )
}