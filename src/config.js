export default {
  isDev: process.env.NODE_ENV === 'development',
  defaults: {
    dateFormat: 'MM-DD-YYYY hh:mma',
  },
  endpoints: {
    base: process.env.API_BASE_URL,
    images: process.env.PUBLIC_IMAGES_BASE_URL,
    story: `${process.env.API_BASE_URL}${process.env.API_PREFIX}/admin/stories`,
    category: `${process.env.API_BASE_URL}${process.env.API_PREFIX}/admin/categories`,
    applications: `${process.env.API_BASE_URL}${process.env.API_PREFIX}/admin/applications`,
    reports: `${process.env.API_BASE_URL}${process.env.API_PREFIX}/admin/reports`,
    imageUpload: `${process.env.API_BASE_URL}${process.env.API_PREFIX}/upload`,
  },
};
