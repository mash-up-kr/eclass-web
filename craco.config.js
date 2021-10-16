module.exports = {
  style: {
    sass: {
      loaderOptions: (sassLoaderOptions, { paths }) => {
        return {
          ...sassLoaderOptions,
          additionalData: `
            @use "sass:color";
            @use "sass:list";
            @use "sass:map";
            @use "sass:math";
            @use "sass:meta";
            @use "sass:selector";
            @use "sass:string";
            @use "utils" as *;
            @use "variables" as *;
          `,
          sassOptions: {
            includePaths: [paths.appSrc + '/styles']
          }
        };
      },
    },
  },
};
