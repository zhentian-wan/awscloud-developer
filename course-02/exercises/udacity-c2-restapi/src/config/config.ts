export const config = {
  dev: {
    username: process.env.UDACITY_PROJECT2_DEV_USERNAME,
    password: process.env.UDACITY_PROJECT2_DEV_PASSWORD,
    database: process.env.UDACITY_PROJECT2_DEV_DB,
    host: process.env.UDACITY_PROJECT2_DEV_HOST,
    dialect: process.env.UDACITY_PROJECT2_DEV_DIALECT,
    aws_region: process.env.UDACITY_PROJECT2_DEV_AWS_REGION,
    aws_profile: process.env.UDACITY_PROJECT2_DEV_AWS_PROFILE,
    aws_media_bucket: process.env.UDACITY_PROJECT2_DEV_MEDIA_BUCKET,
  },
  prod: {
    username: "",
    password: "",
    database: process.env.UDACITY_PROJECT2_PROD_DB,
    host: "",
    dialect: process.env.UDACITY_PROJECT2_PROD_DIALECT,
  },
};
