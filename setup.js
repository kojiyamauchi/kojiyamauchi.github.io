// Switching Locations. (Production -> Local Server -> Development.)
const location =
  process.env.GITHUB_ACTIONS && process.env.NODE_ENV === `production`
    ? `https://kojiyamauchi.github.io`
    : process.env.NODE_ENV === `production`
    ? `http://localhost:9000`
    : `https://localhost:8000`

// Switching Path Prefix. (When Deploy to Subdirectory.)
const pathPrefix = () => {
  const setConfig = {
    enable: false,
    subDir: `/`
  }
  const setPathPrefix = setConfig.enable && process.env.GITHUB_ACTIONS ? setConfig.subDir : `/`

  return setPathPrefix
}

// When Using Materials Through GraphQL.
const materials = {
  images: true,
  icons: false,
  fonts: false,
  json: false,
  csv: false,
  pdf: false
}

// Choose CMS. Default is `markdown`.
const cms = ['markdown', 'contentful', 'microcms', 'wordpress', 'none'][4]

module.exports = {
  LOCATION: location,
  PATH_PREFIX: pathPrefix(),
  CHOOSE_MATERIALS: materials,
  CHOOSE_CMS: cms
}
