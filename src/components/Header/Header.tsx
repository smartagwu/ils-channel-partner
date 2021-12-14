import './header.css';
import logo from '../../assets/images/FashBlogLogo.svg';

export default function Header(props:{callISW:()=>void}) {
    return <header className='header'>
        <div className='container'>
            <div className='image'> <img src={logo} alt="logo" /></div>
            <ul className='nav-items'>
                <li key='news'><p>News</p></li>
                <li key='sport'><p>Sport</p></li>
                <li key='entertainment'><p>Entertainment</p></li>
                <li key='politics'><p>Politics</p></li>
                <li key='business'><p>Business</p></li>
                <li key='loans'><p onClick={props.callISW}>Loans</p></li>
            </ul>
            <button>Subscribe</button>
        </div>
    </header>
}