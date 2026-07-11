import "./About.css"

export default function Journey() {
  return (
        <div className="journey">
            <h2>My Journey</h2>
            <div className="journey-grid">
                <div className="journey-step">
                    <h3>1. Programming Fundamentals</h3>
                    <p>Through C++, Java, OOP, PHP, SQL, CSS, JS</p>
                </div>
                <div className="journey-step">
                    <h3>2. Integrated into Applications</h3>
                    <p>Through WordPress, Android Studio, Unity</p>
                </div>
                <div className="journey-step">
                    <h3>3. Professional Experience</h3>
                    <p>With WordPress, GSAP and custom fields</p>
                </div>
                <div className="journey-step">
                    <h3>4. Learning new Frameworks</h3>
                    <p>Such as React, Vite, TypeScript</p>
                </div>
                <div className="journey-step">
                    <h3>5. Continuing to Grow</h3>
                    <p>To be continued...</p>
                </div>
            </div>
        </div>
    );
}