import React from 'react'
import styled from 'styled-components'

if (typeof window !== `undefined`) {
    const Snap =  require('snapsvg-cjs');
}

const Wrapper = styled.div`

    .st0{fill:#63BEDD;} 
    .st1{fill:#A0AFB5;} 
    .st2{
        fill:#A0AFB5;
        stroke:#737F84;
        stroke-width:2;
        stroke-linejoin:round;
        stroke-miterlimit:10;
    }
    .st3{fill:#FFFFFF;} 
    .st4{
        fill:none;
        stroke:#A0AFB5;
        stroke-width:2;
        stroke-miterlimit:10;
    } 
    .st5{fill:#37A0E5;} 
    .st6{fill:#4AD3AC;} 
    .st7{
        fill:none;
        stroke:#FFFFFF;
        stroke-width:2;
        stroke-miterlimit:10;
    } 
    .st8{fill:#FBB03B;} 
    .st9{
        fill:none;
        stroke:#F96155;
        stroke-width:2;
        stroke-miterlimit:10;
    } 
    .st10{fill:#F96155;} 
    .st11{
        fill:#F9F9F9;
        stroke:#737F84;
        stroke-width:2;
        stroke-linejoin:round;
        stroke-miterlimit:10;
    } 
    .st12{
        fill:#E2E6E8;
        stroke:#737F84;
        stroke-width:2;
        stroke-linejoin:round;
        stroke-miterlimit:10;
    } 

    svg {
        display: block;
        margin: 60px auto;
        width: 80%;
        max-width: 150px;
        cursor: pointer;
    }
    #all-items {
        opacity: 0;
    }


`

class SendButtonComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        let canvas = Snap.select("#svg-animation"),
        allItems = canvas.select("#all-items"),
        
        envelopeBg = canvas.select("#envelope-bg"),
        envelopeFg = canvas.select("#envelope-fg"),
        envelopeLip = canvas.select("#envelope-lip"),

        screens = canvas.select("#screens"),
        screen1 = screens.select("#screen1"),
        screen2 = screens.select("#screen2"),
        screen3 = screens.select("#screen3"),

        circleBg = canvas.select("#bg-circle"),
        bigCircle = canvas.circle(177, 177, 177),
        
        screenlist = [screen1, screen2, screen3];
    
        let envelopeLipTop = allItems.polygon("265,116 176,56 87,116");
        let closedLip = "265,116 176,176 87,116";
        
        allItems.attr({
        clip: bigCircle,
        opacity: 1
        });
        envelopeLipTop.attr({
        opacity: 0
        });
    
        screens.transform("t0,280");
        envelopeTransform("t0,300", false);
    
        function envelopeTransform(params, animation, nextAnim) {
        if (!animation) {
            envelopeBg.transform(params);
            envelopeFg.transform(params);
            envelopeLip.transform(params);
        } else {
            envelopeBg.animate({
            transform: params
            }, 300, mina.easeinout);
            envelopeFg.animate({
            transform: params
            }, 300, mina.easeinout);
            envelopeLip.animate({
            transform: params
            }, 300, mina.easeinout, nextAnim);
        }
        }
        
        function animateUp(element) {
            element.animate({
                transform: "t0,-280"
            }, 1000, mina.elastic);
        }
    
        for (let i = 0; i < 3; i++) {
            (function(i) {
                setTimeout(function() {
                animateUp(screenlist[i]);
                }, 200 * i);
            }(i));
        }
        
        function initSequence() {
            screen1.animate({
                transform: "t-59,-243"
            }, 200, mina.easeinout);
            screen3.animate({
                transform: "t59,-319"
            }, 200, mina.easeinout, dropPulse);
        }
    
        function dropPulse() {
            let pulseCircle = canvas.circle(176, 176, 50);
    
            pulseCircle.attr({
                stroke: "#fff",
                fill: "rgba(0,0,0,0)",
                strokeWidth: 15,
                opacity: 0
            });
        
            pulseCircle.animate({
                r: 100,
                opacity: 1
            }, 200, mina.easeinout);
        
            setTimeout(function() {
                pulseCircle.animate({
                r: 120,
                opacity: 0
                }, 200, mina.easeinout, moveEnvelope);
            }, 90);
        }
    
        function moveEnvelope() {
        setTimeout(function() {
            envelopeTransform("t0,0", true, animateLip);
        }, 50)
        }
    
        function animateLip() {
            envelopeLip.animate({
                opacity: 0
            }, 0, mina.linear);
        
            envelopeLipTop.attr({
                fill: "#A0AFB5",
                stroke: "#737F84",
                strokeWidth: 2,
                strokeLineJoin: "round",
                opacity: 1
            });
        
            envelopeLipTop.animate({
                "points": closedLip,
                fill: "#fff"
            }, 200, mina.easeinout, envelopeAnimOut);
        }
        
        function envelopeAnimOut() {
            setTimeout(function() {
                envelopeBg.animate({
                transform: "t300,0"
                }, 300, mina.easeinout);
        
                envelopeFg.animate({
                transform: "t300,0"
                }, 300, mina.easeinout);
        
                envelopeLipTop.animate({
                transform: "t300,0"
                }, 300, mina.easeinout);
        
                screens.animate({
                transform: "t300,280"
                }, 300, mina.easeinout, closeCircle);
            }, 200)
        }
    
        function closeCircle() {
            circleBg.animate({
                r: 50,
                fill: '#4ad3ac'
            }, 800, mina.bounce);
    
            let tick = allItems.polyline("156,179 170,193 199.2,163.8");
        
            tick.attr({
                stroke: "#fff",
                fill: "rgba(0,0,0,0)",
                strokeWidth: 4
            });
        }
        
        function animate() {
            initSequence();
        }
    
        canvas.click(function() {
        animate();
        canvas.unclick();
        });
    }
    render() {

        return(
            <Wrapper>
            <svg 
                version="1.1"
                id="svg-animation"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0" y="0" 
                viewBox="0 0 354 354" 
                xmlSpace="preserve">
                <circle 
                    id="bg-circle" 
                    className="st0" 
                    cx="177" 
                    cy="177" 
                    // r="77"
                    r = "177"
                />
                <g id="all-items">
                    <polygon 
                        id="envelope-bg" 
                        className="st1" 
                        points="89 117 91 115 261 115 262 116 264 118 264 236 88 236 88 118 "
                    />
                    <polygon 
                        id="envelope-lip" 
                        className="st2" 
                        points="265 116 176 56 87 116"
                    />
                    <g id="screens">
                        <g id="screen3">
                        <path 
                            className="st3" 
                            d="M45 270c-2.8 0-5-2.2-5-5V165c0-2.8 2.2-5 5-5h144c2.8 0 5 2.2 5 5v100c0 2.8-2.2 5-5 5H45z"
                        />
                        <path 
                            className="st1" 
                            d="M189 161c2.2 0 4 1.8 4 4v100c0 2.2-1.8 4-4 4H45c-2.2 0-4-1.8-4-4V165c0-2.2 1.8-4 4-4H189M189 159H45c-3.3 0-6 2.7-6 6v100c0 3.3 2.7 6 6 6h144c3.3 0 6-2.7 6-6V165C195 161.7 192.3 159 189 159L189 159z"
                        />
                        <line 
                            className="st4" 
                            x1="108" 
                            y1="184" 
                            x2="171" 
                            y2="184"
                        />
                        <line 
                            className="st4" 
                            x1="108" 
                            y1="192" 
                            x2="171"   
                            y2="192"
                        />
                        <line 
                            className="st4" 
                            x1="108" 
                            y1="200" 
                            x2="171" 
                            y2="200"
                        />
                        <line 
                            className="st4" 
                            x1="108" 
                            y1="208" 
                            x2="171" 
                            y2="208"
                        />
                        <line 
                            className="st4" 
                            x1="108" 
                            y1="216" 
                            x2="171" 
                            y2="216"
                        />
                        <line 
                            className="st4" 
                            x1="108" 
                            y1="224" 
                            x2="171" 
                            y2="224"
                        />
                        <line 
                            className="st4" 
                            x1="108" 
                            y1="232" 
                            x2="171" 
                            y2="232"
                        />
                        <line 
                            className="st4" 
                            x1="108" 
                            y1="240" 
                            x2="171" 
                            y2="240"
                        />
                        <line
                            className="st4" 
                            x1="108" 
                            y1="248" 
                            x2="148" 
                            y2="248"
                        />
                        <rect 
                            x="61.5" 
                            y="182.5" 
                            className="st5" 
                            width="41" 
                            height="43"
                        />
                        <path 
                            className="st5" 
                            d="M102 183v42H62v-42H102M103 182H61v44h42V182L103 182z"
                        />
                        <polygon 
                            className="st3" 
                            points="77 197 88 204 77 211 "
                        />
                    </g>
                    <g id="screen2">
                        <path 
                            className="st3" 
                            d="M104 231c-2.8 0-5-2.2-5-5V126c0-2.8 2.2-5 5-5h144c2.8 0 5 2.2 5 5v100c0 2.8-2.2 5-5 5H104z"
                        />
                        <path 
                            className="st1" 
                            d="M248 122c2.2 0 4 1.8 4 4v100c0 2.2-1.8 4-4 4H104c-2.2 0-4-1.8-4-4V126c0-2.2 1.8-4 4-4H248M248 120H104c-3.3 0-6 2.7-6 6v100c0 3.3 2.7 6 6 6h144c3.3 0 6-2.7 6-6V126C254 122.7 251.3 120 248 120L248 120z"
                        />
                        <rect 
                            x="121" 
                            y="144" 
                            className="st6" 
                            width="39" 
                            height="41"
                        />
                        <path 
                            className="st6" 
                            d="M159 145v39h-37v-39H159M161 143h-41v43h41V143L161 143z"
                        />
                        <polyline 
                            className="st7" 
                            points="117.7 186.2 133.7 170.3 151.2 187.8 "
                        />
                        <polyline 
                            className="st7" 
                            points="137.2 173.7 147.5 163.4 161.1 176.9 "
                        />
                        <path 
                            className="st3" 
                            d="M134.6 154.7c2.1 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7 -3.7-1.7-3.7-3.7S132.5 154.7 134.6 154.7M134.6 152.7c-3.2 0-5.7 2.6-5.7 5.7s2.6 5.7 5.7 5.7 5.7-2.6 5.7-5.7S137.7 152.7 134.6 152.7L134.6 152.7z"
                        />
                        <rect 
                            x="168.5" 
                            y="143.5" 
                            className="st5" 
                            width="63" 
                            height="42"
                        />
                        <path 
                            className="st5" 
                            d="M231 144v41h-62v-41H231M232 143h-64v43h64V143L232 143z"
                        />
                        <polygon 
                            className="st3" 
                            points="195 158 206 165 195 172 "
                        />
                        <line 
                            className="st4"
                            x1="120" 
                            y1="194" 
                            x2="232" 
                            y2="194"
                        />
                        <line 
                            className="st4" 
                            x1="120" 
                            y1="202" 
                            x2="232" 
                            y2="202"
                        />
                        <line 
                            className="st4" 
                            x1="120" 
                            y1="210" 
                            x2="189" 
                            y2="210"
                        />
                        </g>
                        <g id="screen1">
                        <path 
                            className="st3"
                             d="M163 194c-2.8 0-5-2.2-5-5V89c0-2.8 2.2-5 5-5h144c2.8 0 5 2.2 5 5v100c0 2.8-2.2 5-5 5H163z"
                        />
                        <path 
                            className="st1" 
                            d="M307 85c2.2 0 4 1.8 4 4v100c0 2.2-1.8 4-4 4H163c-2.2 0-4-1.8-4-4V89c0-2.2 1.8-4 4-4H307M307 83H163c-3.3 0-6 2.7-6 6v100c0 3.3 2.7 6 6 6h144c3.3 0 6-2.7 6-6V89C313 85.7 310.3 83 307 83L307 83z"
                        />
                        <g id="screen2sim_1_">
                        <rect 
                            x="250.5" 
                            y="107.5" 
                            className="st8" 
                            width="40" 
                            height="41"
                        />
                        <path 
                            className="st8" 
                            d="M290 108v40h-39v-40H290M291 107h-41v42h41V107L291 107z"
                        />
                    </g>
                    <path 
                        className="st7" 
                        d="M279.4 124.6c2 4.5-0.1 9.8-4.7 11.8s-9.8-0.1-11.8-4.7c-2-4.5 0.1-9.8 4.7-11.8C272.2 117.9 277.4 120 279.4 124.6z"
                    />
                    <path 
                        className="st3" 
                        d="M280 129.7c-0.1 0.6-0.3 1.2-0.5 1.7 1.4 1.1 2.1 2.1 1.9 2.6 -0.3 0.7-1.5 0.9-3.8 0.4 -1.8-0.4-4.3-1.2-7.7-2.5 -3.5-1.4-6-2.8-7.6-4 -1.7-1.3-2.4-2.3-2.1-2.9 0.3-0.5 1.3-0.6 2.8-0.4 0.2-0.5 0.5-1.1 0.9-1.5 -5.2-1.4-9.1-1.7-9.8-0.5 -0.8 1.4 2 4.5 8.5 7.8 2 1 4.2 2.1 6.9 3.1 2.4 0.9 4.5 1.7 6.4 2.4 7.7 2.6 11.1 2.7 11.8 1.1C288.2 135.6 285.2 132.7 280 129.7z"
                    />
                    <line 
                        className="st4" 
                        x1="181" 
                        y1="108" 
                        x2="244" 
                        y2="108"
                    />
                    <line 
                        className="st4" 
                        x1="181" 
                        y1="116" 
                        x2="244" 
                        y2="116"
                    />
                    <line 
                        className="st4" 
                        x1="181" 
                        y1="124" 
                        x2="244" 
                        y2="124"
                    />
                    <line
                        className="st4" 
                        x1="181" 
                        y1="132" 
                        x2="244" 
                        y2="132"
                    />
                    <line 
                        className="st4"
                        x1="181" 
                        y1="140" 
                        x2="244" 
                        y2="140"
                    />
                    <line 
                        className="st4" 
                        x1="181" 
                        y1="148" 
                        x2="220" 
                        y2="148"
                    />
                    <line 
                        className="st9" 
                        x1="181" 
                        y1="165" 
                        x2="291" 
                        y2="165"
                    />
                    <path 
                        className="st3" 
                        d="M199 170c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5S201.8 170 199 170z"
                    />
                    <path 
                        className="st10" 
                        d="M199 161c2.2 0 4 1.8 4 4s-1.8 4-4 4 -4-1.8-4-4S196.8 161 199 161M199 159c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6S202.3 159 199 159L199 159z"
                    />
                </g>
            </g>
            <g 
                id="envelope-fg">
                <polygon 
                    className="st11" 
                    points="265 235 87 235 87 117 "
                />
                <polygon 
                    className="st12" 
                    points="265 117 265 235 176 176 "
                />
                </g>
            </g>
            </svg>
                
            </Wrapper>   
        )
    }
  }
  export default SendButtonComponent;