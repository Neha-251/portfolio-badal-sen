

export const SubMenu = ({data}) => {
  return (
    <div className="subMenu">
    {data.map((el, ind) => {
      return (
        <div className="subMenuItem" key={ind}>
          {el.subItem}
        </div>
      )
    })}
    </div>
  )
}