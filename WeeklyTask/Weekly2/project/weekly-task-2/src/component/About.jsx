import gambar from '../assets/image/gensin.webp'
import vision from '../assets/image/vision.png'

export default function About(){
    return(
        <>
            <div className='about p-5'>
                <h1 className='text-center title-about'>About Us</h1>
                <div className='about-content d-flex flex-row'>
                    <div className='d-flex flex-column fs-5 about-desc'>
                    <p><q> Genshin Impact is an open-world action role-playing game that allows the player to control one of four interchangeable characters in a party. Switching between characters can be done quickly during combat, allowing the player to use several different combinations of skills and attacks. </q>
                    </p>
                    <img src={vision} alt="" />
                    </div>
                    <div className='about-poster'>
                        <img src={gambar} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}