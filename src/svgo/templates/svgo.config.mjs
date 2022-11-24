/**
 * @file SVGO config
 */

/**
 * @type {import('svgo').Config}
 */
export default {
  plugins: [
    `cleanupAttrs`,
    `cleanupEnableBackground`,
    `cleanupIds`,
    `cleanupListOfValues`,
    `cleanupNumericValues`,
    `collapseGroups`,
    `convertColors`,
    `convertPathData`,
    `convertShapeToPath`,
    `convertStyleToAttrs`,
    `convertTransform`,
    `mergePaths`,
    `removeComments`,
    `removeDesc`,
    `removeDimensions`,
    `removeDoctype`,
    `removeEditorsNSData`,
    `removeEmptyAttrs`,
    `removeEmptyContainers`,
    `removeEmptyText`,
    `removeHiddenElems`,
    `removeMetadata`,
    `removeNonInheritableGroupAttrs`,
    `removeRasterImages`,
    `removeTitle`,
    `removeUnknownsAndDefaults`,
    `removeUselessDefs`,
    `removeUnusedNS`,
    `removeUselessStrokeAndFill`,
    `removeXMLProcInst`,
    `removeStyleElement`,
    `removeUnknownsAndDefaults`,
    `sortAttrs`,
    {
      name: `removeAttrs`,
      params: {
        attrs: [`fill`, `fill-rule`, `stroke`, `class`],
      },
    },
  ],
}
