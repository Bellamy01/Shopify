

const Footer = ()=>{
    return (
        <footer className="bg-black pt-1">
            <div className="mx-auto container px-6">
                <div className="flex flex-col items-center">
                    <div className="py-6">
                        <p className="mb-6 test-sm text-primary-2 font-bold">
                            © {new Date().getFullYear()} Bel-Corps
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;