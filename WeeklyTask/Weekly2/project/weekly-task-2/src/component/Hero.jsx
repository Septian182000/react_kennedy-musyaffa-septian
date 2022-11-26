import android from '../assets/image/android.png'
import apple from '../assets/image/apple.png'
import playing from '../assets/image/playing.png'

export default function Hero(){
    return(
    <div className='container'>
        <div className="hero row justify-content-md-center">
                <div className="title-hero col-7 d-flex flex-column">
                    <div>    
                        <h1>Playing with your friend</h1>
                        <h1>Let's make experience with us</h1>
                        <h3 className="mt-4 text-warning te">Have Fun</h3>
                    </div>
                    <div className="install-app d-flex flex-column">
                        <h3 className="col-7 title-install">You can play on</h3>
                        <div className="button-install d-flex flex-row">
                            <div className="button col-4 text-center">
                                <img src={android} className="button-icon" alt=""/>
                                <h4>Available On Android</h4>
                            </div>
                            <div className="button col-4 text-center">
                                <img src={apple} className="button-icon apple" alt=""/>
                                <h4>Available On IOS</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="poster col-5 d-flex flex-column">
                    <img src={playing} alt=""/>
                </div>
        </div>
    </div>
    )
}