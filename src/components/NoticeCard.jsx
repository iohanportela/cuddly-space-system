import './NoticeCard.css';

function NoticeCard({ notice }) {
    return (
        <article className='notice-card'>
                <p>{notice.category}</p>
                <p>{notice.title}</p>
                <p>{notice.description}</p>
                <div>
                    <span>Por: {notice.author} </span>
                    <span>Data: {notice.date} </span>
                </div>
                </article>
    );
}

export default NoticeCard;