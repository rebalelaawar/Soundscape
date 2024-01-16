import s from './BottomBar.module.scss';


interface props {
    onPlayBtn: CallableFunction;
};

const BottomBar = ({ onPlayBtn } : props ) => {

    return <div id={ s.Main }>
        <div id={ s.PullIndicator } />
        <div id={ s.PlayBackControls }>
            
            <div>
                <span><strong>Click Bottom Right To Play</strong></span><br/>
                <span>Click Top Right To Reset</span>
            </div>

            <div id={ s.PlayBtnHolster }><button onClick={( ) => onPlayBtn( )}/></div>
        
        </div>
    </div>;
};

export default BottomBar;