import './NoticeList.css';
import NoticeCard from './NoticeCard.jsx';
function NoticeList({ notices }) {
    return (
        <main>    
            <h2>Lanelus</h2>

            {notices.map((notice) => (
                <NoticeCard notice={notice}/>
            ))}
        </main>
    );
}

export default NoticeList;