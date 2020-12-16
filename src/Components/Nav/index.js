import { useEffect } from "react";

function Nav(props) {
    const { pages, currentPage, setCurrentPage } = props;
    useEffect(() => {
        document.title = `${currentPage.name}`;
    });

    return (
        <header className="flex-row px-1 space-between">
            
            <h1 className="my-name">
                    Hameed
            </h1>
            <nav className="flex-row ">
                <ul className="flex-row">
                    {pages.map(page => {
                        return (
                            <li className='mx-2' key={page.id}>
                                <a href={`#${page.id}`} className={`${currentPage.id === page.id && 'navActive'} `}  onClick={() => { setCurrentPage(page) }}>{page.name}</a>
                            </li>
                        )
                        
                    })}

                </ul>
            </nav>
        </header>
        
    )
}

export default Nav;