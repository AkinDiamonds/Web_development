import './CompanyCard.css';

function CompanyCard({ name, industry, location, employees, logo, featured }) {
    return (
        <div className={`company-card ${featured? 'featured' : ''}`}>
            <img src={logo} alt={`${name} logo`} className= "company-logo"/>

            <h2>{name}</h2>
        </div>
    )
}