import x from '../../assets/images/world.png';
import y from '../../assets/images/desc.png';
import z from '../../assets/images/links.png';


export default function Home() {
    return <>
        <div className='main'>
            <section className="home">
            <div className="container py-5 d-flex flex-column gap-5 justify-content-center h-75">
                <h1 className="display-2 position-relative z-0 w-fit mx-auto mb-5 fw-bold text-light">Meal Done</h1>
                <p className="fs-2 w-75 mx-auto text-center">All the world's food recipes, all kinds of dishes and
                    desserts, from all cultures and countries, all in one place.</p>
            </div>
        </section>
        <section className="about">
            <div className="container">
                <h2 className="display-5 fw-bold text-center py-5 mb-5">About</h2>
                <div className="row my-5 pb-5 row-cols-md-2">
                    <div className="item my-5" data-aos="fade-right" data-aos-delay="200">
                        <div className="inner mt-5 py-5 px-3 my-bg rounded-4">
                            <p className="fs-5 text-white fw-semibold">We offer you all the food recipes from around the
                                world, including all
                                kinds of dishes and desserts from all cultures and countries, all in one place.</p>
                        </div>
                    </div>
                    <div className="item my-5" data-aos="fade-left" data-aos-delay="200">
                        <div className="inner overflow-hidden rounded-4">
                            <img className="w-100 img-done" src={x} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row py-5 my-5 row-cols-md-2">
                    <div className="item my-5" data-aos="fade-right" data-aos-delay="200">
                        <div className="inner overflow-hidden rounded-4">
                            <img className="w-100 img-done" src={y} alt="" />
                        </div>
                    </div>
                    <div className="item my-5" data-aos="fade-left" data-aos-delay="200">
                        <div className="inner mt-5 py-5 px-3 my-bg rounded-4">
                            <p className="fs-5 text-white fw-semibold">Cook with confidence. We provide the exact
                                ingredients and precise quantities you need for perfect results every time.
                                No more guessing games. Get a complete, clear ingredient checklist for every single
                                dish on our site.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row py-5 my-5 row-cols-md-2">
                    <div className="item my-5" data-aos="fade-right" data-aos-delay="200">
                        <div className="inner mt-5 py-5 px-3 my-bg rounded-4">
                            <p className="fs-5 text-white fw-semibold">Unlock the secrets of global cuisine with our integrated video guides. We link you directly to trusted YouTube channels, providing an immersive, visual cooking experience for every dis.
                            </p>
                        </div>
                    </div>
                    <div className="item my-5" data-aos="fade-left" data-aos-delay="200">
                        <div className="inner overflow-hidden rounded-4">
                            <img className="w-100 img-done" src={z} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>

        </div>

    </>
}