import React from 'react'
import "./Section.css"
import "swiffy-slider/css"
import { swiffyslider } from 'swiffy-slider'


window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});




const Section = () => {
    return (
        <div className="section_top">
            <div className="section_cards">
                <img src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?cs=srgb&dl=pexels-pixabay-38554.jpg&fm=jpg" alt="Women" className="cards_img" />
                <img src="https://images-na.ssl-images-amazon.com/images/I/91R2pS272mL.jpg" alt="Lions fifth avenue" className="cards_img" />
                <div className="cards_info">
                    <h4 className="info_title-one">MEET THE AUTHOUR</h4>
                    <h3 className="info_title-two">FIONA DAVIS</h3>
                    <p className="info_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus explicabo voluptas recusandae non? Incidunt repudiandae mollitia eum, recusandae reiciendis dolores optio delectus sed neque, enim maiores blanditiis quis in sunt voluptas, ipsam voluptatem! Nesciunt, quis asperiores. Aspe</p>
                    <button className='info_btn' >Learn More</button>
                </div>
            </div>
            <div className="border"></div>

            <div className="section_bottom">
                <div class="swiffy-slider slider-item-show4">
                    <ul class="slider-container">
                        <li>
                            <div id="slide1">
                                <div className="bottom_card1">
                                    <h3 className="card1_title">Level Up</h3>
                                    <p className="card1_text">...with your libary card.</p>
                                    <p className="card1_text2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ad repellat sequi voluptas assumenda est unde voluptatem ea optio.</p>
                                    <div className="btn">
                                        <button className='card1_btn'>LEARN MORE</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="slide2">
                                <div className="bottom_card2">
                                    <img src="https://images.all-free-download.com/images/graphiclarge/open_book_605165.jpg" alt="article" className="card2-img" />
                                    <h5 className="card-name">ARTICLE</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur Velit, illo.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="slide3">
                                <div className="bottom_card2">
                                    <img src="https://pbs.twimg.com/media/FZs3MiAXgAUWV36.jpg" alt="libary" className="card2-img" />
                                    <h5 className="card-name">ARTICLE</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur Velit, illo.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="slide4">
                                <div className="bottom_card2">
                                    <img src="https://media.istockphoto.com/photos/monday-morning-picture-id1069636740?k=20&m=1069636740&s=170667a&w=0&h=oIlp9RdSB67yivOtOLpKOLC4vm8xyKhXzcHji8ioIMQ=" alt="article" className="card2-img" />
                                    <h5 className="card-name">ARTICLE</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur Velit, illo.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="slide5">
                                <div className="bottom_card2">
                                    <img src="https://pbs.twimg.com/media/FZs3MiAXgAUWV36.jpg" alt="libary" className="card2-img" />
                                    <h5 className="card-name">ARTICLE</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur Velit, illo.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="slide6">
                                <div className="bottom_card2">
                                    <img src="https://images.all-free-download.com/images/graphiclarge/open_book_605165.jpg" alt="article" className="card2-img" />
                                    <h5 className="card-name">ARTICLE</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur Velit, illo.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="slide7">
                                <div className="bottom_card1">
                                    <h3 className="card1_title">Level Up</h3>
                                    <p className="card1_text">...with your libary card.</p>
                                    <p className="card1_text2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ad repellat sequi voluptas assumenda est unde voluptatem ea optio.</p>
                                    <div className="btn">
                                        <button className='card1_btn'>LEARN MORE</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="slide8">
                                <div className="bottom_card2">
                                    <img src="https://media.istockphoto.com/photos/monday-morning-picture-id1069636740?k=20&m=1069636740&s=170667a&w=0&h=oIlp9RdSB67yivOtOLpKOLC4vm8xyKhXzcHji8ioIMQ=" alt="article" className="card2-img" />
                                    <h5 className="card-name">ARTICLE</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur Velit, illo.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id="slide9">
                                <div className="bottom_card2">
                                    <img src="https://images.all-free-download.com/images/graphiclarge/open_book_605165.jpg" alt="article" className="card2-img" />
                                    <h5 className="card-name">ARTICLE</h5>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur Velit, illo.</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <button type="button" class="slider-nav"></button>
                    <button type="button" class="slider-nav slider-nav-next"></button>

                    <ul class="slider-indicators">
                        <li class=""></li>
                        <li class=""></li>
                        <li class=""></li>
                        <li class=""></li>
                        <li></li>
                        <li class=""></li>
                        <li class="active"></li>
                        <li></li>
                        <li class=""></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Section