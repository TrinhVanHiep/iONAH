import "./TagType.scss"

const TagType = ({ typeId, typeName }) => {
  return (
    <div key={typeId} className="tag-type">
      <span className="tag-type__title">{typeName}</span>
    </div>
  )
}

export default TagType;
