import React, { FC, useState, useEffect } from 'react'
interface ITooltip {
  imgUrl?: string
  term: string
}
export const Tooltip: FC<ITooltip> = ({ imgUrl, term }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (imgUrl) {
      setShow(true)
    }
  }, [imgUrl])
  return (
    <div className="tooltip-container" onMouseLeave={() => setShow(false)}>
      <div className={show ? 'tooltip-box visible' : 'tooltip-box'}>
        {term}
        <div className="tooltip-arrow" />
        <div>
          <img alt={'gif'} src={imgUrl} />
        </div>
      </div>
    </div>
  )
}
