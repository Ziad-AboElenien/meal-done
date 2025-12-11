export default function Footer() {
    return <>
        <footer className="mt-5">
            <div className="container py-5">
                <div className="row  justify-content-between gy-5 text-white">
                    <div className="col-md-6 col-sm-12">
                        <p className="fw-bold fs-3">VOTE-X</p>
                        <span className="">Making democracy accessible through secure and transparent
                            voting solutions. Our platform ensures every voice is heard
                            and every vote counts.</span>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="row row-cols-md-2 row-cols-sm-1 gy-4">
                            <div>
                            <p className="fs-5 fw-semibold">Resources</p>
                            <ul className="list-unstyled ">
                                <li>Help Center</li>
                                <li>Privacy center</li>
                                <li>Terms of Service</li>
                                <li>Security</li>
                            </ul>
                        </div>
                        <div>
                            <p className="fs-5 fw-semibold">Company</p>
                            <ul className="list-unstyled ">
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Contact</li>
                                <li>Partners</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}