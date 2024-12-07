import { useNitroOrigin } from '#site-config/server/composables/useNitroOrigin'
import { defineEventHandler } from 'h3'
import { useSchemaOrgConfig } from '../../utils/config'

export default defineEventHandler(async (e) => {
  const nitroOrigin = useNitroOrigin(e)
  return {
    nitroOrigin,
    runtimeConfig: useSchemaOrgConfig(e),
  }
})
