/* globals INCLUDE_RESOURCES_PATH */
import Vue from 'vue'

/**
 * Set `__resources` path to resources files in renderer process
 */
global.__resources = undefined // eslint-disable-line no-underscore-dangle
// noinspection BadExpressionStatementJS
INCLUDE_RESOURCES_PATH // eslint-disable-line no-unused-expressions
// eslint-disable-next-line no-undef
if (__resources === undefined) console.error('[Renderer-process]: Resources path is undefined')

// eslint-disable-next-line no-undef
Vue.prototype.__resources = __resources
