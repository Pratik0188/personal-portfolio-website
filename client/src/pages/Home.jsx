import {
    SiPython, SiMysql, SiApachespark, SiApacheairflow, SiPostgresql,
    SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiOpencv,
    SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript,
  } from "react-icons/si";
  
  const skills = {
    "Data Engineering": [
      { name: "Python", icon: <SiPython /> },
      { name: "SQL", icon: <SiMysql /> },
      { name: "Apache Spark", icon: <SiApachespark /> },
      { name: "Airflow", icon: <SiApacheairflow /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
    "ML / DL": [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "OpenCV", icon: <SiOpencv /> },
    ],
    "Web Development": [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  };
  
  export default function Home() {
    return (
      <>
        <section className="home-hero">
          <div className="home-text">
            <h1>
              Hello, I'm <span className="drop-in">Pratik Pujara</span>
            </h1>
            <p>Aspiring Data Engineer | ML/DL Enthusiast | MERN developer</p>
            <p className="home-intro">
              I am an aspiring Data Engineer who loves exploring data driven solutions using machine learning. I enjoy turning ideas into real, working products
              from React interfaces to trained models.
            </p>
            <div className="social-links">
              <p>Projects :</p>
              <a href="https://github.com/Pratik0188" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <br />
              <p>Social Media :</p>
              <a href="https://www.linkedin.com/in/pratik-pujara-b343b0262/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <img
            src="/profile.jpg"
            alt="Pratik Pujara"
            className="profile-photo"
          />
        </section>
  
        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-category" key={category}>
                <h3>{category}</h3>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span className="skill-tag" key={skill.name} title={skill.name}>
                      {skill.icon}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }