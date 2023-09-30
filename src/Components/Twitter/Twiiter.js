import "./Twitter.css"

function Twitter() {
    return (
        <div className="twitters">
            <div className="row">
                <div className="  col sm-2 col-md-3 left ">
                    <div className="left_container"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="twitter"
                        fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                        <h2 className=" explore"> # &nbsp;  EXPLORE</h2>
                        <h2 className="settings"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-gear" viewBox="0 0 16 16">
                            <path
                                d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                            <path
                                d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                        </svg> &nbsp; &nbsp; SETTINGS</h2>
                    </div>

                </div>
                <div className="  col-12 col-sm-10 col-md-6 center">
                    <div className="search_bar">
                        <div className="center_top">
                            <div className="center_top2">
                                <span className="svg_search_icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" />
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </span> <input type="search" name="search" className="search_box" id=""
                                    placeholder="search Twitter" />



                            </div>
                            <span className="search_setting"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16" />
                                <path
                                    d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                <path
                                    d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                            </span>
                        </div>
                    </div>
                    <div className="center_navbar">
                        <div className="center_navbar2">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">For You</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Trending</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ">New </a>
                                </li>
                                <li className="nav-item"> <a className="nav-link "> Entertainment </a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="back_img">
                        <h1> Aaj Tak Live</h1>
                        <h2 className="lion"> The Asiatic lion is listed as Endangered on the IUCN Red List because
                            of its small population size.</h2>
                        <p> Trending with <span>#savelions#indian</span></p>


                    </div>
                    <div className="top_news">
                        <div className="width80">
                            <p> World news. 4hours ago</p>
                            <p> England Won ICC Mens T20 worldCup 2022</p>
                            <p> Trending with <span> #pakistan#england#t20#worldcup</span> </p>
                        </div>
                        <div className="width20">
                            <img src="data:image/jpeg;base64,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"
                                alt="enlandWinS" />
                        </div>

                    </div>
                    <div className="top_news2">
                        <div className="width80">
                            <p> World news LIVE</p>
                            <p> The latest updates from Iran as protests continue across the country</p>

                        </div>
                        <div className="width20">
                            <img src="https://pbs.twimg.com/semantic_core_img/1585334967164444672/mSLl_zaP?format=jpg&name=240x240"
                                alt="protests" />
                        </div>

                    </div>
                    <div className="Center_tweets">
                        <div className="malik">
                            <div className="width10">
                                <img src="https://pbs.twimg.com/profile_images/1391026420449792002/NqMnQTfo_400x400.jpg"
                                    alt="shoiabmalik" />
                            </div>
                            <div className="div width90" >
                                <span> Shoaib Malik</span> <img className="flag"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAkFBMVEUBQRz///8APxkAPhYAOxEANQD5+/oAMwAAOg4AQhoAPxTQ29Xg6eQAMQDj6+doiXVCZk5lgm90kX/w9PFSemIjVzeSppnJ1M2Im48XTy2yw7lXdWGHnpAwVzxAblMKRyOJp5WovbG/zcU4Z0ucsaWzvbYALAAsYUKjsKdbgWp3jX6An4xNcVoAPAkASSE4W0OU2LnTAAAC/klEQVRoge1Y25aiMBA0V4JhCBLRgUHFEXVwRv3/v1vuzroEDcLDnkO9Qiqd6up0kslkxIgRI0aM+D+ABmOGhrneDEONjEsUeYNQQ+xHMvAHkQX7wgbDcEPmbAH49PAQ3NMZB8ByWONXBF/iNl0bACBI40d/57/ADpErU+5tI/dkcolFtaIOk7A5TbmBKplkT3O9IDsctdnZLqMGUbPgKfkXkB5DaJPYiW7CkZ/pDeRV5UISSmB5V9cCn7q6wHOQBx5vVANZlhFupfM7uoETkQsOZqqByBAy/wMslPOrhno8H8idZlUQ8UJOy1+0A18UI7fNXjaOgVX8kP4y1Q58WS650StmXCqSp1yo/KQK/L2IS56aB8LJ+ntZhU4TLXboF1YB1odCT4jJ4ZCtTkoK6IcOO/6wCnL+05Kstz0A9jyJl9zaaWzJ01O5YpVZcpCYgu83RogvlIb9F3ATV+RtIZGQ8nPmFMg0zIhWpVfAso2cuWCuaZSM3LGfkYW5W93anGT5rDysdEsew7pLt8CzukBmbevu1Oemoi6/d0Ub6g7k1uSxOSD556rvE8svWWRbRjvhllAAwr51uVkxdXrfutyKKIXoWZdb+Weh6zaaB7htXBncnq3OTr/Iba9f1etmkSM49ypM3eZy0EW/wlQNuqwklzyOHT59I6uPFhX7ww0Qef6z5PWhqErqqf0iCpEjVk9npjrO1bEvLi3FBNksUJxwmkMXf4WeemZtKM+704UV6HQ8yLZ/kwMeXhrzisnPklo7rV0CXew7dsrdM7mTHjJjF0hA55o7ENvdCZNJHx0JwxgVwJiZIs/Nt3YllBeuO9hb98e5rlbXq5NEpWHjgy53dVVsgrSs2yca4A77Q3nJfQAad3sZKK7n7bDDrq8OxcNCG3jywiNS/iSiRrTqovct+OwxR0EdHNGrjQQZpsvlvS2pHXtGHz0KErKOuWUXM1ApbR4IsxfqHJicj0kYf+33+69QrM9vrN9DAcKEGCkIYa89Eo0YMWLEiBEV/gC+kygz4QIY+AAAAABJRU5ErkJggg=="
                                    alt="" /> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg> &nbsp;&nbsp;<span className="username"> @realshoaibmalik 6hours ago</span>
                                <p> Happy Birthday to you
                                    <span className="sania"> @MirzaSania</span>
                                    Wishing you a very healthy & happy life! Enjoy the day to the fullest.
                                </p>
                            </div>
                        </div>
                        <div className="center_tweets_nav">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-reply" viewBox="0 0 16 16">
                                <path
                                    d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
                            </svg>
                                &nbsp; &nbsp; 120</div>
                            <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                            </svg>&nbsp; &nbsp; 90</div>
                            <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-suit-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                            </svg> &nbsp; &nbsp; 100</div>
                            <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-upload" viewBox="0 0 16 16">
                                <path
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path
                                    d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg></div>
                        </div>
                        <div className="flex">
                            <div className="malik">
                                <div width="10%">
                                    <img src="https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_400x400.jpg"
                                        alt="shoiabmalik" />
                                </div>
                                <div className="div" width="90%">
                                    <span> Fabrizio Romano</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg> &nbsp;&nbsp;<span className="username"> @FabrizioRomano 8hours ago</span>
                                    <p>Cristiano Ronaldo on Man Utd: "Nothing changed since I left. The pool, the jacuzzi, even the
                                        gym, even some technology. Even the chefs who I appreciate, lovely people".
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="center_tweets_nav">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-reply" viewBox="0 0 16 16">
                                <path
                                    d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
                            </svg>
                                &nbsp; &nbsp; 96</div>
                            <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                            </svg>&nbsp; &nbsp; 101</div>
                            <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-suit-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                            </svg> &nbsp; &nbsp; 172</div>
                            <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-upload" viewBox="0 0 16 16">
                                <path
                                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path
                                    d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg></div>
                        </div>
                        <div className="malik">
                            <div width="10%">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ygMro4TEJCm6q9S61ca36QUC3xaAnuCS1myomJbX&s"
                                    alt="shoiabmalik" />
                            </div>
                            <div className="div" width="90%">
                                <span> Keke Palmer</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg> &nbsp;&nbsp;<span className="username"> @kekepalmer 10hours ago</span>
                                <p> Nothing worse than calling your mom and she declines your call. What other life do you
                                    haveeee!?!?!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="center_tweets_nav">
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-reply" viewBox="0 0 16 16">
                            <path
                                d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
                        </svg>
                            &nbsp; &nbsp; 150</div>
                        <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                        </svg>&nbsp; &nbsp; 200</div>
                        <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-suit-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                        </svg> &nbsp; &nbsp; 160</div>
                        <div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-upload" viewBox="0 0 16 16">
                            <path
                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg></div>
                    </div>
                </div>
                <div className="  col-md-3 right">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">New to Twitter?</h5>
                            <p className="card-text">Sign up now to get your own personalized timeline!</p>
                            <a href="#" className="btn btn-primary"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path
                                    d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg> Sign up with Google</a>
                            <a href="#" className="btn btn-primary"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                <path
                                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                <path
                                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                            </svg>Sign up with Apple</a>
                            <a href="#" className="btn btn-primary"> Sign up with phone or email</a>
                            <p className="terms"> By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy
                                Policy</span>, including <span>Cookie Use</span>. </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <p> Don't miss what's happening</p>
                        <p> People on Twitter are the first to know.</p>
                    </div>
                    <div className="col-3">
                        <button type="button" className="btn btn-primary"> Log in</button>
                        <button type="button" className="btn btn-primary">Sign up</button>
                    </div>
                </div>

            </footer>


        </div>
    )
}


export default Twitter