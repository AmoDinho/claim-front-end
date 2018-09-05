const dev = {
    STRIPE_KEY: "pk_test_IQEA1vOcYdHCZWvmHTZkeTt3",
    s3:{
        REGION: "us-east-1",
        BUCKET: "claim-backend-api-dev-attachmentbucket-2c7tz001pf4d"
        },
        apiGateway:{
            REGION: "us-east-1",
            URL: "https://yemdd8vitj.execute-api.us-east-1.amazonaws.com/dev"
        },
        cognito: {
            REGION: "us-east-1",
            USER_POOL_ID: "us-east-1_wAwNWKs2V",
            APP_CLIENT_ID: "epkup4nf1l4m3ehaa8sljj8ok",
            IDENTITY_POOL_ID: "us-east-1:b3d84e26-c3cd-4e90-b848-cfdac24fdcf9"
        }
};

const prod = {
    STRIPE_KEY: "pk_test_IQEA1vOcYdHCZWvmHTZkeTt3",
    s3:{
        REGION: "us-east-1",
        BUCKET: "claim-backend-api-prod-attachmentbucket-kof92ubjpsuc"
        },
        apiGateway:{
            REGION: "us-east-1",
            URL: "https://gq2pgkljq4.execute-api.us-east-1.amazonaws.com/prod"
        },
        cognito: {
            REGION: "us-east-1",
            USER_POOL_ID: "us-east-1_q1DA5aZU0",
            APP_CLIENT_ID: "7qds0c9ag1u4etf3r8k3sg776",
            IDENTITY_POOL_ID: "us-east-1:bc037b34-b965-4d04-a6bd-a613fc527492"
        }
};

const config = process.env.REACT_APP_STAGE === 'prod'
   ? prod
   : dev;

export default {
  MAX_ATTACHEMENT_SIZE: 5000000,
  ...config
};

