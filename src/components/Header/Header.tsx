import './header.css';
import logo from '../../assets/images/FashBlogLogo.svg';

export default function Header(props:{callISW:()=>void}) {
    return <header className='header'>
        <div className='container'>
            <div className='image'> <img src={logo} alt="logo" /></div>
            <ul className='nav-items'>
                <li key='news'><a href="">News</a></li>
                <li key='sport'><a href="">Sport</a></li>
                <li key='entertainment'><a href="">Entertainment</a></li>
                <li key='politics'><a href="">Politics</a></li>
                <li key='business'><a href="">Business</a></li>
                <li key='loans'><a href="" onClick={props.callISW}>Loans</a></li>
            </ul>
            <button>Subscribe</button>
        </div>
    </header>
}