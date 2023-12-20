import * as FaIcons from 'react-icons/fa';

const SocialMediaHandle = ({ socialMediaIcon, socialMediaHandle }) => {
    return (
        <div className="flex border-white rounded-lg border m-2 p-2">
            {socialMediaIcon}
            <p><b>{socialMediaHandle}</b></p>
        </div>
    );
}

const Card = ({ data }) => {

    const name = data.name;
    const desc = data.desc;
    const profileImageURL = data.profileImageURL;
    const bgImageURL = data.bgImageURL;

    return (
        <div className=" w-1/6 p-[0.8%] bg-black ml-[-50px] first:ml-0 rounded-xl shadow-2xl shadow-gray-800 hover:scale-110 hover:-translate-x-1/4 transition-all">
            <img 
                className="w-full"
                src={bgImageURL}
                alt="BG"
            />
            <div className="flex mt-[15%]">
                <img 
                    className="w-1/5 h-1/5 rounded-[50%] flex-1 m-[5%] ml-0"
                    src={profileImageURL}
                    alt="ProfileIMG"
                />
                <div className="flex-[4]">
                    <h1 className="text-gray-200"><b>{name}</b></h1>
                    <p className="text-gray-500">{desc}</p>
                </div>
            </div>
            <br />
            <div className='flex justify-center'>
                <SocialMediaHandle socialMediaIcon={<FaIcons.FaTwitter />} socialMediaHandle="@userID" />
                <SocialMediaHandle socialMediaIcon={<FaIcons.FaInstagram />} socialMediaHandle="@userID" />
                <SocialMediaHandle socialMediaIcon={<FaIcons.FaGithub />} socialMediaHandle="@userID" />
            </div>
        </div>
    );
}

export default Card
