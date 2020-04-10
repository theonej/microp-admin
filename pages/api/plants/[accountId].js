const fetch = require('node-fetch');

export default async (req, res) =>{
    try{
        const {accountId} = req.query;

        const esUrl = `${process.env.ES_CLUSTER_URL}/plants/_search?q=accountId:${accountId}`;
        console.info(`es url; ${esUrl}`);

        const results = await fetch(esUrl, {
            method:'GET'
        });

        const docs = await results.json();
        console.info(docs);

        const plants = docs.hits.hits.map((doc)=>{
            return doc._source;
        });

        console.info(`plants, from api: ${plants}`);
        
        res.status(200).json(plants);
    }catch(e){
        console.error(`an error occurred while getting plants: ${e}`);
        res.status(500).json({message:e});
    }
};