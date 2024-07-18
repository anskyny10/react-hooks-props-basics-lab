import React from 'react'
import user from "../data/user"; //is the import user in app.js enough?

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  )
}

export default Links




// import React from 'react'
// import user from "../data/user"; //is the import user in app.js enough?

// function Links(props) {
//   return (
//     <div>
//       <h3>"Links"</h3>
//       <a href={props.links.github}>{props.links.github}</a>
//       <a href={props.links.linkedin}>{props.links.linkedin}</a>
//     </div>
//   )
// }

// export default Links