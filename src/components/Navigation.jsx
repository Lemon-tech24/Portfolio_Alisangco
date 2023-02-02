import '../index.css'

export default function Navigation(props){
    const active = 'active'
    return(<>
        <nav>
            <a  className="title" onClick={props.handleHome}>Carl Hari</a>

            <div className="nav-buttons" style={{display:props.width < 810 ? 'none':'flex'}}>
                <li><a  onClick={props.handleAbout}>About</a></li>
                <li><a  onClick={props.handleWorks}>Works</a></li>
                <li><a  onClick={props.handleContact}>Contact</a></li>
                <li><a  onClick={props.handleResume}>Resume</a></li>
            </div>
            
            <div className="nav-buttons-res" style={{display: props.width < 810? 'flex':'none'}} onClick={props.ActiveNavigation}>
                <span></span>
                <span></span>
                <span></span>
            </div>

          
            <div className={active === 'active' ? 'nav-panel-active':'nav-panel'} style={{display:props.ActiveNav ? 'flex':'none'  ,transition:'1s'}}>
                <li><a  onClick={props.handleAbout}>About</a></li>
                <li><a  onClick={props.handleWorks}>Works</a></li>
                <li><a  onClick={props.handleContact}>Contact</a></li>
                <li><a  onClick={props.handleResume}>Resume</a></li>
            </div>

        

        </nav>
    </>)
}