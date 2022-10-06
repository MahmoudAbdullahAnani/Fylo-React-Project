import Futshar from "./Futshar";
import accesAny from '../assets/images/icon-access-anywhere.svg';
import Anyfile from '../assets/images/icon-any-file.svg';
import collaboration from '../assets/images/icon-collaboration.svg';
import security from '../assets/images/icon-security.svg';
import curvy from '../assets/images/bg-curvy-desktop.svg';
import './Futshars.css'
function ALLFutshars() {
    return(
        <>
            <div className=" curvy text-white px-28 text-center d-flex flex-wrap gap-20 justify-around pb-10">
            <img src={curvy} alt="curvy"/>
                <Futshar defoultClass="animate__animated animate__bounce animate__zoomInDown  galre-image   col-xs-2 col-lg-4 " text="The acility to use a smartphone, tablet, or computer to access your account means your files follow you everywhere" header="Access your file, anywhere" image={accesAny} alt="access-anywhere"/>
                <Futshar defoultClass="animate__animated animate__bounce animate__zoomInLeft  galre-image   col-xs-2 col-lg-4 " text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files." header="Security you can trust" image={Anyfile} alt="access-anyfile"/>
                <Futshar defoultClass="animate__animated animate__bounce animate__zoomInRight  galre-image   col-xs-2 col-lg-4 " text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachmens required." header="Real-time collaboration" image={collaboration} alt="access-collaboration"/>
                <Futshar defoultClass="animate__animated animate__bounce animate__zoomInUp  galre-image   col-xs-2 col-lg-4 " text="Whether you're sharing holidays photos or work documents,Fylo has you covered allowing for all file types to be securely stored and shared." header="Store any type of file" image={security} alt="access-security"/>
            </div>
        </>
    )
}
export default ALLFutshars;