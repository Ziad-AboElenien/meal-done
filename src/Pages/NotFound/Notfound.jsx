import { Link } from "react-router-dom";



export default function Notfound() {
    return (
        <>
            <section className="not-found">
                <div className="position-relative vh-100">
                    <div className="position-absolute top-50 start-50 translate-middle text-center">
                        <h1 className="display-3">NOT FOUND</h1>
                        <Link className="btn btn-primary px-4 py-2 rounded-3" to="/">Go Home</Link></div>
                </div>
            </section>

        </>
    )
}