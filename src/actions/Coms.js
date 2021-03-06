import * as types from '../constants/ActionTypes'
let nextComId = 1

export const addCom = (attribute, targetPageId, comType) => ({
  type: types.ADD_COM,
  id: nextComId++,
  attribute: {
    ...attribute,
    name: attribute.name + (nextComId - 1)
  },
  targetPageId,
  comType
})

export const updateCom = (id, attribute) => ({
  type: types.UPDATE_COM,
  id,
  attribute
})

export const focusCom = id => ({
  type: types.FOCUS_COM,
  id
})

export const deleteCom = (id, targetPageId) => ({
  type: types.DELETE_COM,
  id,
  targetPageId
})

export const updateComZindex = (
  layers,
  oldIndex,
  newIndex,
  targetPageId,
  chooseComId
) => ({
  type: types.UPDATE_COM_ZINDEX,
  layers,
  oldIndex,
  newIndex,
  targetPageId,
  chooseComId
})
