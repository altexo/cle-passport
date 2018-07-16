const config ={

    Auth: {
        identityPoolId: 'us-west-2:2b780d89-b164-404c-9d21-4148a6d3ee18',
        region: 'us-west-2',
        userPoolId: 'us-west-2_w1b1FWdV8',
        userPoolWebClientId: '7mkla4lrl0lu04jp6d9fqupa7e',
    },
    API: {
        endpoints: [
            {
                name: "Cle API",
                endpoint: "https://xh1u2m29mi.execute-api.us-west-2.amazonaws.com/stage"
            }
        ]
    },
    Storage: {
        bucket: 'stage-organization-documents', //REQUIRED -  Amazon S3 bucket
        region: 'us-west-2', //OPTIONAL -  Amazon service region
    }

}


export default config;