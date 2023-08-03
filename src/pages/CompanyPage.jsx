import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {

  const {companySlug} = useParams()

  let array = props.companies.find(el => {
  return   el.slug === companySlug
  })
  console.log(array)
  return (
    <div className="linkBox" key={array.name}>
   
      <p>{array.name}</p>
      <p>{array.website}</p>
      <p>{array.description}</p>
      <img src={array.logo}  style={{width: '5rem'}}alt="" />
      {array.techStack.map(el => {
        console.log(el.name)
      
    return (
     <Link to={`/${el}`}
     key={el.id}>
       {el.name}
     </Link>
    )

      
      })}
    </div>
  );
}

export default CompanyPage;
