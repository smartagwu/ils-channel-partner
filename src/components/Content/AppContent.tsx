import './appContent.css';
import latestImg from '../../assets/images/fashimg1.jpg';
import latestImg2 from '../../assets/images/fashimg2.jpg';
import adsImg1 from '../../assets/images/fashimg3.png';
import adsImg2 from '../../assets/images/fashimg4.png';
import adsImg3 from '../../assets/images/fashimg4.jpg';

export default function AppContent() {
    return <div className='app-content'>
        <div className="divider">
            <div className='line'></div>
            <p className="title">Breaking News</p>
            <div className='line'></div>
        </div>

        <div className="news">
            <div className='latest'>
                <div style={{padding: '10px 20px', background: '#631481', color: '#ffffff', fontWeight: 'bold', marginBottom: '5px'}}>Latest</div>
                <LatestStory image={latestImg} description='Youth participation in politics and their roles in government have gained traction amongst Nigerian youths in the last two decades.'/>
                <LatestStory image={latestImg2} description='Nation is on fire": Nigerian lawmakers demand action on security crisis'/>
            </div>
            <div className='blog'>
                <ul className='content'>
                    <li className="content-container">
                        <p>Good journalism costs a lot of money. Yet only good journalism can ensure the possibility of a good society, an accountable democracy, and a transparent government.</p>
                    </li>
                    <li className="content-container">
                        <p>The Presidency advises members of the media to exercise restraint and good judgement for the larger good of the society. We must not forget the significant and unsavoury roles played by journalists in the Rwandan genocide of 1994, which claimed almost one million lives.</p>
                    </li>
                    <li className="content-container">
                        <p>The President’s commitment to the security and wellbeing of all Nigerians is unwavering and total, and no criminal group, herdsmen or ethnic militias, will be spared the wrath of the law.</p>
                    </li>
                    <li className="content-container">
                        <p>The senate upper house called for "massive recruitment" for the military and police and procurement of new equipment for security forces.</p>
                    </li>
                    <li className="content-container">
                        <p>The military did not immediately respond to calls and messages seeking comment. A presidency spokesman declined to comment.</p>
                    </li>
                    <li className="content-container">
                        <p>Democratic Republic of Congo President Felix Tshisekedi said on Monday he would ensure that the presence of Ugandan troops in Congo, where they are fighting an Islamist militant group alongside Congolese forces, was for a strictly limited period.</p>
                    </li>
                    <li className="content-container">
                        <p>Good journalism costs a lot of money. Yet only good journalism can ensure the possibility of a good society, an accountable democracy, and a transparent government.</p>
                    </li>
                    <li className="content-container">
                        <p>Good journalism costs a lot of money. Yet only good journalism can ensure the possibility of a good society, an accountable democracy, and a transparent government.</p>
                    </li>
                </ul>
                <div className='ads'>
                    <div className='title'>
                        <p>Advertisement</p>
                        <div className='ads-img'><img src={adsImg3} alt="ads img" /></div>
                        <div className='ads-img'><img src={adsImg1} alt="ads img" /></div>
                        <div className='ads-img'><img src={adsImg2} alt="ads img" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function LatestStory(props: { image:string, description:string}) {
    return <div className='story'>
        <img src={props.image} alt="story img" />
        <p>{props.description}</p>
    </div>
}