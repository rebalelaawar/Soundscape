import s from './BottomBar.module.scss';


interface props {
    onPlayBtn: CallableFunction;
    hoveredAlbum: string;
};

const BottomBar = ({ onPlayBtn ,hoveredAlbum } : props ) => {

    return <div id={ s.Main }>
        <div id={ s.PullIndicator } />
        <div id={ s.PlayBackControls }>
            
            <div>
                <span>{hoveredAlbum}</span><br/>
                <span></span>
            </div>

            <div id={ s.PlayBtnHolster }><button onClick={( ) => onPlayBtn( )}/></div>
        
        </div>
    </div>;
};

export default BottomBar;