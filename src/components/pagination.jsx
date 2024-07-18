import { Link } from "react-router-dom";

const Pagination = ({ page, setPage }) => {
    return (
        <div className='md:flex flex-row gap-2 hidden  my-4 justify-center *:px-3 *:rounded-md dark:*:border-2 dark:*:border-slate-800 *:pt-1'>
            <Link to={`/?page=${page-1}`} className= ' bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-300 active:bg-slate-800 mx-2 '>«</Link>
            <Link to={`/?page=1`} className={page == 1 ? 'bg-blue-900 text-slate-200' : 'bg-slate-300 dark:bg-slate-900'}>1</Link>
            <Link to={`/?page=2`}  className={page == 2 ? 'bg-blue-900 text-slate-200' : 'bg-slate-300 dark:bg-slate-900'}>2</Link>
            {page > 4 && <span className='text-2xl'>...</span>}
            {/* {page > 2 && page < 4 && < Link className='text-2xl' onClick={() => setPage(page + 1)}>{page + 1}</Link>} */}
            {
                page >= 2 && page <= 8   ? (<>

                    {page > 3 && <Link to={`/?page=${page-1}`} onClick={() => setPage(page - 1)} className={'bg-slate-200 dark:bg-slate-900'}>{page - 1}</Link>}
                    {page > 2 && < Link to={`/?page=${page}`} onClick={() => setPage(page)} className={'bg-blue-90 dark:bg-blue-950  text-white dark:text-slate-300'}>{page}</Link>}
                    {page < 8 && <Link to={`/?page=${page+1}`} onClick={() => setPage(page + 1)} className={'bg-slate-200 dark:bg-slate-900'}>{page + 1}</Link>}
                </>) : (<>
                    <Link className={'bg-slate-900 text-white hidden'}>{page}</Link>
                </>)
            }
            {page < 8 && <span className='text-2xl '>...</span>}
            <Link to={`/?page=9`} className={page == 9 ? 'bg-blue-900 text-slate-200 dark:bg-blue-950 dark:text-slate-300' : 'bg-slate-300 dark:bg-slate-900'}>9</Link>
            <Link to={`/?page=10`}  className={page == 10 ? 'bg-blue-900 text-slate-200 dark:bg-blue-950 dark:text-slate-300' : 'bg-slate-300 dark:bg-slate-900'}>10</Link>
            <Link to={`/?page=${page+1}`} className='bg-slate-50 dark:bg-slate-900 dark:text-slate-300 text-slate-900 active:bg-slate-800 mx-2'>»</Link>
        </div >
    );
}

export default Pagination;
