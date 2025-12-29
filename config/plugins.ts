export default {
  i18n: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        params: {
          folder: "pediland",
        },
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
};
