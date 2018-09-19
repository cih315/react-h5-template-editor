// @flow
import React from 'react'
import Com from './Com'

type Props = {
  comList: Array<any>,
  updateCom: () => void,
  focusCom: () => void,
  currentPage: number,
  currentCom: Array<number>
}
class Canvas extends React.Component<Props> {
  render() {
    const designArea = {
      width: '375px',
      height: '667px',
      border: '1px dashed #a3afb7',
      backgroundColor: '#eef1f6'
    }

    const sortByOrder = (items: Array<any>, order: Array<number>) => {
      let result = []
      order.forEach(e => {
        let r = items.find(item => item.id === e)
        if (r !== undefined) {
          result.push(r)
        }
      })
      return result
    }

    const { comList, currentCom, currentPage, updateCom, focusCom } = this.props

    let renderComs = sortByOrder(
      comList.filter(item => currentCom.includes(item.id)),
      currentCom
    )

    return (
      <div className="design-area" style={designArea}>
        {renderComs.map((com, index) => (
          <Com
            key={`${currentPage} + ${com.id}`}
            {...com}
            updateCom={updateCom}
            focusCom={focusCom}
            zIndex={index}
          />
        ))}
      </div>
    )
  }
}

export default Canvas