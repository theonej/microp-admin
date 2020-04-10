import Head from 'next/head';

const Template = props =>{
    return(
        <div className='layout'>
            <Head></Head>

            <div className='main-menu'>
                <h2>MiCrop</h2>
                <ul>
                    <li>locations</li>
                    <li>plants</li>
                    <li>calendars</li>
                    <li>settings</li>
                </ul>
            </div>
            <div className='main-container'>
                {props.children}
            </div>

            <style jsx global>{`

                .colors{
                    background:#4B4840;
                    color:#dbdbdb;
                    border:solid 1px #8C847D;
                    background:#F5F4F6;
                    border-bottom:solid 1px #C2BC97;
                }

                #__next{
                    height:100%;
                    float:left;
                }

                .layout{
                    height:100%;
                }

                body, html{
                    font-family: "Proxima Nova", system-ui, sans-serif;
                    height:100%;
                    background:#fefefe;
                    margin:0;
                    padding:0;
                }

                .main-menu{
                    float:left;
                    width:10%;
                    height:100%;
                    color:#252422;
                    padding: 25px 15px 0 15px;
                }

                .main-menu h2{
                    color: #252422;
                    border-bottom:solid 1px #fefefe;
                    width:100%;
                    margin:0;
                    padding:0 0 25px 0;
                    text-align:center;
                }
                .main-menu li{
                    list-style:none;
                    padding:10px 0 10px 15px;
                    font-variant:small-caps;
                }

                .main-container{
                    height:100%;
                    width:85%;
                    float:left;
                    padding:0px;
                    background:#fefefe;
                    border-radius: 6px;

                }
            `}</style>
        </div>
    )
};

export default Template;