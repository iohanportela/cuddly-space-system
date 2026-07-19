import './NoticeList.css';
import NoticeCard from './NoticeCard.jsx';

function NoticeList({ notices, onToggleFeatured, onDeleteNotice, onToggleDetails }) {
    return (
        <main>    
            <h2>Lanelus</h2>

            {notices.map((notice) => (
                <NoticeCard key={notice.id} notice={notice} onToggleFeatured={onToggleFeatured} onDeleteNotice={onDeleteNotice} onToggleDetails={onToggleDetails} />
            ))}
        </main>
    );
}

export default NoticeList;