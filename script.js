/**
 * script.js
 */

document.body.onclick = ({ target }) => {
  console.log("target:", target);
  const breadcrumbs = []
  while (target) {
    let classNames = (
      Array.from(target.classList || [])
    ).join(".")
    const element = target.tagName + (classNames ? "."+classNames : "")
    
    breadcrumbs.push (element)
    target = target.parentNode
  }
  console.log("breadcrumbs:", breadcrumbs);
  
}