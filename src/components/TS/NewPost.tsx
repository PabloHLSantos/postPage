import styles from '../Modules/NewPost.module.css'

export function NewPost(){
    return(
        <form className={styles.commentForm}>
            <textarea
                name="comment"
                placeholder='Novo Post'                
            />
            <footer>
                    <button type='submit'>
                        Publicar
                    </button>
            </footer>
        </form>
    );
}