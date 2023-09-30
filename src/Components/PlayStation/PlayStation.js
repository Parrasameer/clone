import "./PlayStation.css"

function PlayStation() {
    return (
        <div className="playstation">
            <div className="sony">
                <div> SONY</div>
            </div>
            <div className="navbar">
                <div className="row">
                    <div className="col-1"> <span className="navbar_right"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-playstation" viewBox="0 0 16 16">
                        <path
                            d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356ZM9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.454 8.454 0 0 1-4.018-.323Z" />
                    </svg></span> </div>
                    <div className="col-6">
                        <div className="mainDropdown">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Games
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Hardware
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Services
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    News
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Shop
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Support
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-5">
                    <div className="navbar_left">
                        <button type="button" className="btn btn-primary signin">
                            <p>Sign in</p>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search"
                            viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="row navbar2">
                <div className="col-12 col-md-3">
                    <div className="navbar2_left">
                        <img src="data:image/png;base64,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"
                            alt="" /> <button type="button" className="btn btn-primary"> PlayStation.<span>store</span></button>
                    </div>
                </div>
                <div className="col-12 col-md-6"> <button type="button" className="btn btn-primary"> Latest</button>
                    <button type="button" className="btn btn-primary"> Collections</button>
                    <button type="button" className="btn btn-primary"> Deals</button>
                    <button type="button" className="btn btn-primary"> PS5</button>
                    <button type="button" className="btn btn-primary"> Subscrption</button>
                    <button type="button" className="btn btn-primary"> Browse</button>
                </div>
                <div className="col-0 col-md-3"></div>
            </div>
            <div className="center_main_img">
                <div className="center2_main_img">
                    <img className="center_img1"
                        src="https://image.api.playstation.com/pr/bam-art/147/959/aaf9ad92-f260-43a4-9ffc-112ebcf04b75.png?w=440&thumb=false"
                        alt="" />
                    <img className="center_img2"
                        src="https://image.api.playstation.com/pr/bam-art/147/959/181d2946-001f-4c17-b565-4d9d3feaa075.png?w=620&thumb=false"
                        alt="" />
                </div>
            </div>
            <div className="row margin-top">
                <div className="col-5 god"> God of War Ragnarök</div>
                <div className="col-4"></div>
                <div className="col-2"> <button type="button" className="btn btn-primary out"> Out Now</button></div>
            </div>
            <p className="santa"> From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018).</p>
            <div className="images_container">
                <div className="row">
                    <div className="col-12  col-md-4 first"> <img
                        src="https://image.api.playstation.com/pr/bam-art/148/199/5d32c33e-0de2-46fd-9cea-13a4af9181c2.jpg?w=620&thumb=false"
                        alt="" /></div>
                    <div className="col-12 col-md-4 middle"> <img
                        src="https://image.api.playstation.com/pr/bam-art/148/913/8c531abc-3dfc-47cb-95fa-2cbeb509c668.jpg?w=620&thumb=false"
                        alt="" /></div>
                    <div className="col-12 col-md-4"> <img
                        src="https://image.api.playstation.com/pr/bam-art/147/758/cbf03914-d2ea-47e0-9129-6e57d1ddb025.png?w=620&thumb=false"
                        alt="" /></div>
                    <div className="col-12 col-md-4 first"> <img
                        src="https://image.api.playstation.com/pr/bam-art/148/913/4e9c6680-d473-487f-995c-49cf17bb59ee.jpg?w=620&thumb=false"
                        alt="" /></div>
                    <div className="col-12 col-md-4 middle"> <img
                        src="https://image.api.playstation.com/pr/bam-art/148/913/aab716fd-4430-41aa-81a5-9faf3e0b32d8.jpg?w=620&thumb=false"
                        alt="" /></div>
                    <div className="col-12 col-md-4"> <img
                        src="https://image.api.playstation.com/pr/bam-art/141/336/4bef2509-ebee-44ad-b5fd-b860912f23b1.jpg?w=620&thumb=false"
                        alt="" /></div>
                </div>
                <div className="game_text">
                    <div className="row">
                        <div className="col-3"> New games</div>
                        <div className="col-7"></div>
                        <div className="col-2"> <a href="#"> <b>View all</b></a></div>
                        <div className="col-3 first1 "> <img
                            src="https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/KkIiB8w4CBvZspu6zyzOza3p.png?w=440&thumb=false"
                            alt="" /></div>
                        <div className="col-3 "> <img
                            src="https://image.api.playstation.com/vulcan/ap/rnd/202208/0519/G9fDIHISfuLRt7CQ0AfNxlJX.png?w=440&thumb=false"
                            alt="" /></div>
                        <div className="col-3 "><img
                            src="https://image.api.playstation.com/vulcan/ap/rnd/202207/0408/fe8jiL5pHOLyF8DbRrJXOlYE.png?w=440&thumb=false"
                            alt="" /></div>
                        <div className="col-3"> <img
                            src="https://image.api.playstation.com/vulcan/ap/rnd/202205/1214/jrPHWEkxs0V0P19tJjgu2Li8.png?w=440&thumb=false"
                            alt="" /></div>
                        <div className="col-3"> God of War Ragnarök</div>
                        <div className="col-3"> Sonic Frontiers PS4 & PS5</div>
                        <div className="col-3"> POLICE SIMULATOR: PATROL OFFICERS</div>
                        <div className="col-3"> WRC Generations – The FIA WRC Official Game</div>
                    </div>
                </div>
                <div className="coming_soon">
                    <div className="row">
                        <div className="col-3"> Coming soon</div>
                        <div className="col-7"></div>
                        <div className="col-2"> <a href="#"> <b>View all</b></a></div>
                        <div className="col-3 first"> <img
                            src="https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/JmxLZt6exeqcKRz7BSmK8aId.png?w=440&thumb=false"
                            alt="" /></div>
                        <div className="col-3"> <img
                            src="https://image.api.playstation.com/vulcan/ap/rnd/202207/2509/85p2Dwh5iDhUzRKe40QeNYh3.png?w=440&thumb=false"
                            alt="" /></div>
                        <div className="col-3"> <img
                            src="https://image.api.playstation.com/vulcan/ap/rnd/202209/0913/3CmlwTUjrvYOei0WDNdBsYPp.png?w=440&thumb=false"
                            alt="" /></div>
                        <div className="col-3"> <img
                            src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0222/pqZVlL42HwbUMdSAyNQoRnzg.png?w=440&thumb=false"
                            alt="" /></div>
                        <div className="col-3"> Hogwarts Legacy</div>
                        <div className="col-3"> Resident Evil 4</div>
                        <div className="col-3"> Need for Speed™ Unbound</div>
                        <div className="col-3"> The Callisto Protocol</div>

                    </div>

                </div>
                <div className="playstationplus">
                    <div className="row">
                        <div className="col-2"> </div>
                        <div className="col-2 first"><img
                            src="https://image.api.playstation.com/pr/bam-art/148/366/8b0c4799-914d-44be-98aa-1efc82372a71.png?w=1920&thumb=false"
                            alt="" /></div>
                        <div className="col-1"></div>
                        <div className="col-4">
                            <img src="https://image.api.playstation.com/pr/bam-art/147/967/f66db10d-9945-42a2-8cf5-ea8b74818c24.png?w=1920&thumb=false"
                                alt="" />
                        </div>
                        <div className="col-3"></div>

                    </div>
                </div>
                <div className="welcome">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-4">
                            <p>Welcome to PlayStation Plus</p>
                        </div>
                        <div className="col-5"></div>
                        <div className="col-2"> <button type="button" className="btn btn-primary"> Lear more</button></div>
                    </div>
                    <span> Enhance your PlayStation experience with online multiplayer, monthly games, exclusive discounts
                        and
                        more.</span>
                </div>
                <div className="playstation_stars"> <img
                    src="https://image.api.playstation.com/pr/bam-art/146/088/000f2852-b7d1-43e8-aa21-16f3c3e40bac.jpg?w=1920&thumb=false"
                    alt="" />
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-4">
                            <p>PlayStation Stars</p>
                        </div>
                        <div className="col-5"></div>
                        <div className="col-2"> <button type="button" className="btn btn-primary"> Lear more</button></div>
                        <span> Enroll for free, complete campaigns and earn rewards</span>
                    </div>
                </div>
                <div className="footer_imgs">
                    <span> See more</span>
                    <div className="row">
                        <div className="col-4"> <img
                            src="https://image.api.playstation.com/pr/bam-art/111/759/f9f992e4-34c0-46f2-aba4-a11f3096c869.jpg?w=1920&thumb=false"
                            alt="" /></div>
                        <div className="col-4"> <img
                            src="https://image.api.playstation.com/pr/bam-art/109/251/41a60e2e-937f-43bd-8bef-521060b2287e.png?w=620&thumb=false"
                            alt="" /></div>
                        <div className="col-4"> <img
                            src="https://image.api.playstation.com/pr/bam-art/148/853/cc52b782-fb6c-44b7-87db-1d096f525f89.png?w=620&thumb=false"
                            alt="" /></div>
                        <div className="col-4"> <img
                            src="https://image.api.playstation.com/pr/bam-art/110/424/94676fda-988e-452b-ac01-87946fd287c1.png?w=620&thumb=false"
                            alt="" /></div>
                        <div className="col-4"> <img
                            src="https://image.api.playstation.com/pr/bam-art/136/938/454453b0-2cd6-44d6-bb2b-19eddeff451a.png?w=620&thumb=false"
                            alt="" /></div>
                        <div className="col-4"> <img
                            src="https://image.api.playstation.com/pr/bam-art/111/152/a3ea162b-deee-485e-b856-f21a36a3e567.jpg?w=620&thumb=false"
                            alt="" /></div>
                    </div>
                    <span> <a href="#"> Show More </a></span>


                </div>

            </div>


            <footer>
                <div className="row footer">
                    <div className="col-1"></div>
                    <div className="col-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-playstation" viewBox="0 0 16 16">
                        <path
                            d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356ZM9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.454 8.454 0 0 1-4.018-.323Z" />
                    </svg></div>
                    <div className="col-1"></div>
                    <div className="col-4"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-globe" viewBox="0 0 16 16">
                        <path
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                    </svg>
                        <span> Country/Region: India</span>
                    </div>
                    <div className="col-5"></div>

                </div>
                <div className="row">
                    <div className="col-3 flexx">
                        <span> support</span>
                        &nbsp; &nbsp; &nbsp;
                        <span> Privacy and Cookies</span>
                        &nbsp; &nbsp; &nbsp;
                        <span> Website Terms of Use</span>
                        &nbsp; &nbsp; &nbsp;
                        <span> Sitemap</span>
                        &nbsp; &nbsp; &nbsp;
                        <span> PlayStation Studios</span>
                        &nbsp; &nbsp; &nbsp;
                        <span> Legal</span>
                        &nbsp; &nbsp; &nbsp;
                        <span> About SIE</span>

                    </div>
                    <div className="col-12 col-md-3 flexx">
                        <span> PSN Terms of Service</span>
                        &nbsp; &nbsp; &nbsp;
                        <span>Software Usage Terms</span>
                        &nbsp; &nbsp; &nbsp;
                        <span>PS Store Cancellation Policy</span>
                        &nbsp; &nbsp; &nbsp;
                        <span>Health Warnings</span>
                        &nbsp; &nbsp; &nbsp;
                        <span>About Ratings
                        </span>
                    </div>
                    <div className="col-12 col-md-3 flexx">
                        <span>Facebook</span>
                        &nbsp; &nbsp; &nbsp;
                        <span>Twitter</span>
                        &nbsp; &nbsp; &nbsp;
                        <span>YouTube</span>
                        &nbsp; &nbsp; &nbsp;
                        <span>Anroid App</span>
                        &nbsp; &nbsp; &nbsp;
                        <span>iOS App</span>
                    </div>
                    <div className="col-0 col-md-3"></div>

                </div>
                <div className="row ">
                    <div className="col-0 col-md-3"></div>
                    <div className="col-12 col-md-5"> © 2022 Sony Interactive Entertainment Europe Ltd. All rights reserved.
                    </div>
                    <div className="col-0 col-md-4"></div>
                </div>

            </footer>

        </div>

    )
}


export default PlayStation