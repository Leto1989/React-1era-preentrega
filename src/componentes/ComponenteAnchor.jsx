import './ComponenteAnchor.css'
;
export default function ComponenteAnchor ({nombre, onMouseOver, onMouseOut}) {

    return <a  className='anchorStyle' onMouseOver={onMouseOver} onMouseOut={onMouseOut}> {nombre} </a>
}