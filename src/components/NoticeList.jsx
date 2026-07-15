import './NoticeList.css';
import NoticeCard from './NoticeCard.jsx';

function NoticeList({ notices, onToggleFeatured }) {
    return (
        <main>    
            <h2>Lanelus</h2>

            {notices.map((notice) => (
                <NoticeCard key={notice.id} notice={notice} onToggleFeatured={onToggleFeatured} />
            ))}
        </main>
    );
}

export default NoticeList;