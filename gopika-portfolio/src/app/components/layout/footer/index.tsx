import Link from "next/link"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto flex flex-col gap-1 px-4 sm:px-7 py-4 md:py-7">
                        <p>© 2026 Gopika S. All rights reserved.</p>
                        <p>Let&apos;s connect — <Link href={"mailto:gopika.s2310314@gmail.com"} className="hover:text-primary">gopika.s2310314@gmail.com</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
