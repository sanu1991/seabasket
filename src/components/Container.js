import React, { useEffect, useState } from 'react'
import './Container.css'
import logo from './images/logo.PNG'
import cover from './images/cover.png'

const Container = () => {
    const [items, setItems] = useState("");

    const getData = async () => {
        try {

            const url = `https://sanu1991.github.io/seabasket_json/data.json`;

            const response = await fetch(url);
            console.log(response);

            const data = await response.json();
            console.log(data);

            setItems(data);
            console.log(items);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const { categories, faq, read, topics } = items;
    console.log(categories, faq, read, topics);

    return (
        <>
            <nav id="navbar-example2" class="navbar navbar-light bg-light fixed-top px-3">
                <a class="navbar-brand" href="#"><img src={logo} alt="error!" width="150" height="70" /></a>
                <ul class="nav nav-pills fs-4">
                    <li class="nav-item">
                        <a class="nav-link" href="#scrollspyHeading1"><b> Category</b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#scrollspyHeading2"><b> FAQs</b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#scrollspyHeading3"><b> Important Topics</b></a>
                    </li>
                    <li class="nav-item"><button type="button" class="btn btn-primary btn-lg px-4"><h4><b> Login </b></h4></button></li>
                </ul>
            </nav>
            <section className='container mt-5 pt-4' data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                <div className='d-flex justify-content-center'>
                    <img src={cover} className='img-fluid' alt="error!" width="1600" height="500" />
                </div>
                <div className="container mt-5 pt-5">
                    <div className="text-center">
                        <h1>HOW IT WORKS</h1> <br /> <br />
                        <h4>Sea Basket delivers fresh sourced seafood in a few easy clicks</h4>
                    </div>
                </div>
                <div className="container mt-5 pt-5 mx-auto">
                    <h1 id="scrollspyHeading1">CATEGORIES</h1>
                    <div className="row">
                        {categories.map((mapItem) => (
                            <div className="col">
                                <div class="card mx-auto mt-5 rounded-3" style={{ width: "18rem" }}>
                                    <img src={mapItem.image} class="card-img-top" alt="error" width="150" height="120" />
                                    <div class="card-body">
                                        <h5 class="card-title text-center">{mapItem.item}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container mt-5 pt-5 mx-auto">
                    <h1 class="text-center">A GLANCE AT OUR PRODUCT</h1>
                    <div className="mt-5 text-center">
                        <embed src="https://www.youtube.com/embed/Qmo_Tm8hD0k" style={{ width: "80vw", height: "40vw", borderRadius: "50px" }}></embed>
                    </div>
                </div>
                <div className="container mt-5 pt-5 mx-auto">
                    <h1 id="scrollspyHeading2" class="text-center">FAQS</h1>
                    <div class="accordion pt-5" id="accordionExample">
                        {faq.map((mapItem) => (
                            <div className="text-center fs-5">

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id={mapItem.id}>
                                        <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            {mapItem.ques}
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby={mapItem.id} data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            {mapItem.ans}
                                        </div>
                                    </div>
                                </div>
                                <br /><br />
                            </div>
                        ))}

                    </div>
                </div>
                <div className="container mt-5 pt-5 mx-auto">
                    <h1 class="text-center">HAVE A READ</h1>
                    <div class="pt-5">
                        {read.map((mapItem) => (
                            <div>
                                <div class="card p-5" style={{ borderRadius: "50px" }}>
                                    <div class="card-body">
                                        <h2 class="card-title">{mapItem.title}</h2><br />
                                        <h4 class="card-text">{mapItem.desc}</h4><br />
                                        <h2 className='text-end text-primary'> READ MORE <i class="fa-solid fa-angle-right"></i> </h2>
                                    </div>
                                </div>
                                <br /><br />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container m-5 pt-5 mx-auto">
                    <h1 id="scrollspyHeading3" class="text-center">TOPICS YOU CAN'T MISS</h1>
                    <div className="pt-5">
                        {topics.map((mapItem) => (
                            <div>
                                <div class="card" style={{ borderRadius: "50px" }}>
                                    <div class="row g-0">
                                        <div class="col-md-6">
                                            <div class="card-body p-5">
                                                <h3 class="card-title">{mapItem.title}</h3> <br />
                                                <h5 class="card-text">{mapItem.desc}</h5> <br />
                                                <h3 class="card-text text-primary">READ MORE <i class="fa-solid fa-angle-right"></i></h3>
                                            </div>
                                        </div>
                                        <div class="col-md-6 p-5">
                                            <img src={mapItem.image} style={{ borderRadius: "50px" }} class="img-fluid" alt="error" />
                                        </div>
                                    </div>
                                </div>
                                <br /><br />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <footer className='bg-primary'>
                <div className='container-fluid p-4'>
                    <div className="row mx-auto">
                        <div className='col'>
                            <div class="card bg-primary text-white" style={{ border: "none" }}>
                                <div class="card-body mx-auto">
                                    <img src={logo} alt="error" width="150" height="70" />
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="card bg-primary text-white" style={{ border: "none" }}>
                                <div class="card-body mx-auto">
                                    <p>Support</p>
                                    <p>About Us</p>
                                    <p>Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="card bg-primary text-white" style={{ border: "none" }}>
                                <div class="card-body mx-auto">
                                    <p>Terms & Conditions</p>
                                    <p>Return & Refund Policy</p>
                                    <p>Shipping & Delivery Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div class="row mx-auto">
                        <div class="col-12">
                            <div>
                                <p class="text-center text-white">Sea basket  |  All Rights Reserved  | 2021 Copyright</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Container