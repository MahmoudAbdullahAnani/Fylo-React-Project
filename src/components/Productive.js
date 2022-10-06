import productive from '../assets/images/illustration-stay-productive.png'
import arrow from '../assets/images/icon-arrow.svg'
import { Link } from "react-router-dom";
import './Futshars.css'
function Productive() {
    return(
        <div className='productive text-white py-4'>
            <div className='container d-flex flex-wrap  gap-10 align-items-center justify-around'>
                <div className=" image-top-galre myImage col-xs-12 col-lg-5 animate__animated animate__bounce animate__rotateInUpRight">
                    <img src={productive} alt="..." />
                </div>
                <div className='col-xs-12 col-lg-6 px-1 wow zoomIn' data-wow-offset='300'>
                    <h1>Stay productive, wherever you are</h1>
                    <p>Never let location be an file issue when accessing your files. Fylo has you covered for all of you file storage needs.</p>
                    <p>Securely share file and folders with friends, family and colleagues for live collaboration. No email attachmens required.</p>
                    <Link className='hover:border-gray-200 text-white securely-link' to='/'><span className='me-3'>See how Fylo works</span><img src={arrow}  alt='arrow'/></Link>
                </div>
            </div>
        </div>
    )
}
export default Productive