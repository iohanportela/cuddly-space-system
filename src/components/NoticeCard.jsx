import './NoticeCard.css';

function NoticeCard({ notice, onToggleFeatured }) {
    return (
        <article className={`notice-card ${notice.featured && "featured"}`}>
                <p>{notice.category}</p>
                <p>{notice.title}</p>
                <p>{notice.description}</p>
                <div className="notice-meta">
                    <span>Por: {notice.author} </span>
                    <span>Data: {notice.date} </span>
                </div>

                <div className='notice-actions'>
                    {/* exibir descricao completa do evento, se ativo o texto do botao = 'fechar detalhes' */}
                    <button className='details'>
                        Exibir detalhes
                    </button>

                    <button onClick={() => onToggleFeatured(notice.id)}>
                        {notice.featured ? "Remover destaque" : "Destacar"}
                    </button>
                    
                    {/* excluir evento da lista */}
                    <button onClick={() => handleDeleteNotice(notice.id)}>
                        Excluir
                    </button>
                </div>
                </article>
    );
}

export default NoticeCard;