const React = require('react')
const Def = require('./layouts/default')

function home() {
    return (
        <Def>
            <main>
                <a href="/places"><button className='banner'>I'M READY TO RANT!</button></a>

                <div className="container home-grid">
                    <div className="row g-0">
                        <div className="col position-relative">
                            <a href="/places">
                                <img className='img-fluid' src="/images/rude_waiter.jpg" alt="Rude Service" />
                                <span className='banner-label position-absolute p-3'>Bad Service...</span>
                            </a>
                            <span className='banner-attribute position-absolute rounded-2'>Photo by <a href="https://unsplash.com/@clemono?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clem Onojeghuo</a> on <a href="https://unsplash.com/photos/mQ0_MMw5qas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
                        </div>
                        <div className="col position-relative">
                            <a href="/places">
                                <img src="/images/tiny_food.jpg" alt="Tiny Portion" />
                                <span className='banner-label position-absolute p-3'>Tiny Portions...</span>
                            </a>
                            <span className='banner-attribute position-absolute rounded-2'>Photo by <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jay Wennington</a> on <a href="https://unsplash.com/photos/N_Y88TWmGwA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col position-relative">
                            <a href="/places">
                                <img src="/images/happy_couple.jpg" alt="Happy Couple" />
                                <span className='banner-label position-absolute p-3'>Annoying Couples...</span>
                            </a>
                            <span className='banner-attribute position-absolute rounded-2'>Photo by <a href="https://unsplash.com/@brookeowinters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brooke Winters</a> on <a href="https://unsplash.com/photos/yi4aXCePSao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
                        </div>
                        <div className="col position-relative">
                            <a href="/places">
                                <img src="/images/gross_food.jpg" alt="Gross Food" />
                                <span className='banner-label position-absolute p-3'>Gross Food...</span>
                            </a>
                            <span className='banner-attribute position-absolute rounded-2'>Photo by <a href="https://unsplash.com/@scheko46?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Franz Schekolin</a> on <a href="https://unsplash.com/photos/zSnZrRjFxm4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
                        </div>
                        <div className="col position-relative">
                            <a href="/places">
                                <img src="/images/children_eating.jpg" alt="Children Eating" />
                                <span className='banner-label position-absolute p-3'>Children...</span>
                            </a>
                            <span className='banner-attribute position-absolute rounded-2'>Photo by <a href="https://unsplash.com/es/@apsprudente?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patricia Prudente</a> on <a href="https://unsplash.com/photos/Nl7MKI6SBqM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home