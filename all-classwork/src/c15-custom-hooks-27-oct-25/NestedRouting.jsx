import {Link, Outlet} from 'react-router-dom'

const NestedRouting = () => {
  return (
    <>
    <div>
        <h2>this is nested routing</h2>
        <h2>see the seatch bar the detailed route is given in the link</h2>
        <ul>
            <li><Link to="n1">Nesting 1</Link></li>
            <li><Link to="n2">Nesting 2</Link></li>
        </ul>
        {/* we use outlet to show the nested pages routing */}
        <Outlet/>
    </div>
    </>
  )
}

export default NestedRouting