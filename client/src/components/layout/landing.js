import React from 'react'; //importing react because this is a front end file
import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <section className="landing">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developerspoop
          </p>
          <div className="buttons">
            <Link to='/register' className="btn btn-primary">Sign Up</Link>
            <Link to='/login' className="btn btn-light">Login</Link>
          </div>
        </div>
        </section>
    )
}
 export default Landing;