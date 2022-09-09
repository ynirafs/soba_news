export default function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <a href="/">
                            <img src="/soba_logo.png" alt="soba logo" />
                        </a>
                    </div>

                    <div>
                        <button type="button" className="px-3 py-2 text-xl font-medium text-white bg-violet-600 transition-colors duration-300 transform hover:bg-violet-500 rounded-lg focus:outline-none">
                            <span>漢字</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
