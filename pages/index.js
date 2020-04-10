import fetch from "node-fetch";

const Index = props =>{
    const {locations, plants, calendars} = props;

    console.info(`locations: ${JSON.stringify(locations[0].name)}`);

    return(
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className='dashboard'>
                <div className='left-column'>
                    <div className='locations'>
                        <h2>Locations</h2>
                        <ul>
                        {locations.map((location)=>{
                                    return(<li>
                                                <div className='location'>
                                                    <div>
                                                        <h2>{location.name}</h2>
                                                        <h3><label>Racks: </label>{location.racks.length}</h3>
                                                        <h3><label>Plants: </label>{location.totalPlants}</h3>
                                                        <span>Seedlings: {location.totalSeedlings}</span>
                                                        <span>Juvenile: {location.totalJuvenile}</span>
                                                        <span>Mature: {location.totalMature}</span>
                                                    </div>
                                                </div>
                                                
                                            </li>)
                            })
                        }
                        </ul>
                    </div>
                    
                    <div className='plants'>
                        <h2>Plants</h2>
                            <ul>
                                {plants.map((plant)=>{
                                        return(<li>
                                                    <div className='plant'>
                                                        <h3><label>{plant.name}</label>: {plant.count}</h3>
                                                    </div>
                                                    
                                                </li>)
                                })
                                }
                            </ul>
                        </div>
                </div>
                   
                

                <div className='right-column'>
                    <div className='calendars'>
                        <h2>Calendars</h2>
                        <ul>
                            {calendars.map((calendar)=>{
                                    return(<li>
                                                <div className='calendar'>
                                                    <h3>{calendar.name}</h3>
                                                    <label>Plantings</label>
                                                    <ul>
                                                        {calendar.plantings.map((planting)=>{
                                                            return (
                                                                <li>{planting.date}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                                
                                            </li>)
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`

                .dashboard-container{
                    float:left;
                    height:100%;        
                    padding:0;
                }

                h1{
                    color: #4B4840;
                    border-bottom:solid 1px #8C847D;
                    margin:0;
                    padding:15px 15px 25px 15px;
                    font-size:large;
                }
            
                .dashboard{
                    height:100%;
                }

                .dashboard h2{
                    color: #8C847D;
                    border-bottom:solid 1px #C2BC97;
                    width:100%;
                    margin:0;
                    padding:0 0 25px 0;
                }
                .dashboard div{
                    padding:15px 45px 15px 45px;
                    color:#252422;
                    float:left;
                    margin:5px;
                    border-radius:6px;
                }

                .dashboard div li{
                    list-style:none;
                    float:left;
                }

                .left-column{
                    width:60%;
                }

                .left-column div{
                    background:#fefefe;
                }

                .right-column{
                    width:20%;
                }

                .right-column div{
                    background:#fefefe;
                }


                .plants{
                    width:100%;
                    margin:5px;
                }

                .calendars{
                    height:100%;
                }

                .calendar li{
                    clear:both;
                }

                .locations{
                    width:100%;
                }

                .location{
                    border:solid 1px #8C847D;
                    padding:0 !important;
                    margin:0;
                    width:101%;
                }

                .location h2{
                    color:#4B4840;
                    padding:5px 10px;
                }

                .location div{ 
                    padding:0px 0px 0px 0px;
                }

                .location h3{
                    padding:5px 10px;
                }
                
                h3{
                    color: #e59729;
                    padding:0;
                    margin:0;
                }

                h3 label{
                    color:#9c9c9c;
                }

                h4{
                    font-size:small;
                    color: #e59729;
                    padding:0;
                    margin:0;
                }
                
                .location span{
                    font-size:x-small;
                    padding:0 0 0 10px;
                    color: #252422;
                    margin:0;
                    display:flex;
                }

            `}</style>
        </div>
    )
};

Index.getInitialProps = async(ctx) =>{
    const locations = await getLocations();
    console.info(`locations: ${locations}`);

    const plants = await getPlants(ctx);
    console.info(`plants: ${plants}`);

    const calendars = await getCalendars();
    console.info(`calendars: ${calendars}`);

    const props = {
        locations,
        plants,
        calendars
    };

    console.info(`props: ${props}`);
    return props;
};

const getLocations = async () =>{
    const locations = [
        {
            icon:'home',
            name:'home', 
            totalPlants:70,
            totalSeedlings:20,
            totalJuvenile:50,
            totalMature:0,
            racks:[
                {
                    name:'office-rack',
                    plants:70,
                    trays:[
                        {
                            name:'lower-rack',
                            plantCount: 50 
                        },
                        {
                            name:'middle-rack',
                            plantCount: 25 
                        }
                    ]
                }
            ]
        }
    ];

    return locations;
};

const getPlants = async (ctx) =>{
    const {accountId} = ctx.query;
    const {req} = ctx;

    const apiUrl = `http://${req.headers.host}/api/plants/${accountId}`;
    console.info(`plant api url: ${apiUrl}`);

    const result = await fetch(apiUrl, {
        method: 'GET'
    });

    const plants = await result.json();

    console.info(`plants, from page: ${plants}`);
    return plants;
};

const getCalendars = async () =>{
    const calendars = [
        {
            name:'office-rack-calendar',
            plantings:[
                {date:'03/28/2020'},
                {date:'04/01/2020'},
                {date:'04/06/2020'}
            ]
        }
    ];

    return calendars;
};

export default Index;