export default function Layout(props) 

{
    const {children} =  props
    const header = (
        <header>
            <h1 className="text-gradient">The Iron Pulse</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>

        </header>
    )
    const footer = (
        <footer>
            <p>Built by <a href="https://www.SandrAdora.netlify.app" 
            target="_blank"> Goodmorning Midnight Mirador</a><br />Styled with  
            <a href="https://www.fantacss.smoljames.com" 
            target="_blank"> Fantacss </a></p>
        </footer>
    )
    return (
        <>
        {header}
        {children}
        {footer}
        </>
    )
}