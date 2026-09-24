import { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';

const projects = [
  {
    _id: 1,
    title: "Weather Prediction using Logistic Regression",
    description: "A machine learning project that predicts weather outcomes using a logistic regression model.",
    githubLink: "https://github.com/Pratik0188/Weather-prediction-using-logistic-regression",
  },
  {
    _id: 2,
    title: "Medallion Architecture – Data Warehouse & Analytics",
    description: "A data warehousing project implementing Medallion Architecture (Bronze/Silver/Gold layers) — ingesting raw CSVs into SQL Server, cleansing and standardizing data in the Silver layer, and modeling business-ready star-schema tables in the Gold layer for analytics and reporting.",
    githubLink: "https://github.com/Pratik0188/Medallion-Architecture",
  },
  {
    _id: 3,
    title: "Exploratory Data Analysis & Feature Engineering on House Price Prediction Dataset",
    description: "An EDA and feature engineering project on the House Price Prediction dataset — exploring data distributions and correlations, handling missing values, and engineering features to prepare the data for a predictive model.",
    githubLink: "https://github.com/Pratik0188/Exploratory-Data-Analysis-Feature-Engineering-0n-House-Price-Prediction-Dataset",
  },
  {
    _id: 4,
    title: "Sales & Customer Dashboard",
    description: "An interactive Sales & Customer dashboard built in Tableau, covering the full workflow from mockup design through project phases to a working data visualization for tracking sales and customer insights.",
    githubLink: "https://github.com/Pratik0188/Sales-dashboard-project",
  },
  // add more projects here
];

export default function Projects() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <input
        placeholder="Search projects…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="projects-search"
      />
      {filtered.length === 0 && <p>No projects found.</p>}
      <div className="projects-grid">
        {filtered.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}